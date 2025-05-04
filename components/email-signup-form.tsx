"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { OtpInput } from "@/components/otp-input"
import { Checkbox } from "@/components/ui/checkbox"

export function EmailSignupForm() {
  const [isOtpSent, setIsOtpSent] = useState(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && name) {
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
          Verify & Create Account
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
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="Rahul Sharma" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
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
      <div className="flex items-center space-x-2 mt-4">
        <Checkbox id="terms" required />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          I agree to the{" "}
          <a href="#" className="text-primary underline">
            terms of service
          </a>{" "}
          and{" "}
          <a href="#" className="text-primary underline">
            privacy policy
          </a>
        </label>
      </div>
      <Button type="submit" className="w-full mt-6">
        Continue with Email
      </Button>
    </form>
  )
}
