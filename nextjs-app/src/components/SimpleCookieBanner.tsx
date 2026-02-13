'use client';

import { useState, useEffect } from 'react';

export default function SimpleCookieBanner() {
  const [show, setShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show banner if consent hasn't been given
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const showTimer = setTimeout(() => setShow(true), 0);
      // Smooth entrance animation
      const visibleTimer = setTimeout(() => setIsVisible(true), 100);
      return () => {
        clearTimeout(showTimer);
        clearTimeout(visibleTimer);
      };
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
    setTimeout(() => setShow(false), 300);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
    setTimeout(() => setShow(false), 300);
  };

  if (!show) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: `translateX(-50%) translateY(${isVisible ? '0' : '100px'})`,
        width: '64%',
        maxWidth: '800px',
        minWidth: '320px',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: '24px',
        padding: '20px 24px',
        zIndex: 9999,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1)',
        color: 'rgba(255, 255, 255, 0.95)',
        fontFamily: 'var(--font-geist-sans), system-ui, -apple-system, sans-serif',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        <div style={{ 
          flex: 1, 
          minWidth: '200px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{ 
            fontSize: '24px',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
          }}>
            🍪
          </div>
          <div>
            <div style={{ 
              fontWeight: '600', 
              fontSize: '15px',
              marginBottom: '4px',
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              This site uses cookies
            </div>
            <div style={{ 
              fontSize: '13px',
              color: 'rgba(30, 41, 59, 0.9)',
              lineHeight: '1.4',
              textShadow: '0 1px 2px rgba(255, 255, 255, 0.5)',
              fontWeight: '500'
            }}>
              Allow analytics to improve your experience.
            </div>
          </div>
        </div>
        
        <div style={{ 
          display: 'flex', 
          gap: '12px',
          alignItems: 'center'
        }}>
          <button
            onClick={handleDecline}
            style={{
              background: 'rgba(30, 41, 59, 0.34)',
              border: '1px solid rgba(255, 255, 255, 0.32)',
              color: 'rgba(255, 255, 255, 0.96)',
              padding: '8px 16px',
              borderRadius: '12px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '13px',
              transition: 'all 0.2s ease',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              boxShadow: '0 2px 8px rgba(15, 23, 42, 0.14)',
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLButtonElement;
              target.style.background = 'rgba(30, 41, 59, 0.42)';
              target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
              target.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLButtonElement;
              target.style.background = 'rgba(30, 41, 59, 0.34)';
              target.style.borderColor = 'rgba(255, 255, 255, 0.32)';
              target.style.transform = 'translateY(0)';
            }}
          >
            Decline
          </button>
          
          <button
            onClick={handleAccept}
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              border: 'none',
              color: 'white',
              padding: '8px 18px',
              borderRadius: '12px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '13px',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4)',
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget as HTMLButtonElement;
              target.style.transform = 'translateY(-1px)';
              target.style.boxShadow = '0 6px 16px rgba(59, 130, 246, 0.5)';
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget as HTMLButtonElement;
              target.style.transform = 'translateY(0)';
              target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.4)';
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
