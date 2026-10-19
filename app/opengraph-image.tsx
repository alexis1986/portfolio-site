import { ImageResponse } from 'next/og';

export const alt = 'Alexis Castellano · Arquitecto de Soluciones';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#f8fafc',
          backgroundImage:
            'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          borderLeft: '16px solid #4338ca',
          color: '#0f172a',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 34, fontWeight: 600, color: '#4338ca' }}>
          Alexis Castellano
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 28, fontSize: 88, fontWeight: 700, lineHeight: 1.05 }}>
          <div style={{ display: 'flex' }}>Tu negocio creció.</div>
          <div style={{ display: 'flex', color: '#4338ca' }}>Tu plataforma no.</div>
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 44,
            fontSize: 32,
            color: '#334155',
            borderTop: '2px dashed #0ea5e9',
            paddingTop: 24,
          }}
        >
          Arquitecto de Soluciones · IA-first
        </div>
      </div>
    ),
    size,
  );
}
