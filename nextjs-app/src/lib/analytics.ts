import { 
  GAEvent, 
  GAPageView, 
  GACustomEvent, 
  GAButtonClickEvent, 
  GAContactEvent 
} from '@/types/analytics';

// Check if GA is loaded and we're in production
export const isGAEnabled = (): boolean => {
  return (
    typeof window !== 'undefined' &&
    !!window.gtag &&
    typeof window.gtag === 'function' &&
    process.env.NODE_ENV === 'production' &&
    !!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  );
};

// Basic event tracking
export const trackEvent = (event: GAEvent): void => {
  if (!isGAEnabled() || !window.gtag) return;

  window.gtag('event', event.action, {
    event_category: event.category,
    event_label: event.label,
    value: event.value,
  });
};

// Custom event tracking with parameters
export const trackCustomEvent = (event: GACustomEvent): void => {
  if (!isGAEnabled() || !window.gtag) return;

  window.gtag('event', event.event_name, event.parameters || {});
};

// Page view tracking (automatically handled by Next.js, but useful for SPAs)
export const trackPageView = (pageView: GAPageView): void => {
  if (!isGAEnabled() || !window.gtag) return;

  window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
    page_title: pageView.page_title,
    page_location: pageView.page_location,
    page_path: pageView.page_path,
  });
};

// Specific event tracking functions for common actions

// Track button clicks
export const trackButtonClick = (event: GAButtonClickEvent): void => {
  trackCustomEvent({
    event_name: 'button_click',
    parameters: {
      button_name: event.button_name,
      button_location: event.button_location || 'unknown',
      page_section: event.page_section || 'main',
    },
  });
};

// Track contact method clicks
export const trackContactClick = (event: GAContactEvent): void => {
  trackCustomEvent({
    event_name: 'contact_click',
    parameters: {
      contact_method: event.contact_method,
      contact_location: event.contact_location || 'footer',
    },
  });
};

// Track scroll depth
export const trackScrollDepth = (depth: number): void => {
  trackCustomEvent({
    event_name: 'scroll_depth',
    parameters: {
      scroll_depth: Math.round(depth),
    },
  });
};

// Track file downloads
export const trackFileDownload = (fileName: string, fileType: string): void => {
  trackCustomEvent({
    event_name: 'file_download',
    parameters: {
      file_name: fileName,
      file_type: fileType,
    },
  });
};

// Track outbound link clicks
export const trackOutboundClick = (url: string, linkText?: string): void => {
  trackCustomEvent({
    event_name: 'outbound_click',
    parameters: {
      outbound_url: url,
      link_text: linkText || 'unknown',
    },
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean): void => {
  trackCustomEvent({
    event_name: 'form_submission',
    parameters: {
      form_name: formName,
      success: success,
    },
  });
};

// Track engagement time
export const trackEngagementTime = (timeInSeconds: number): void => {
  trackCustomEvent({
    event_name: 'user_engagement',
    parameters: {
      engagement_time_msec: timeInSeconds * 1000,
    },
  });
};