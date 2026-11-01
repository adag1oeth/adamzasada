# Analytics and Consent

## Collection rules

Google Analytics 4, Vercel Analytics, and Vercel Speed Insights run only when:

- `NODE_ENV` is `production`.
- The hostname is `adamzasada.com` or `www.adamzasada.com`.
- `NEXT_PUBLIC_VERCEL_ENV`, if present, is `production`.
- The visitor explicitly accepted analytics.

GA also requires a valid `NEXT_PUBLIC_GA_MEASUREMENT_ID` (`G-...`). Without it, Google is omitted; Vercel services retain their own consent and environment gates. Localhost, development, and preview deployments never load collectors. Next.js embeds public environment variables at build time, so changes require a rebuild.

## Consent flow

`src/lib/analytics-consent.ts` owns consent storage and notifications. Existing `cookieConsent=true/false` preferences remain valid.

- The banner appears when there is no valid choice. No vendor scripts load before acceptance or following refusal.
- **Analytics preferences** in the footer reopens the banner and moves keyboard focus to its actions. Saving restores focus to the preferences button.
- Every custom event and both Vercel `beforeSend` callbacks recheck consent.
- Withdrawing consent disables GA, updates its consent state, discards queued commands, removes GA cookies accessible on the site's root path, and reloads the page to unload all vendor collectors.
- Another tab's consent changes are synchronized through the browser `storage` event. Clearing saved preferences also stops collection in other open tabs.
- If storage is unavailable, the current-page choice remains in memory. If a refusal cannot be persisted, the page does not reload into an older saved acceptance; GA is disabled and Vercel callbacks drop subsequent events. The choice may need to be made again on a later visit.

Google is configured with denied advertising consent and analytics storage granted only following acceptance. Google Signals and advertising personalization signals are disabled. This is a basic consent-gated setup: the Google library itself is not loaded before acceptance. Revocation may produce a consent update from an already loaded Google tag; events already transmitted cannot be recalled.

## Events

`src/lib/analytics.ts` provides typed events; unused generic/form/download/manual engagement helpers were removed. Existing event names remain unchanged.

| Event | Parameters | Interactions |
|---|---|---|
| `contact_click` | `contact_method`, `contact_location` | Email and X in the contact section; LinkedIn and X in the footer |
| `outbound_click` | `outbound_url`, `link_text`, `link_location`, optional `company` | Five music links, experience cards, GitHub and Instagram in the footer |

`contact_method` is `email`, `linkedin`, or `twitter` (retained for historical continuity). `contact_location` is `cta_section` or `footer`. `link_location` is `music`, `experience`, or `footer`.

Outbound URLs omit credentials, query strings, and fragments. Contact events send a method, not the email URL. Events arising before acceptance are not queued or replayed. After acceptance, the Google command queue can retain events while the library loads. A blocked library does not break navigation.

One guarded Google config command generates the initial `page_view`; no extra pageview handlers are attached to anchor navigation. If routes are added, revisit navigation tracking together with the GA stream's history measurement settings.

## GA4 account settings (manual)

These settings cannot be inferred from the repository and have not been changed:

1. Verify the production web stream and measurement ID.
2. Review Enhanced Measurement. Native outbound `click` can coexist with custom `outbound_click`, but these must not be summed as separate user actions. Disable native outbound collection if the custom event should be the sole click inventory. This site has no custom scroll or engagement emitter.
3. Register event-scoped custom dimensions for `contact_method`, `contact_location`, `link_location`, and `company` as needed for reporting; keep `outbound_url` and `link_text` available for detailed exploration if useful. Do not register unique identifiers or arbitrary query strings.
4. Consider `contact_click` a key event for contact intent, not a completed conversation. Music link clicks indicate a visit, not a verified play.
5. Verify internal/developer traffic filters in testing mode before activation, reporting timezone, and retention settings.
6. Validate real collection in Tag Assistant / DebugView after deployment. Do not inject production events while running local automated tests.

Google references: [Consent Mode](https://developers.google.com/tag-platform/security/guides/consent), [pageviews](https://developers.google.com/analytics/devguides/collection/ga4/views), [Enhanced Measurement](https://support.google.com/analytics/answer/9216061), [custom dimensions](https://support.google.com/analytics/answer/14240153).

## Verification

Run `npm run test:analytics`, `npm run lint`, and `npm run build`.

In a production-origin browser test, intercept vendor requests so testing does not pollute GA. Verify: no scripts before consent or after refusal; one initialization after acceptance and on return visits; one custom event per click; no events after withdrawal; removal of GA cookies; synchronization with another tab; safe behavior with blocked storage; keyboard focus when reopening preferences; and readable mobile/desktop layouts.

These checks validate the site's commands and script gates. Actual Google ingestion and account configuration still require Tag Assistant / DebugView access.
