"use client"

import { useState } from "react"
import { HeroSearch } from "@/components/hero-search"
import { RideOptions } from "@/components/ride-options"
import { MapPreview } from "@/components/map-preview"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function BookRidePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingDetails, setBookingDetails] = useState({
    pickup: "",
    destination: "",
    date: new Date(),
    time: "12:00",
    passengers: "1",
  })

  const handleSearchSubmit = (details: any) => {
    setBookingDetails(details)
    setCurrentStep(2)
  }

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-start gap-4 md:gap-8">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Book a Ride</h1>
          {currentStep === 2 && (
            <Button variant="ghost" onClick={() => setCurrentStep(1)} className="flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          )}
        </div>
        <p className="text-muted-foreground">Find the perfect ride for your journey</p>

        {currentStep === 1 ? (
          <div className="grid w-full gap-8 lg:grid-cols-[1fr_400px]">
            <div className="order-2 lg:order-1">
              <MapPreview />
            </div>
            <div className="order-1 lg:order-2">
              <HeroSearch onSubmit={handleSearchSubmit} />
            </div>
          </div>
        ) : (
          <div className="w-full max-w-3xl mx-auto">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold">Trip Details</h2>
                  <p className="text-sm text-muted-foreground">
                    {bookingDetails.pickup} to {bookingDetails.destination}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{bookingDetails.date.toLocaleDateString()}</p>
                  <p className="text-sm text-muted-foreground">{bookingDetails.time}</p>
                </div>
              </div>
              <MapPreview pickup={bookingDetails.pickup} destination={bookingDetails.destination} />
            </div>
            <RideOptions />
          </div>
        )}
      </div>
    </div>
  )
}
