"use client"

import { useState, useCallback, useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CandidateInfo } from "@/components/candidate-info"
import { PostTable } from "@/components/post-table"
import { PreferenceGrid } from "@/components/preference-grid"
import { Declaration } from "@/components/declaration"
import { OTPVerification } from "@/components/otp-verification"
import { LoadingOverlay } from "@/components/loading-overlay"
import { SuccessModal } from "@/components/success-modal"
import { posts } from "@/lib/posts-data"

const STORAGE_KEY = "ssc-cgl-preferences"
const TOTAL_POSTS = 55

interface SavedData {
  candidateName: string
  registrationNumber: string
  rollNumber: string
  preferences: (string | null)[]
}

export default function Home() {
  const candidateName = "Animesh Kumar"
  const registrationNumber = "10001706843"
  const rollNumber = "320602224"
  const [preferences, setPreferences] = useState<(string | null)[]>(
    Array(TOTAL_POSTS).fill(null)
  )
  const [agreed, setAgreed] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showUpdateSuccess, setShowUpdateSuccess] = useState(false)

  const downloadPDF = useCallback(() => {
    const link = document.createElement("a")
    link.href = "/320602224.pdf"
    link.download = "320602224.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [])

  // Do not persist hasSubmitted on refresh - always start fresh
  // localStorage is only used for preference data, not submission state



  const handleReset = useCallback(() => {
    setPreferences(Array(TOTAL_POSTS).fill(null))
    setAgreed(false)
    setErrorMessage("")
    setShowSuccess(false)
  }, [])

  const handleSubmit = useCallback(() => {
    setErrorMessage("")

    const filledCount = preferences.filter((p) => p !== null).length
    if (filledCount === 0) {
      setErrorMessage("Please fill at least 1 preference box before submitting.")
      return
    }
    if (!agreed) {
      setErrorMessage("Please agree to the terms and conditions before submitting.")
      return
    }
    if (!isSubmitEnabled) {
      setErrorMessage("Please validate at least one OTP to proceed")
      return
    }

    if (hasSubmitted) {
      // Update button behavior - no loading, just show success message for 3 seconds
      const data: SavedData = {
        candidateName,
        registrationNumber,
        rollNumber,
        preferences,
      }

      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
        setShowUpdateSuccess(true)
        setTimeout(() => setShowUpdateSuccess(false), 3000)
      } catch {
        setErrorMessage("Failed to save data. Please try again.")
      }
    } else {
      // Submit button behavior - show loading for 2 seconds then show success modal
      setIsSubmitting(true)
      setTimeout(() => {
        const data: SavedData = {
          candidateName,
          registrationNumber,
          rollNumber,
          preferences,
        }

        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
          setIsSubmitting(false)
          setShowSuccess(true)
        } catch {
          setErrorMessage("Failed to save data. Please try again.")
          setIsSubmitting(false)
        }
      }, 2000)
    }
  }, [preferences, agreed, candidateName, registrationNumber, rollNumber, isSubmitEnabled, hasSubmitted])

  const handleClose = useCallback(() => {
    // When success modal is closed, set hasSubmitted to true
    setShowSuccess(false)
    setHasSubmitted(true)
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
              Combined Graduate Level Examination, 2025
            </p>
          </div>

          {/* Candidate Info */}
          <div className="border-b border-border px-6 py-5">
            <CandidateInfo
              candidateName={candidateName}
              registrationNumber={registrationNumber}
              rollNumber={rollNumber}
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

          {/* OTP Verification + Submit */}
          <div className="px-6 py-5 space-y-5">
            {/* NOTE 4 - Only visible before submission */}
            {!hasSubmitted && (
              <div className="space-y-1">
                <p className="text-[13px] font-medium text-destructive">
                  {"NOTE 4: At least one OTP verification (Mobile or Email) is required to proceed further. This preference form will not be submitted without OTP verification."}
                </p>
              </div>
            )}

            {/* OTP Verification Section - Only visible before submission */}
            {!hasSubmitted && (
              <div className="rounded-lg border border-border bg-card p-4">
                <OTPVerification onSubmitEnabled={setIsSubmitEnabled} />
              </div>
            )}
            
            {/* NOTE 5 - Always visible but label changes */}
            <div className="space-y-1">
              <p className="text-[13px] font-medium text-destructive">
                {hasSubmitted 
                  ? "NOTE: You can change your preferences until this window is open."
                  : "NOTE 5: You can change your preferences until this window is open."}
              </p>
            </div>

            {/* Agree to terms */}
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

            {/* Error Message */}
            {errorMessage && (
              <div className="rounded bg-destructive/10 px-4 py-2 text-sm text-destructive">
                {errorMessage}
              </div>
            )}

            {/* Update Success Message (shown for 3 seconds) */}
            {showUpdateSuccess && (
              <div className="text-center text-sm font-medium text-green-700">
                {"Your preference has been updated successfully."}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-8">
              {/* Submit Button - only visible before first submission */}
              {!hasSubmitted && (
                <button
                  onClick={handleSubmit}
                  disabled={!isSubmitEnabled || !agreed}
                  className={`rounded-full px-10 py-2.5 text-sm font-medium transition-colors ${
                    isSubmitEnabled && agreed
                      ? "bg-[#8B4545] text-white hover:bg-[#744141]"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                  }`}
                >
                  Submit
                </button>
              )}

              {/* Update Button - only visible after first submission */}
              {hasSubmitted && (
                <button
                  onClick={handleSubmit}
                  style={{ display: 'inline-block' }}
                  className="rounded-full bg-[#8B4545] px-10 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#744141]"
                >
                  Update
                </button>
              )}

              {/* Print Button - only visible after first submission */}
              {hasSubmitted && (
                <button
                  onClick={downloadPDF}
                  style={{ display: 'inline-block' }}
                  className="rounded-full bg-[#8B4545] px-10 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#744141]"
                >
                  Print
                </button>
              )}

              {/* Close Button - always visible */}
              <button
                onClick={handleClose}
                className="rounded-full bg-[#8B4545] px-10 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#744141]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
      
      {/* Loading Overlay */}
      <LoadingOverlay isVisible={isSubmitting} />
      
      {/* Success Modal */}
      <SuccessModal isVisible={showSuccess} onClose={handleClose} />
    </div>
  )
}
