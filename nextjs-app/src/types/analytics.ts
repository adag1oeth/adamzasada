// Google Analytics 4 Types
export interface GAEvent {
  action: string;
  category?: string;
  label?: string;
  value?: number;
}

export interface GAPageView {
  page_title?: string;
  page_location?: string;
  page_path?: string;
}

export interface GACustomEvent {
  event_name: string;
  parameters?: {
    [key: string]: string | number | boolean;
  };
}

// Common custom events
export interface GAButtonClickEvent {
  button_name: string;
  button_location?: string;
  page_section?: string;
}

export interface GAContactEvent {
  contact_method: 'telegram' | 'twitter' | 'linkedin' | 'github' | 'medium' | 'soundcloud';
  contact_location?: string;
}

export interface GAPageEngagementEvent {
  engagement_time_msec?: number;
  page_title?: string;
}

// GA4 Global Interface
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'consent',
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}