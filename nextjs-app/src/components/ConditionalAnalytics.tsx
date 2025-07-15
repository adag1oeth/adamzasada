'use client';

import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function ConditionalAnalytics() {
  const [hasConsent, setHasConsent] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check for consent on mount
    const checkConsent = () => {
      const consent = localStorage.getItem('cookieConsent');
      setHasConsent(consent === 'true');
    };
    
    checkConsent();
    setIsLoaded(true);
    
    // Listen for storage changes (consent updates)
    const handleStorageChange = () => {
      checkConsent();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Custom event for same-tab updates
    window.addEventListener('consentUpdated', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('consentUpdated', handleStorageChange);
    };
  }, []);

  useEffect(() => {
    // Load GA4 if consent is given and not already loaded
    if (hasConsent && !window.gtag && isLoaded) {
      console.log('Loading GA4 with consent...');
      
      // Load gtag.js
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=G-Z63BS83V08`;
      document.head.appendChild(script1);

      // Initialize GA4
      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-Z63BS83V08', {
          anonymize_ip: true,
          cookie_flags: 'SameSite=Strict;Secure'
        });
      `;
      document.head.appendChild(script2);
    }
  }, [hasConsent, isLoaded]);

  // Always render Vercel Analytics and Speed Insights (they handle consent internally)
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}