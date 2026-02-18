"use client"

import Image from "next/image"
import { User, Building2 } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="bg-card border-b border-border">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Image
            src="/images/ssc-logo.jpg"
            alt="Staff Selection Commission Logo"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />
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
