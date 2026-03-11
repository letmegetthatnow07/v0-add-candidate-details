"use client"

interface SuccessModalProps {
  isVisible: boolean
  onClose: () => void
}

export function SuccessModal({ isVisible, onClose }: SuccessModalProps) {
  if (!isVisible) return null
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 10000,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)'
    }}>
      <div style={{
        width: '380px', height: '260px',
        backgroundColor: 'white', borderRadius: '12px',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: '12px', position: 'relative', padding: '24px'
      }}>
        {/* X close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '12px', right: '12px',
            background: 'none', border: '1px solid #ccc',
            borderRadius: '50%', width: '28px', height: '28px',
            cursor: 'pointer', fontSize: '14px', color: '#666',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}
        >✕</button>

        {/* Green checkmark circle */}
        <div style={{
          width: '60px', height: '60px', borderRadius: '50%',
          border: '3px solid #22c55e',
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
            stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        {/* Success text */}
        <p style={{ fontSize: '22px', fontWeight: '700', color: '#111', margin: 0 }}>
          Success
        </p>
        <p style={{ fontSize: '13px', color: '#666', margin: 0, textAlign: 'center' }}>
          Your preference has been submitted Successfully.
        </p>

        {/* Okay button */}
        <button
          onClick={onClose}
          style={{
            backgroundColor: '#8B4545', color: 'white',
            border: 'none', borderRadius: '999px',
            padding: '10px 48px', fontSize: '14px',
            fontWeight: '500', cursor: 'pointer', marginTop: '4px'
          }}
        >
          Okay
        </button>
      </div>
    </div>
  )
}
