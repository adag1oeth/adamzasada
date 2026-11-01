import { getMeasurementId, isAnalyticsEnvironment } from './analytics-environment';
import type {} from '@/types/analytics';

const CONSENT_KEY = 'cookieConsent';
const CONSENT_EVENT = 'consentUpdated';
export const OPEN_PREFERENCES_EVENT = 'openAnalyticsPreferences';
let sessionConsent: boolean | undefined;
let revoking = false;

export function readAnalyticsConsent(): boolean | null {
  if (typeof window === 'undefined') return null;
  if (sessionConsent !== undefined) return sessionConsent;
  try {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    return stored === 'true' ? true : stored === 'false' ? false : null;
  } catch {
    // Consent still works for this page when storage is unavailable.
    return null;
  }
}

function revokeAnalytics(reload = true): void {
  if (revoking) return;
  revoking = true;
  const measurementId = getMeasurementId();
  if (measurementId) window[`ga-disable-${measurementId}`] = true;
  window.gtag?.('consent', 'update', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  // Discard queued events that have not yet reached the Google script.
  if (window.dataLayer) window.dataLayer.length = 0;
  window.siteAnalyticsInitialized = false;

  const hostParts = window.location.hostname.split('.');
  const domains = ['', ...hostParts.map((_, index) => hostParts.slice(index).join('.'))];
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.split('=')[0].trim();
    if (!/^(_ga(?:_|$)|_gid$|_gat(?:_|$))/.test(name)) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; Path=/;${domain ? ` Domain=${domain};` : ''}`;
    }
  }
  // Unmounting React components cannot unload existing vendor scripts.
  // Reload with the saved refusal to stop GA and both Vercel collectors.
  if (reload && isAnalyticsEnvironment()) window.location.reload();
}

export function saveAnalyticsConsent(accepted: boolean): void {
  const previous = readAnalyticsConsent();
  sessionConsent = accepted;
  if (accepted) revoking = false;
  let persisted = false;
  try {
    window.localStorage.setItem(CONSENT_KEY, String(accepted));
    persisted = true;
  } catch {
    // The current-page choice is retained in memory instead.
  }
  if (previous === true && !accepted) revokeAnalytics(persisted);
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function subscribeToAnalyticsConsent(onChange: () => void): () => void {
  let previous = readAnalyticsConsent();
  const sync = () => {
    const current = readAnalyticsConsent();
    if (current === true) revoking = false;
    if (previous === true && current !== true) revokeAnalytics();
    previous = current;
    onChange();
  };
  const syncStorage = (event: StorageEvent) => {
    if (event.storageArea !== window.localStorage) return;
    if (event.key === CONSENT_KEY || event.key === null) {
      sessionConsent = undefined;
      sync();
    }
  };
  window.addEventListener(CONSENT_EVENT, sync);
  window.addEventListener('storage', syncStorage);
  return () => {
    window.removeEventListener(CONSENT_EVENT, sync);
    window.removeEventListener('storage', syncStorage);
  };
}

export function openAnalyticsPreferences(): void {
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}
