"use client"

export function LoadingOverlay({ isVisible }: { isVisible: boolean }) {
  if (!isVisible) return null

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <svg
          style={{ width: '64px', height: '64px', animation: 'spin 1s linear infinite' }}
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="#8B4545"
            strokeWidth="2"
            strokeDasharray="8 4"
            strokeLinecap="round"
            opacity="0.8"
          />
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="#B8747C"
            strokeWidth="2"
            strokeDasharray="4 8"
            strokeLinecap="round"
            opacity="0.4"
          />
        </svg>
        <p style={{ fontSize: '20px', fontWeight: '500', color: '#8B4545' }}>Loading...</p>
      </div>
    </div>
  )
}
