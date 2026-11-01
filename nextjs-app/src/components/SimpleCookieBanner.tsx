'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  OPEN_PREFERENCES_EVENT,
  readAnalyticsConsent,
  saveAnalyticsConsent,
  subscribeToAnalyticsConsent,
} from '@/lib/analytics-consent';

export default function SimpleCookieBanner() {
  const [show, setShow] = useState(false);
  const declineButton = useRef<HTMLButtonElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setShow(readAnalyticsConsent() === null), 0);
    const open = () => {
      returnFocus.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      setShow(true);
      declineButton.current?.focus();
    };
    const unsubscribe = subscribeToAnalyticsConsent(() => setShow(readAnalyticsConsent() === null));
    window.addEventListener(OPEN_PREFERENCES_EVENT, open);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener(OPEN_PREFERENCES_EVENT, open);
      unsubscribe();
    };
  }, []);

  useLayoutEffect(() => {
    if (show && returnFocus.current) declineButton.current?.focus();
  }, [show]);

  const saveConsent = (accepted: boolean) => {
    saveAnalyticsConsent(accepted);
    setShow(false);
    returnFocus.current?.focus();
    returnFocus.current = null;
  };

  if (!show) return null;

  return (
    <aside className="cookie-banner cookie-banner--visible" aria-label="Analytics preferences">
      <div className="cookie-banner__copy">
        <strong>Analytics preferences</strong>
        <span>Allow Google Analytics and Vercel to measure visits, link clicks, and site performance. You can change your choice in the footer.</span>
      </div>
      <div className="cookie-banner__actions">
        <button ref={declineButton} type="button" className="cookie-button cookie-button--decline" onClick={() => saveConsent(false)}>
          Decline
        </button>
        <button type="button" className="cookie-button cookie-button--accept" onClick={() => saveConsent(true)}>
          Accept
        </button>
      </div>
    </aside>
  );
}
