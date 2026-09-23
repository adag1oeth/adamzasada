import { ImageResponse } from 'next/og';

export const alt = 'Adam Zasada - Product Leader, Founder and Adam Rules';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          background: '#f4f1ea',
          color: '#111318',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            opacity: 0.18,
            backgroundImage:
              'linear-gradient(rgba(17,19,24,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(17,19,24,.18) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div
          style={{
            width: '67%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '64px 70px',
          }}
        >
          <div style={{ display: 'flex', color: '#ea4b2c', fontSize: 18, fontWeight: 700, letterSpacing: 4 }}>
            PRODUCT LEADER &amp; FOUNDER
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', fontSize: 96, fontWeight: 750, letterSpacing: -7, lineHeight: 0.88 }}>Adam</div>
            <div style={{ display: 'flex', fontSize: 96, fontWeight: 750, letterSpacing: -7, lineHeight: 0.88 }}>Zasada</div>
          </div>
          <div style={{ display: 'flex', fontSize: 23, fontWeight: 600 }}>
            Payments · Fintech · Web3 · AI
          </div>
        </div>
        <div
          style={{
            width: '33%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '62px 48px',
            background: '#18100f',
            color: '#f7f1e9',
          }}
        >
          <div style={{ display: 'flex', color: '#ff8168', fontSize: 16, fontWeight: 700, letterSpacing: 3 }}>THE OTHER HALF</div>
          <div style={{ display: 'flex', marginTop: 16, fontSize: 58, fontWeight: 700, letterSpacing: -4, lineHeight: 0.92 }}>Adam<br />Rules</div>
          <div style={{ display: 'flex', marginTop: 24, color: 'rgba(255,255,255,.68)', fontSize: 18 }}>Indie dance &amp; house</div>
        </div>
      </div>
    ),
    size,
  );
}
