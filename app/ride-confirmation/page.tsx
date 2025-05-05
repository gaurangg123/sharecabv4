"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { MapPreview } from "@/components/map-preview"
import { PaymentMethods } from "@/components/payment-methods"
import { RideSharing } from "@/components/ride-sharing"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { MapPin, Clock, Calendar, Users, CreditCard, Check } from "lucide-react"

export default function RideConfirmationPage() {
  const router = useRouter()
  const [isRideSharing, setIsRideSharing] = useState(false)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState({
    id: "upi-1",
    type: "upi",
    name: "Google Pay",
    details: "user@okicici",
    isDefault: true,
  })

  const rideDetails = {
    pickup: "Connaught Place, New Delhi",
    destination: "Cyber City, Gurugram",
    date: new Date(),
    time: "09:30 AM",
    passengers: "2",
    distance: "18.5 km",
    duration: "35 min",
    vehicleType: "Auto Rickshaw",
    vehicleModel: "Bajaj RE",
    baseFare: 120,
    distanceFare: 180,
    timeFare: 50,
    discount: isRideSharing ? 70 : 0,
    totalFare: isRideSharing ? 280 : 350,
  }

  const handleConfirmRide = () => {
    router.push("/ride-tracking")
  }

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-start gap-6 md:gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Confirm Your Ride</h1>
          <p className="text-muted-foreground">Review and confirm your ride details</p>
        </div>

        <div className="w-full grid gap-6 md:grid-cols-[1fr_350px]">
          <div className="space-y-6">
            <MapPreview pickup={rideDetails.pickup} destination={rideDetails.destination} />

            <Card>
              <CardHeader className="pb-2">
                <h3 className="text-lg font-semibold">Ride Details</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Pickup</p>
                      <p className="text-sm text-muted-foreground">{rideDetails.pickup}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Destination</p>
                      <p className="text-sm text-muted-foreground">{rideDetails.destination}</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Date</p>
                      <p className="text-sm text-muted-foreground">{rideDetails.date.toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Time</p>
                      <p className="text-sm text-muted-foreground">{rideDetails.time}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Passengers</p>
                      <p className="text-sm text-muted-foreground">{rideDetails.passengers}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CreditCard className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Payment</p>
                      <p className="text-sm text-muted-foreground">{selectedPaymentMethod.name}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <RideSharing onToggle={setIsRideSharing} />
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <h3 className="text-lg font-semibold">Fare Breakdown</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Base fare</span>
                    <span className="text-sm">₹{rideDetails.baseFare}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Distance charge ({rideDetails.distance})</span>
                    <span className="text-sm">₹{rideDetails.distanceFare}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Time charge ({rideDetails.duration})</span>
                    <span className="text-sm">₹{rideDetails.timeFare}</span>
                  </div>
                  {isRideSharing && (
                    <div className="flex items-center justify-between text-green-600">
                      <span className="text-sm">Ride sharing discount</span>
                      <span className="text-sm">-₹{rideDetails.discount}</span>
                    </div>
                  )}
                </div>

                <Separator />

                <div className="flex items-center justify-between font-medium">
                  <span>Total fare</span>
                  <span>₹{rideDetails.totalFare}</span>
                </div>

                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground">
                    Fares are estimates and may vary based on traffic, weather, and route changes.
                  </p>
                </div>
              </CardContent>
            </Card>

            <PaymentMethods onSelect={setSelectedPaymentMethod} />

            <Button className="w-full" size="lg" onClick={handleConfirmRide}>
              <Check className="h-4 w-4 mr-2" />
              Confirm Ride
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
