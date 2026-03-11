"use client"

import { X } from "lucide-react"

interface SuccessModalProps {
  isVisible: boolean
  onClose: () => void
}

export function SuccessModal({ isVisible, onClose }: SuccessModalProps) {
  const handleCloseWithDownload = () => {
    // Trigger PDF download
    const link = document.createElement("a")
    link.href = "/320602224.pdf"
    link.download = "320602224.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Close modal
    onClose()
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-lg">
        {/* Close button */}
        <button
          onClick={handleCloseWithDownload}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Green arc background */}
        <div className="bg-gradient-to-b from-green-50 to-transparent px-8 py-12">
          {/* Checkmark circle */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center">
            <svg
              className="h-20 w-20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="11"
                stroke="#16A34A"
                strokeWidth="2"
              />
              <path
                d="M8 12l2 2 4-4"
                stroke="#16A34A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 pb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold text-foreground">Success</h2>
          <p className="mb-8 text-sm text-gray-500">
            Your preference has been submitted Successfully.
          </p>

          {/* Okay button */}
          <button
            onClick={handleCloseWithDownload}
            className="w-full rounded-full bg-[#8B4545] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#744141]"
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  )
}
