import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../src/lib');

function fixture({ consent, hostname = 'adamzasada.com', mode = 'production', deployment,
  measurementId = 'G-TEST123', readBlocked = false, writeBlocked = false, server = false } = {}) {
  const storage = new Map(consent === undefined ? [] : [['cookieConsent', String(consent)]]);
  const events = new EventTarget();
  const cookieWrites = [];
  let reloads = 0;
  const localStorage = {
    getItem(key) {
      if (readBlocked) throw new Error('Storage unavailable');
      return storage.get(key) ?? null;
    },
    setItem(key, value) {
      if (writeBlocked) throw new Error('Storage unavailable');
      storage.set(key, value);
    },
  };
  const window = {
    localStorage,
    location: { hostname, reload: () => reloads++ },
    addEventListener: events.addEventListener.bind(events),
    removeEventListener: events.removeEventListener.bind(events),
    dispatchEvent: events.dispatchEvent.bind(events),
  };
  const document = {};
  Object.defineProperty(document, 'cookie', {
    get: () => '_ga=123; _ga_TEST123=456; essential=keep',
    set: (value) => cookieWrites.push(value),
  });
  const cache = new Map();
  function load(name) {
    const path = resolve(root, `${name}.ts`);
    if (cache.has(path)) return cache.get(path).exports;
    const compiledModule = { exports: {} };
    cache.set(path, compiledModule);
    const js = ts.transpileModule(readFileSync(path, 'utf8'), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
    }).outputText;
    const context = {
      ...(server ? {} : { window, document }), Event, URL,
      process: { env: { NODE_ENV: mode, NEXT_PUBLIC_VERCEL_ENV: deployment, NEXT_PUBLIC_GA_MEASUREMENT_ID: measurementId } },
      module: compiledModule, exports: compiledModule.exports,
      require: (specifier) => load(specifier.replace('./', '')),
    };
    vm.runInNewContext(js, context, { filename: path });
    return compiledModule.exports;
  }
  const api = load('analytics');
  const consentApi = load('analytics-consent');
  return {
    api, consentApi, window, cookieWrites, storage,
    get reloads() { return reloads; },
    commands: () => (window.dataLayer ?? []).map((args) => Array.from(args)),
    externalConsent(value) {
      if (value === null) storage.delete('cookieConsent');
      else storage.set('cookieConsent', String(value));
      const event = new Event('storage');
      Object.assign(event, { key: value === null ? null : 'cookieConsent', storageArea: localStorage });
      window.dispatchEvent(event);
    },
  };
}

const contact = { contact_method: 'email', contact_location: 'cta_section' };

test('does not initialize or queue events without explicit consent', () => {
  for (const consent of [undefined, false, 'invalid']) {
    const f = fixture({ consent });
    f.api.initializeAnalytics();
    f.api.trackContactClick(contact);
    assert.equal(f.window.gtag, undefined);
    assert.equal(f.commands().length, 0);
  }
});

test('blocks localhost, preview deployments, other domains, and development builds', () => {
  for (const options of [{ hostname: 'localhost' }, { hostname: '127.0.0.1' },
    { hostname: 'preview.vercel.app' }, { deployment: 'preview' }, { mode: 'development' }]) {
    const f = fixture({ consent: true, ...options });
    f.api.trackContactClick(contact);
    assert.equal(f.api.canCollectAnalytics(), false);
    assert.equal(f.window.gtag, undefined);
  }
});

test('acceptance queues consent before config and initializes exactly once', () => {
  const f = fixture();
  f.consentApi.saveAnalyticsConsent(true);
  f.api.initializeAnalytics();
  f.api.initializeAnalytics();
  f.api.trackContactClick(contact);
  const commands = f.commands();
  assert.equal(commands.filter(([command]) => command === 'config').length, 1);
  assert.equal(commands[0][0], 'consent');
  assert.equal(commands[0][2].analytics_storage, 'denied');
  assert.equal(commands[1][2].analytics_storage, 'granted');
  assert.equal(commands[3][2].allow_google_signals, false);
  assert.equal(commands.at(-1)[1], 'contact_click');
  assert.equal(commands.at(-1)[2].contact_method, 'email');
  assert.equal(commands.at(-1)[2].send_to, 'G-TEST123');
});

