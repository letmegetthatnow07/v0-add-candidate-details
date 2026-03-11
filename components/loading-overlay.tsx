"use client"

export function LoadingOverlay({ isVisible }: { isVisible: boolean }) {
  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      {/* Centered Pop-up */}
      <div className="rounded-lg bg-white p-8 shadow-lg">
        <div className="flex flex-col items-center gap-4">
          <svg
            className="h-16 w-16 animate-spin"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
          >
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
          <p className="text-xl font-medium text-[#8B4545]">Loading...</p>
        </div>
      </div>
    </div>
  )
}
