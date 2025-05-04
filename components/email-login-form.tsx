"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { OtpInput } from "@/components/otp-input"

export function EmailLoginForm() {
  const [isOtpSent, setIsOtpSent] = useState(false)
  const [email, setEmail] = useState("")

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsOtpSent(true)
    }
  }

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle OTP verification logic here
    console.log("OTP verified")
  }

  if (isOtpSent) {
    return (
      <form onSubmit={handleVerifyOtp} className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm">Enter the 6-digit code sent to {email}</p>
          <OtpInput length={6} />
        </div>
        <Button type="submit" className="w-full mt-6">
          Verify OTP
        </Button>
        <div className="flex justify-between text-center w-full">
          <Button variant="link" type="button" onClick={() => setIsOtpSent(false)} className="text-xs p-0 h-auto">
            Change Email
          </Button>
          <Button variant="link" type="button" className="text-xs p-0 h-auto">
            Resend OTP
          </Button>
        </div>
      </form>
    )
  }

  return (
    <form onSubmit={handleSendOtp} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full mt-6">
        Continue with Email
      </Button>
    </form>
  )
}
