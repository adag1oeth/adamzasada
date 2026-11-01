export interface GAContactEvent {
  contact_method: 'email' | 'twitter' | 'linkedin';
  contact_location: 'cta_section' | 'footer';
}

export interface AnalyticsEvents {
  contact_click: GAContactEvent;
  outbound_click: {
    outbound_url: string;
    link_text: string;
    link_location: 'music' | 'experience' | 'footer';
    company?: string;
  };
}

type Gtag = {
  (command: 'js', date: Date): void;
  (command: 'config', id: string, parameters: Record<string, unknown>): void;
  (command: 'event', name: keyof AnalyticsEvents, parameters: Record<string, unknown>): void;
  (command: 'consent', action: 'default' | 'update', parameters: Record<string, string>): void;
};

declare global {
  interface Window {
    gtag?: Gtag;
    dataLayer?: IArguments[];
    siteAnalyticsInitialized?: boolean;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}
