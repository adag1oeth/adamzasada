# Google Analytics 4 Implementation

This project uses Google Analytics 4 (GA4) with Next.js 15 and the `@next/third-parties` package for optimal performance and compliance.

## 🚀 Features

- ✅ **Production-only loading** - GA4 only loads in production environment
- ✅ **TypeScript support** - Full type safety for all analytics functions
- ✅ **Custom event tracking** - Pre-built functions for common interactions
- ✅ **Performance optimized** - Uses Next.js third-parties for lazy loading
- ✅ **GDPR considerations** - Built with privacy in mind

## 📁 Project Structure

```
src/
├── lib/
│   └── analytics.ts          # Analytics utility functions
├── types/
│   └── analytics.ts          # TypeScript types for GA4
└── app/
    └── layout.tsx            # GoogleAnalytics component integration
```

## 🔧 Environment Variables

Make sure to set your GA4 Measurement ID in `.env.local`:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-Z63BS83V08
NODE_ENV=production  # GA4 only loads in production
```

## 📊 Usage Examples

### Basic Event Tracking

```typescript
import { trackCustomEvent, trackButtonClick, trackContactClick } from '@/lib/analytics';

// Track custom events
trackCustomEvent({
  event_name: 'newsletter_signup',
  parameters: {
    newsletter_type: 'weekly',
    user_segment: 'visitor'
  }
});

// Track button clicks
trackButtonClick({
  button_name: 'get_started',
  button_location: 'hero_section',
  page_section: 'main'
});

// Track contact method clicks
trackContactClick({
  contact_method: 'telegram',
  contact_location: 'footer'
});
```

### React Component Integration

```typescript
'use client';

import { trackContactClick, trackOutboundClick } from '@/lib/analytics';

export default function ContactButton() {
  const handleContactClick = () => {
    trackContactClick({
      contact_method: 'telegram',
      contact_location: 'cta_section'
    });
  };

  return (
    <button 
      onClick={handleContactClick}
      className="contact-btn"
    >
      Contact via Telegram
    </button>
  );
}
```

### Form Submission Tracking

```typescript
import { trackFormSubmission } from '@/lib/analytics';

const handleSubmit = async (formData: FormData) => {
  try {
    await submitForm(formData);
    trackFormSubmission('contact_form', true);
  } catch (error) {
    trackFormSubmission('contact_form', false);
  }
};
```

### Scroll Depth Tracking

```typescript
import { trackScrollDepth } from '@/lib/analytics';

useEffect(() => {
  const handleScroll = () => {
    const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    
    // Track at 25%, 50%, 75%, 100%
    if (scrolled >= 25 && !tracked25) {
      trackScrollDepth(25);
      setTracked25(true);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

## 🛡️ GDPR & Privacy Considerations

### Current Implementation
- **Consent-free setup**: Basic pageviews and interactions are tracked
- **Production-only**: No tracking in development environment
- **Anonymized data**: GA4 automatically anonymizes IP addresses
- **No PII collection**: We don't track personally identifiable information

### GDPR Compliance Steps (Optional)

If you need explicit consent (recommended for EU users):

1. **Install a consent management solution**:
```bash
npm install @cookiehub/nextjs
# or
npm install react-cookie-consent
```

2. **Conditional GA4 loading**:
```typescript
// In layout.tsx
{hasConsent && process.env.NODE_ENV === 'production' && (
  <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
)}
```

3. **Update analytics utils**:
```typescript
export const isGAEnabled = (): boolean => {
  return (
    typeof window !== 'undefined' &&
    typeof window.gtag === 'function' &&
    process.env.NODE_ENV === 'production' &&
    hasUserConsent() && // Add your consent check
    !!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  );
};
```

### Data Retention Settings
- Configure data retention in GA4 dashboard (Settings > Data Settings > Data Retention)
- Recommended: 14 months for business purposes
- EU compliance: Consider 2-14 months

## 📈 Available Events

The implementation includes these pre-built event types:

| Event Name | Parameters | Use Case |
|------------|------------|----------|
| `contact_click` | contact_method, contact_location | Social media & contact button clicks |
| `button_click` | button_name, button_location, page_section | General button interactions |
| `scroll_depth` | scroll_depth | User engagement measurement |
| `file_download` | file_name, file_type | Document downloads |
| `outbound_click` | outbound_url, link_text | External link clicks |
| `form_submission` | form_name, success | Form completion tracking |
| `user_engagement` | engagement_time_msec | Time spent on page |

## 🔍 Debugging

### Check if GA4 is loaded:
```typescript
// In browser console
console.log('GA4 Status:', {
  gtagExists: typeof window.gtag === 'function',
  environment: process.env.NODE_ENV,
  measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
});
```

### Test events in development:
```typescript
// Temporarily override for testing
const trackTestEvent = () => {
  if (typeof window !== 'undefined') {
    console.log('Would track in production:', {
      event_name: 'test_event',
      parameters: { test: true }
    });
  }
};
```

## 🚀 Deployment Checklist

- [ ] Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in production environment
- [ ] Verify GA4 property is set up correctly
- [ ] Test events in GA4 DebugView
- [ ] Configure data retention settings
- [ ] Set up conversion goals if needed
- [ ] Consider implementing consent management for EU users

## 📚 Additional Resources

- [GA4 Best Practices](https://developers.google.com/analytics/devguides/collection/ga4)
- [Next.js Third Parties](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries)
- [GDPR Compliance Guide](https://support.google.com/analytics/answer/9019185)