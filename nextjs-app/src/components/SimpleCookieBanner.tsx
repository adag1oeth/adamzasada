'use client';

import { useEffect, useState } from 'react';

export default function SimpleCookieBanner() {
  const [show, setShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('cookieConsent')) return;

    const showTimer = window.setTimeout(() => setShow(true), 0);
    const visibleTimer = window.setTimeout(() => setIsVisible(true), 80);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(visibleTimer);
    };
  }, []);

  const saveConsent = (accepted: boolean) => {
    localStorage.setItem('cookieConsent', String(accepted));
    window.dispatchEvent(new CustomEvent('consentUpdated'));
    setIsVisible(false);
    window.setTimeout(() => setShow(false), 220);
  };

  if (!show) return null;

  return (
    <aside
      className={`cookie-banner ${isVisible ? 'cookie-banner--visible' : ''}`}
      aria-label="Analytics preferences"
    >
      <div className="cookie-banner__copy">
        <strong>Analytics preferences</strong>
        <span>Allow anonymous analytics to help improve this site.</span>
      </div>
      <div className="cookie-banner__actions">
        <button className="cookie-button cookie-button--decline" onClick={() => saveConsent(false)}>
          Decline
        </button>
        <button className="cookie-button cookie-button--accept" onClick={() => saveConsent(true)}>
          Accept
        </button>
      </div>
    </aside>
  );
}
