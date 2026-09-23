# Analytics and Consent

The site uses consent-gated analytics. No analytics component is rendered until the visitor selects **Accept** in the analytics preferences banner.

## Services

- Google Analytics 4, enabled when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is configured
- Vercel Analytics
- Vercel Speed Insights

All three are mounted by `src/components/ConditionalAnalytics.tsx` only when `localStorage.cookieConsent` equals `true`.

## Consent flow

1. `SimpleCookieBanner` appears when no preference has been saved.
2. **Accept** stores `cookieConsent=true` and dispatches `consentUpdated`.
3. **Decline** stores `cookieConsent=false`; analytics remains unloaded.
4. `ConditionalAnalytics` listens for `consentUpdated` and synchronizes its state.

## Environment

Create `.env.local` for local GA testing:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Without this variable, Google Analytics is omitted. Vercel Analytics and Speed Insights still follow the same consent gate.

## Event tracking

Helpers live in `src/lib/analytics.ts`. They no-op until GA is available, so contact tracking calls are safe before consent.

## Local verification

1. Clear `cookieConsent` in browser storage.
2. Reload and confirm no request to `googletagmanager.com` is made.
3. Select **Decline** and confirm analytics remains absent.
4. Clear the preference, reload, and select **Accept**.
5. Confirm GA loads when the measurement ID is configured.
