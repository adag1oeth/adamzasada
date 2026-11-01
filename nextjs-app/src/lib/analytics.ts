import type { AnalyticsEvents, GAContactEvent } from '@/types/analytics';
import { readAnalyticsConsent } from './analytics-consent';
import { getMeasurementId, isAnalyticsEnvironment } from './analytics-environment';

export function canCollectAnalytics(): boolean {
  return isAnalyticsEnvironment() && readAnalyticsConsent() === true;
}

export function initializeAnalytics(): void {
  const measurementId = getMeasurementId();
  if (!canCollectAnalytics() || !measurementId || window.siteAnalyticsInitialized) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    // Google expects the arguments object for each queued command.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };
  window[`ga-disable-${measurementId}`] = false;
  window.siteAnalyticsInitialized = true;
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  window.gtag('consent', 'update', { analytics_storage: 'granted' });
  window.gtag('js', new Date());
  // A single config sends the initial page_view. Anchor navigation is not a new page.
  window.gtag('config', measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
}

function sendEvent<Name extends keyof AnalyticsEvents>(name: Name, parameters: AnalyticsEvents[Name]): void {
  const measurementId = getMeasurementId();
  if (!canCollectAnalytics() || !measurementId) return;
  initializeAnalytics();
  window.gtag?.('event', name, { ...parameters, send_to: measurementId });
}

export function trackContactClick(event: GAContactEvent): void {
  sendEvent('contact_click', event);
}

export function trackOutboundClick(
  url: string,
  linkText: string,
  location: AnalyticsEvents['outbound_click']['link_location'] = 'music',
  company?: string,
): void {
  // Send only public destinations, without query strings or fragments.
  let destination: URL;
  try {
    destination = new URL(url);
  } catch {
    return;
  }
  if (!['https:', 'http:'].includes(destination.protocol)) return;
  sendEvent('outbound_click', {
    outbound_url: `${destination.origin}${destination.pathname}`,
    link_text: linkText,
    link_location: location,
    ...(company ? { company } : {}),
  });
}
