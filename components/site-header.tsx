"use client"

import { User, Building2 } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="bg-card border-b border-border">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
            <svg viewBox="0 0 100 100" className="h-10 w-10" aria-hidden="true">
              <circle cx="50" cy="50" r="48" fill="#8B3A3A" />
              <circle cx="50" cy="50" r="42" fill="none" stroke="#d4a574" strokeWidth="2" />
              <circle cx="50" cy="35" r="12" fill="#d4a574" />
              <path d="M30 55 L50 75 L70 55" fill="none" stroke="#d4a574" strokeWidth="3" />
              <rect x="46" y="75" width="8" height="10" fill="#d4a574" />
              <rect x="35" y="85" width="30" height="4" rx="2" fill="#d4a574" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Government of India</p>
            <p className="text-sm font-semibold text-foreground leading-tight">Staff Selection Commission</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
            aria-label="User profile"
          >
            <User className="h-5 w-5" />
          </button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground"
            aria-label="Organization"
          >
            <Building2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