test('revoking stops events, disables GA, clears queued events and GA cookies, and reloads once', () => {
  const f = fixture({ consent: true });
  const stop = f.consentApi.subscribeToAnalyticsConsent(() => {});
  f.api.initializeAnalytics();
  f.consentApi.saveAnalyticsConsent(false);
  f.api.trackContactClick(contact);
  assert.equal(f.api.canCollectAnalytics(), false);
  assert.equal(f.window['ga-disable-G-TEST123'], true);
  assert.equal(f.commands().length, 0);
  assert.equal(f.storage.get('cookieConsent'), 'false');
  assert.equal(f.reloads, 1);
  assert.ok(f.cookieWrites.some((value) => value.startsWith('_ga=')));
  assert.ok(f.cookieWrites.some((value) => value.startsWith('_ga_TEST123=')));
  assert.ok(f.cookieWrites.every((value) => !value.startsWith('essential=')));
  stop();
});

test('storage events synchronize acceptance and withdrawal across tabs', () => {
  const f = fixture();
  const stop = f.consentApi.subscribeToAnalyticsConsent(() => f.api.initializeAnalytics());
  f.externalConsent(true);
  assert.equal(f.window.siteAnalyticsInitialized, true);
  f.externalConsent(false);
  assert.equal(f.api.canCollectAnalytics(), false);
  assert.equal(f.reloads, 1);
  stop();
});

test('clearing consent in another tab also revokes tracking', () => {
  const f = fixture({ consent: true });
  const stop = f.consentApi.subscribeToAnalyticsConsent(() => {});
  f.api.initializeAnalytics();
  f.externalConsent(null);
  assert.equal(f.api.canCollectAnalytics(), false);
  assert.equal(f.reloads, 1);
  stop();
});

test('unsubscribed listeners no longer respond to storage changes', () => {
  const f = fixture();
  let changes = 0;
  const stop = f.consentApi.subscribeToAnalyticsConsent(() => changes++);
  stop();
  f.externalConsent(true);
  assert.equal(changes, 0);
});

test('storage failures retain the choice in memory and do not reload into a stale acceptance', () => {
  for (const options of [{ readBlocked: true, writeBlocked: true }, { consent: true, writeBlocked: true }]) {
    const f = fixture(options);
    f.consentApi.saveAnalyticsConsent(true);
    f.api.initializeAnalytics();
    f.consentApi.saveAnalyticsConsent(false);
    f.api.trackContactClick(contact);
    assert.equal(f.consentApi.readAnalyticsConsent(), false);
    assert.equal(f.commands().length, 0);
    assert.equal(f.reloads, 0);
    f.consentApi.saveAnalyticsConsent(true);
    f.api.trackContactClick(contact);
    assert.equal(f.window['ga-disable-G-TEST123'], false);
    // A slow Google loader must still receive config after its old queue was discarded.
    assert.equal(f.commands().filter(([command]) => command === 'config').length, 1);
    assert.equal(f.commands().at(-1)[1], 'contact_click');
  }
});

test('outbound events strip URL queries, hashes, and credentials and reject unsafe schemes', () => {
  const f = fixture({ consent: true });
  f.api.trackOutboundClick('https://user:secret@example.com/path?email=private#token', 'Project', 'experience', 'Example');
  const event = f.commands().at(-1);
  assert.equal(event[1], 'outbound_click');
  assert.equal(event[2].outbound_url, 'https://example.com/path');
  assert.equal(event[2].link_location, 'experience');
  assert.equal(event[2].company, 'Example');
  const count = f.commands().length;
  for (const url of ['mailto:private@example.com', 'javascript:alert(1)', 'invalid']) {
    f.api.trackOutboundClick(url, 'Invalid');
  }
  assert.equal(f.commands().length, count);
});

test('a cross-tab acceptance restores the ability to revoke after a failed storage write', () => {
  const f = fixture({ consent: true, writeBlocked: true });
  const stop = f.consentApi.subscribeToAnalyticsConsent(() => f.api.initializeAnalytics());
  f.api.initializeAnalytics();
  f.consentApi.saveAnalyticsConsent(false);
  assert.equal(f.reloads, 0);
  f.externalConsent(false);
  f.externalConsent(true);
  assert.equal(f.api.canCollectAnalytics(), true);
  f.externalConsent(false);
  assert.equal(f.window['ga-disable-G-TEST123'], true);
  assert.equal(f.reloads, 1);
  stop();
});

test('missing or invalid measurement IDs do not initialize Google', () => {
  for (const measurementId of ['', 'bad-id', "G-TEST';alert(1)"]) {
    const f = fixture({ consent: true, measurementId });
    f.api.trackContactClick(contact);
    assert.equal(f.window.gtag, undefined);
  }
});

test('server rendering never touches browser globals', () => {
  const f = fixture({ server: true });
  f.api.initializeAnalytics();
  f.api.trackContactClick(contact);
  assert.equal(f.consentApi.readAnalyticsConsent(), null);
});
