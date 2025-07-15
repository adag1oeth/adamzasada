'use client';

import { useState } from 'react';

export default function SimpleCookieBanner() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#1e293b',
        color: 'white',
        padding: '20px',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.3)',
        fontSize: '14px',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      <div style={{ flex: 1, marginRight: '20px' }}>
        <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>
          🍪 We use cookies and analytics
        </div>
        <div style={{ opacity: 0.9 }}>
          This site uses Google Analytics and Vercel Analytics to improve user experience.
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '12px' }}>
        <button
          onClick={() => {
            localStorage.setItem('cookieConsent', 'true');
            setShow(false);
          }}
          style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '14px'
          }}
        >
          Accept All
        </button>
        
        <button
          onClick={() => {
            localStorage.setItem('cookieConsent', 'false');
            setShow(false);
          }}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '12px 24px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '500',
            fontSize: '14px'
          }}
        >
          Decline
        </button>
      </div>
    </div>
  );
}