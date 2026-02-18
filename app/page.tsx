"use client"

import { useState, useCallback, useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CandidateInfo } from "@/components/candidate-info"
import { PostTable } from "@/components/post-table"
import { PreferenceGrid } from "@/components/preference-grid"
import { Declaration } from "@/components/declaration"
import { posts } from "@/lib/posts-data"

const STORAGE_KEY = "ssc-cgl-preferences"
const TOTAL_POSTS = 69

interface SavedData {
  candidateName: string
  registrationNumber: string
  rollNumber: string
  preferences: (number | null)[]
}

export default function Home() {
  const [candidateName, setCandidateName] = useState("")
  const [registrationNumber, setRegistrationNumber] = useState("")
  const [rollNumber, setRollNumber] = useState("")
  const [preferences, setPreferences] = useState<(number | null)[]>(
    Array(TOTAL_POSTS).fill(null)
  )
  const [agreed, setAgreed] = useState(false)
  const [hasSaved, setHasSaved] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const data: SavedData = JSON.parse(stored)
        setCandidateName(data.candidateName || "")
        setRegistrationNumber(data.registrationNumber || "")
        setRollNumber(data.rollNumber || "")
        if (data.preferences && data.preferences.length === TOTAL_POSTS) {
          setPreferences(data.preferences)
        }
        setHasSaved(true)
      }
    } catch {
      // Ignore parse errors
    }
  }, [])

  const handleRowClick = useCallback(
    (sNo: number) => {
      setPreferences((prev) => {
        const existing = prev.indexOf(sNo)
        if (existing !== -1) {
          // Remove it (toggle off)
          const newPrefs = [...prev]
          newPrefs[existing] = null
          return newPrefs
        }
        // Find next empty slot
        const nextEmpty = prev.findIndex((p) => p === null)
        if (nextEmpty === -1) return prev
        const newPrefs = [...prev]
        newPrefs[nextEmpty] = sNo
        return newPrefs
      })
    },
    []
  )

  const handleReset = useCallback(() => {
    setPreferences(Array(TOTAL_POSTS).fill(null))
    setAgreed(false)
    setErrorMessage("")
    setShowSuccess(false)
  }, [])

  const handleSubmit = useCallback(() => {
    setErrorMessage("")
    setShowSuccess(false)

    const filledCount = preferences.filter((p) => p !== null).length
    if (filledCount === 0) {
      setErrorMessage("Please fill at least 1 preference box before submitting.")
      return
    }
    if (!agreed) {
      setErrorMessage("Please agree to the terms and conditions before submitting.")
      return
    }

    const data: SavedData = {
      candidateName,
      registrationNumber,
      rollNumber,
      preferences,
    }

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      setHasSaved(true)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 4000)
    } catch {
      setErrorMessage("Failed to save data. Please try again.")
    }
  }, [preferences, agreed, candidateName, registrationNumber, rollNumber])

  const handleClose = useCallback(() => {
    setCandidateName("")
    setRegistrationNumber("")
    setRollNumber("")
    setPreferences(Array(TOTAL_POSTS).fill(null))
    setAgreed(false)
    setErrorMessage("")
    setShowSuccess(false)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="mx-auto w-full max-w-[1200px] flex-1 px-4 py-6">
        <div className="rounded border border-border bg-card shadow-sm">
          {/* Title */}
          <div className="border-b border-border px-6 py-5">
            <h1 className="text-2xl font-bold text-foreground">
              Option Cum Preference Form
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Combined Graduate Level Examination, 2024
            </p>
          </div>

          {/* Candidate Info */}
          <div className="border-b border-border px-6 py-5">
            <CandidateInfo
              candidateName={candidateName}
              setCandidateName={setCandidateName}
              registrationNumber={registrationNumber}
              setRegistrationNumber={setRegistrationNumber}
              rollNumber={rollNumber}
              setRollNumber={setRollNumber}
            />
          </div>

          {/* Select Preferences */}
          <div className="border-b border-border px-6 py-5">
            <h2 className="mb-4 text-lg font-bold text-foreground">
              Select Preferences
            </h2>
            <PostTable
              posts={posts}
              preferences={preferences}
              onRowClick={handleRowClick}
            />
          </div>

          {/* Preference Grid */}
          <div className="border-b border-border px-6 py-5">
            <PreferenceGrid
              preferences={preferences}
              setPreferences={setPreferences}
              totalPosts={TOTAL_POSTS}
            />

            {/* Notes */}
            <div className="mt-5 space-y-1">
              <p className="text-[13px] font-medium text-destructive">
                {"NOTE 1: Candidates will be considered for only those posts for which they are eligible."}
              </p>
              <p className="text-[13px] font-medium text-destructive">
                {"NOTE 2: You will not be considered for the posts for which you have not opted and consequently, preference has been marked as 'X'."}
              </p>
              <p className="text-[13px] font-medium text-destructive">
                {"NOTE 3: Candidates who are overage and who were absent, options would not be considered."}
              </p>
            </div>

            {/* Reset Button */}
            <div className="mt-5 flex justify-end">
              <button
                onClick={handleReset}
                className="rounded-full bg-primary px-8 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Declaration */}
          <div className="border-b border-border px-6 py-5">
            <Declaration />
          </div>

          {/* Agree + Submit */}
          <div className="px-6 py-5">
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="h-4 w-4 accent-primary"
              />
              <span className="text-sm text-foreground">
                I agree to above terms and conditions.
              </span>
            </label>

            <p className="mt-3 text-[13px] font-medium text-destructive">
              {"NOTE: You can change your preferences until this window is open."}
            </p>

            {/* Error / Success */}
            {errorMessage && (
              <div className="mt-3 rounded bg-destructive/10 px-4 py-2 text-sm text-destructive">
                {errorMessage}
              </div>
            )}
            {showSuccess && (
              <div className="mt-3 rounded bg-green-50 px-4 py-2 text-sm text-green-700">
                {"Your preferences have been saved successfully!"}
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-6 flex items-center justify-center gap-8">
              <button
                onClick={handleSubmit}
                className="rounded-full bg-primary px-10 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {hasSaved ? "Update" : "Submit"}
              </button>
              <button
                onClick={handleClose}
                className="rounded-full bg-primary px-10 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
