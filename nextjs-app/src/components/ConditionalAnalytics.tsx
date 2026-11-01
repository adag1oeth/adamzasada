'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { canCollectAnalytics, initializeAnalytics } from '@/lib/analytics';
import { getMeasurementId } from '@/lib/analytics-environment';
import { subscribeToAnalyticsConsent } from '@/lib/analytics-consent';

export default function ConditionalAnalytics() {
  const [hasConsent, setHasConsent] = useState(false);
  const measurementId = getMeasurementId();

  useEffect(() => {
    const syncConsent = () => {
      initializeAnalytics();
      setHasConsent(canCollectAnalytics());
    };
    syncConsent();
    return subscribeToAnalyticsConsent(syncConsent);
  }, []);

  if (!hasConsent) return null;

  return (
    <>
      {measurementId && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
          strategy="afterInteractive"
        />
      )}
      <Analytics beforeSend={(event) => canCollectAnalytics() ? event : null} />
      <SpeedInsights beforeSend={(event) => canCollectAnalytics() ? event : null} />
    </>
  );
}
