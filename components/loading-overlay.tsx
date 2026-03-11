"use client"

export function LoadingOverlay({ isVisible }: { isVisible: boolean }) {
  if (!isVisible) return null
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)'
    }}>
      <div style={{
        width: '380px', height: '260px',
        backgroundColor: 'white', borderRadius: '12px',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: '16px'
      }}>
        <style>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
        <svg
          style={{ width: '60px', height: '60px', animation: 'spin 1s linear infinite' }}
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="20" fill="none"
            stroke="#8B4545" strokeWidth="3"
            strokeDasharray="8 4" strokeLinecap="round" opacity="0.9" />
        </svg>
        <p style={{ fontSize: '18px', fontWeight: '500', color: '#8B4545', margin: 0 }}>
          Loading...
        </p>
      </div>
    </div>
  )
}
