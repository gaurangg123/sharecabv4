"use client"

import { useState } from "react"
import { HeroSearch } from "@/components/hero-search"
import { MapPreview } from "@/components/map-preview"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, MapPin } from "lucide-react"
import { SavedLocations } from "@/components/saved-locations"
import { FareEstimator } from "@/components/fare-estimator"
import { DriverDetails } from "@/components/driver-details"
import { useToast } from "@/components/ui/use-toast"
import { RideOptions } from "@/components/ride-options"

export default function BookRidePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingDetails, setBookingDetails] = useState({
    pickup: "",
    destination: "",
    date: new Date(),
    time: "12:00",
    passengers: "1",
    distance: 5,
    duration: 15,
    rideSharing: false,
    paymentMethod: {
      id: "upi-1",
      type: "upi" as const,
      name: "Google Pay",
      details: "user@okicici",
      isDefault: true,
    },
  })
  const [bookingComplete, setBookingComplete] = useState(false)
  const { toast } = useToast()

  const handleSearchSubmit = (details: any) => {
    setBookingDetails({
      ...bookingDetails,
      ...details,
      distance: Math.floor(Math.random() * 10) + 2, // Simulate distance calculation
      duration: Math.floor(Math.random() * 20) + 10, // Simulate duration calculation
    })
    setCurrentStep(2)
  }

  const handleLocationSelect = (address: string, type: "pickup" | "destination") => {
    setBookingDetails({
      ...bookingDetails,
      [type]: address,
    })
  }

  const handleRideSharingToggle = (enabled: boolean) => {
    setBookingDetails({
      ...bookingDetails,
      rideSharing: enabled,
    })
  }

  const handlePaymentMethodSelect = (method: any) => {
    setBookingDetails({
      ...bookingDetails,
      paymentMethod: method,
    })
  }

  const handleBookRide = () => {
    setBookingComplete(true)
    toast({
      title: "Ride Booked Successfully!",
      description: "Your driver is on the way.",
    })
  }

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-start gap-4 md:gap-8">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Book a Ride</h1>
          {currentStep === 2 && !bookingComplete && (
            <Button variant="ghost" onClick={() => setCurrentStep(1)} className="flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          )}
        </div>
        <p className="text-muted-foreground">Find the perfect ride for your journey</p>

        {currentStep === 1 && !bookingComplete ? (
          <div className="grid w-full gap-8 lg:grid-cols-[1fr_400px]">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <MapPreview />
                <FareEstimator />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <HeroSearch onSubmit={handleSearchSubmit} />
              <SavedLocations onSelect={(address) => handleLocationSelect(address, "destination")} />
            </div>
          </div>
        ) : bookingComplete ? (
          <div className="w-full max-w-3xl mx-auto">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold">Your Ride is Confirmed!</h2>
                  <p className="text-sm text-muted-foreground">
                    {bookingDetails.pickup} to {bookingDetails.destination}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-sm font-medium">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Arriving in 3 minutes</span>
                  </div>
                </div>
              </div>
              <MapPreview pickup={bookingDetails.pickup} destination={bookingDetails.destination} />
            </div>
            <div className="space-y-6">
              <DriverDetails />
              <div className="border rounded-lg p-4 space-y-3">
                <h3 className="font-medium">Ride Details</h3>
                <div className="grid gap-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Pickup</p>
                      <p className="text-sm text-muted-foreground">{bookingDetails.pickup}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Destination</p>
                      <p className="text-sm text-muted-foreground">{bookingDetails.destination}</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Distance</p>
                    <p className="font-medium">{bookingDetails.distance} km</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Estimated Time</p>
                    <p className="font-medium">{bookingDetails.duration} min</p>
                  </div>
                </div>
              </div>
              <Button className="w-full" variant="outline" onClick={() => setBookingComplete(false)}>
                Cancel Ride
              </Button>
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
