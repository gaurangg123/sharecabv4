"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { OtpInput } from "@/components/otp-input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function PhoneLoginForm() {
  const [isOtpSent, setIsOtpSent] = useState(false)
  const [phone, setPhone] = useState("")
  const [countryCode, setCountryCode] = useState("+91")

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault()
    if (phone) {
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
          <p className="text-sm">
            Enter the 6-digit code sent to {countryCode} {phone}
          </p>
          <OtpInput length={6} />
        </div>
        <Button type="submit" className="w-full mt-6">
          Verify OTP
        </Button>
        <div className="flex justify-between text-center w-full">
          <Button variant="link" type="button" onClick={() => setIsOtpSent(false)} className="text-xs p-0 h-auto">
            Change Phone
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
        <Label htmlFor="phone">Phone Number</Label>
        <div className="flex gap-2">
          <Select value={countryCode} onValueChange={setCountryCode}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Code" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="+91">+91 (IN)</SelectItem>
              <SelectItem value="+1">+1 (US)</SelectItem>
              <SelectItem value="+44">+44 (UK)</SelectItem>
              <SelectItem value="+61">+61 (AU)</SelectItem>
            </SelectContent>
          </Select>
          <Input
            id="phone"
            type="tel"
            placeholder="9876543210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="flex-1"
          />
        </div>
      </div>
      <Button type="submit" className="w-full mt-6">
        Continue with Phone
      </Button>
    </form>
  )
}
