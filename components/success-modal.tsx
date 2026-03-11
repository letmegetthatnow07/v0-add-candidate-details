"use client"

import { X } from "lucide-react"

interface SuccessModalProps {
  isVisible: boolean
  onClose: () => void
}

export function SuccessModal({ isVisible, onClose }: SuccessModalProps) {
  if (!isVisible) return null

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div style={{ width: '400px', height: '300px', backgroundColor: 'white', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '32px' }}>
        {/* Close button */}
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '16px', right: '16px', width: '32px', height: '32px', borderRadius: '50%', border: '1px solid #d1d5db', backgroundColor: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4b5563' }}
          aria-label="Close"
        >
          <X style={{ width: '20px', height: '20px' }} />
        </button>

        {/* Green filled circle with checkmark */}
        <svg
          style={{ width: '80px', height: '80px', marginBottom: '16px' }}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="11"
            fill="#16A34A"
            stroke="#16A34A"
            strokeWidth="2"
          />
          <path
            d="M8 12l2 2 4-4"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Success heading */}
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>Success</h2>

        {/* Subtext */}
        <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px', textAlign: 'center' }}>
          Your preference has been submitted Successfully.
        </p>

        {/* Okay button */}
        <button
          onClick={onClose}
          style={{ width: '100%', maxWidth: '200px', backgroundColor: '#8B4545', color: 'white', borderRadius: '9999px', padding: '10px 24px', fontSize: '14px', fontWeight: '500', border: 'none', cursor: 'pointer' }}
        >
          Okay
        </button>
      </div>
    </div>
  )
}
