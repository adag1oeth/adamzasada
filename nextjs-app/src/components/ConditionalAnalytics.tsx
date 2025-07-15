'use client';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function ConditionalAnalytics() {
  // GA4 is now loaded directly in layout.tsx for Google verification
  // This component only handles Vercel Analytics

  // Always render Vercel Analytics and Speed Insights (they handle consent internally)
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}