'use client';

import { useState, useEffect } from 'react';
import CookieConsent from 'react-cookie-consent';

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Only show banner if consent hasn't been given
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
    // Dispatch custom event to update analytics
    window.dispatchEvent(new CustomEvent('consentUpdated'));
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setShowBanner(false);
    // Dispatch custom event to update analytics
    window.dispatchEvent(new CustomEvent('consentUpdated'));
  };

  if (!showBanner) return null;

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All"
      declineButtonText="Decline"
      enableDeclineButton
      onAccept={handleAccept}
      onDecline={handleDecline}
      style={{
        background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
        fontSize: "14px",
        fontFamily: "var(--font-geist-sans)",
        padding: "20px",
        boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.15)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
      buttonStyle={{
        background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
        color: "white",
        fontSize: "14px",
        fontWeight: "600",
        padding: "12px 24px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        marginRight: "12px",
        boxShadow: "0 2px 8px rgba(59, 130, 246, 0.3)",
      }}
      declineButtonStyle={{
        background: "rgba(255, 255, 255, 0.1)",
        color: "white",
        fontSize: "14px",
        fontWeight: "500",
        padding: "12px 24px",
        borderRadius: "8px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        cursor: "pointer",
        backdropFilter: "blur(10px)",
      }}
      contentStyle={{
        flex: "1",
        margin: "0 20px 0 0",
        color: "white",
        lineHeight: "1.6",
      }}
    >
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 text-2xl">🍪</div>
        <div>
          <div className="font-semibold mb-1">We use cookies and analytics</div>
          <div className="text-sm opacity-90">
            This site uses Google Analytics and Vercel Analytics to improve user experience. 
            We collect anonymous usage data to understand how visitors interact with our site.{' '}
            <a 
              href="#privacy" 
              className="text-blue-300 hover:text-blue-200 underline"
              onClick={(e) => {
                e.preventDefault();
                alert('Privacy Policy: We use Google Analytics and Vercel Analytics to collect anonymous usage data. Data is processed securely and never shared with third parties. You can revoke consent anytime by clearing your browser data.');
              }}
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </CookieConsent>
  );
}