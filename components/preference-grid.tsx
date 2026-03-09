"use client"

import { useRef, useCallback } from "react"
import { posts } from "@/lib/posts-data"

interface PreferenceGridProps {
  preferences: (string | null)[]
  setPreferences: (prefs: (string | null)[]) => void
  totalPosts: number
}

export function PreferenceGrid({
  preferences,
  setPreferences,
  totalPosts,
}: PreferenceGridProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const validPostCodes = new Set(posts.map(p => p.postCode.toUpperCase()))

  const handleChange = useCallback(
    (index: number, value: string) => {
      const newPrefs = [...preferences]

      if (value === "") {
        newPrefs[index] = null
        setPreferences(newPrefs)
        return
      }

      const upperValue = value.toUpperCase()
      
      // Allow user to type any alphanumeric input (for partial input like "B" or "B0")
      // Only validate complete post codes (3 characters)
      if (upperValue.length === 3) {
        if (!validPostCodes.has(upperValue)) return
        
        // Check for duplicate only for complete codes
        const existingIndex = newPrefs.findIndex(
          (p, i) => p?.toUpperCase() === upperValue && i !== index
        )
        if (existingIndex !== -1) return
      }

      newPrefs[index] = upperValue
      setPreferences(newPrefs)

      // Auto-focus next empty box when a valid complete code is entered
      if (upperValue.length === 3 && validPostCodes.has(upperValue) && index < totalPosts - 1) {
        const nextEmpty = newPrefs.findIndex(
          (p, i) => i > index && p === null
        )
        if (nextEmpty !== -1 && inputRefs.current[nextEmpty]) {
          inputRefs.current[nextEmpty]?.focus()
        }
      }
    },
    [preferences, setPreferences, totalPosts, validPostCodes]
  )

  const handleKeyDown = useCallback(
    (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace" && preferences[index] === null && index > 0) {
        const prevIndex = index - 1
        const newPrefs = [...preferences]
        newPrefs[prevIndex] = null
        setPreferences(newPrefs)
        inputRefs.current[prevIndex]?.focus()
      }
      if (e.key === "ArrowRight" && index < totalPosts - 1) {
        inputRefs.current[index + 1]?.focus()
      }
      if (e.key === "ArrowLeft" && index > 0) {
        inputRefs.current[index - 1]?.focus()
      }
    },
    [preferences, setPreferences, totalPosts]
  )

  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-foreground">
        {"Candidates should indicate their option(s), in order of preference, in the Boxes given below:"}
      </p>
      <div className="grid grid-cols-10 gap-3">
        {Array.from({ length: totalPosts }).map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="mb-0.5 text-xs font-medium text-muted-foreground">
              {index + 1}
            </span>
            <input
              ref={(el) => {
                inputRefs.current[index] = el
              }}
              type="text"
              maxLength={3}
              value={preferences[index] !== null ? String(preferences[index]) : ""}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="h-11 w-14 rounded border border-border bg-card text-center text-sm font-medium text-foreground outline-none focus:border-primary focus:ring-1 focus:ring-ring uppercase"
              aria-label={`Preference position ${index + 1}`}
              placeholder=""
            />
          </div>
        ))}
      </div>
    </div>
  )
}
