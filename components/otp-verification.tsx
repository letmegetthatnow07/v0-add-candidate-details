"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { LoadingOverlay } from "./loading-overlay"

const MOBILE_OTP = "887567"
const EMAIL_OTP = "656457"
const MOBILE_NUMBER = "9472896759"
const EMAIL = "animeshkumar97@gmail.com"

interface OTPRowProps {
  type: "mobile" | "email"
  onVerified: (verified: boolean) => void
}

function OTPRow({ type, onVerified }: OTPRowProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [showOTPInput, setShowOTPInput] = useState(false)
  const [otp, setOtp] = useState("")
  const [isVerified, setIsVerified] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  // Notify parent component whenever verification status changes
  useEffect(() => {
    onVerified(isVerified)
  }, [isVerified, onVerified])

  const isEmail = type === "email"
  const value = isEmail ? EMAIL : MOBILE_NUMBER
  const correctOTP = isEmail ? EMAIL_OTP : MOBILE_OTP

  const handleSendOTP = async () => {
    setIsLoading(true)
    setErrorMessage("")
    setSuccessMessage("")
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setShowOTPInput(true)
    setSuccessMessage("OTP sent successfully!")
  }

  const handleValidateOTP = () => {
    setErrorMessage("")
    if (otp === correctOTP) {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        setIsVerified(true)
        setShowOTPInput(false)
        setOtp("")
      }, 1500)
    } else {
      setErrorMessage("Incorrect OTP. Please try again.")
      setOtp("")
    }
  }

  return (
    <>
      <LoadingOverlay isVisible={isLoading} />
      <div className="space-y-3">
        {/* Row 1: Value + Send OTP Button */}
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <input
              type="text"
              value={value}
              disabled
              className="w-full rounded border border-border bg-gray-100 px-4 py-2.5 text-sm text-gray-600 cursor-not-allowed"
            />
          </div>
          <button
            onClick={handleSendOTP}
            disabled={isVerified}
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition-colors whitespace-nowrap ${
              isVerified
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-[#8B4545] text-white hover:bg-[#744141]"
            }`}
          >
            Send OTP
          </button>
          {isVerified && (
            <div className="flex items-center gap-1 text-green-600 whitespace-nowrap">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium">Verified</span>
            </div>
          )}
        </div>

        {/* Row 2: OTP Input + Validate (conditional) */}
        {showOTPInput && !isVerified && (
          <div className="space-y-2 pl-0">
            <div className="flex items-center gap-3">
              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                placeholder="Enter 6-digit OTP"
                className="flex-1 rounded border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder-gray-400 outline-none focus:border-primary focus:ring-1 focus:ring-ring"
              />
              <button
                onClick={handleValidateOTP}
                className="rounded-full bg-[#8B4545] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#744141] whitespace-nowrap"
              >
                Validate
              </button>
            </div>
            {successMessage && (
              <p className="text-xs text-green-600 font-medium">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="text-xs text-red-600 font-medium">{errorMessage}</p>
            )}
          </div>
        )}
      </div>
    </>
  )
}

interface OTPVerificationProps {
  onSubmitEnabled: (enabled: boolean) => void
}

export function OTPVerification({ onSubmitEnabled }: OTPVerificationProps) {
  const [mobileVerified, setMobileVerified] = useState(false)
  const [emailVerified, setEmailVerified] = useState(false)

  useEffect(() => {
    // Enable submit when at least one is verified
    const isEnabled = mobileVerified || emailVerified
    onSubmitEnabled(isEnabled)
  }, [mobileVerified, emailVerified, onSubmitEnabled])

  return (
    <div className="space-y-4">
      <OTPRow
        type="mobile"
        onVerified={setMobileVerified}
      />
      <div className="flex items-center justify-center gap-3 py-2">
        <div className="h-px flex-1 bg-border" />
        <span className="text-sm text-muted-foreground">OR</span>
        <div className="h-px flex-1 bg-border" />
      </div>
      <OTPRow
        type="email"
        onVerified={setEmailVerified}
      />
    </div>
  )
}
