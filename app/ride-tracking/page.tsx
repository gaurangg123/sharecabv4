"use client"

import { useState } from "react"
import { MapPreview } from "@/components/map-preview"
import { DriverDetails } from "@/components/driver-details"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Phone, MessageSquare, AlertTriangle, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function RideTrackingPage() {
  const [rideStatus, setRideStatus] = useState<"confirmed" | "arriving" | "arrived" | "in_progress" | "completed">(
    "arriving",
  )

  const rideDetails = {
    id: "RIDE123456",
    pickup: "Connaught Place, New Delhi",
    destination: "Cyber City, Gurugram",
    distance: "18.5 km",
    estimatedTime: "35 min",
    fare: "₹350",
    bookedAt: "May 5, 2025 09:15 AM",
  }

  const getStatusText = () => {
    switch (rideStatus) {
      case "confirmed":
        return "Ride Confirmed"
      case "arriving":
        return "Driver is arriving"
      case "arrived":
        return "Driver has arrived"
      case "in_progress":
        return "Ride in progress"
      case "completed":
        return "Ride completed"
    }
  }

  const getStatusProgress = () => {
    switch (rideStatus) {
      case "confirmed":
        return 10
      case "arriving":
        return 30
      case "arrived":
        return 50
      case "in_progress":
        return 75
      case "completed":
        return 100
    }
  }

  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-start gap-6 md:gap-8">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Track Your Ride</h1>
            <Badge variant="outline" className="ml-2">
              {getStatusText()}
            </Badge>
          </div>
          <p className="text-muted-foreground">Ride ID: {rideDetails.id}</p>
        </div>

        <div className="w-full grid gap-6 md:grid-cols-[1fr_350px]">
          <div className="space-y-6">
            <MapPreview pickup={rideDetails.pickup} destination={rideDetails.destination} />

            <Card>
              <CardHeader className="pb-2">
                <h3 className="text-lg font-semibold">Ride Progress</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Progress value={getStatusProgress()} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Confirmed</span>
                    <span>Arriving</span>
                    <span>Arrived</span>
                    <span>In Progress</span>
                    <span>Completed</span>
                  </div>
                </div>

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

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Distance</p>
                    <p className="font-medium">{rideDetails.distance}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Estimated Time</p>
                    <p className="font-medium">{rideDetails.estimatedTime}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Fare</p>
                    <p className="font-medium">{rideDetails.fare}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Booked At</p>
                    <p className="font-medium">{rideDetails.bookedAt}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <Phone className="h-4 w-4 mr-2" />
                Call Support
              </Button>
              <Button variant="outline" className="w-full">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Report Issue
              </Button>
              <Button variant="outline" className="w-full">
                <Share2 className="h-4 w-4 mr-2" />
                Share Trip
              </Button>
              <Button variant="outline" className="w-full">
                <MessageSquare className="h-4 w-4 mr-2" />
                Message Driver
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <DriverDetails />

            <Card>
              <CardHeader className="pb-2">
                <h3 className="text-lg font-semibold">Safety Features</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <Tabs defaultValue="emergency">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="emergency">Emergency</TabsTrigger>
                    <TabsTrigger value="share">Share Ride</TabsTrigger>
                  </TabsList>
                  <TabsContent value="emergency" className="space-y-4 pt-4">
                    <Button variant="destructive" className="w-full">
                      Emergency SOS
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      In case of emergency, press the SOS button to alert our safety team and local authorities.
                    </p>
                  </TabsContent>
                  <TabsContent value="share" className="space-y-4 pt-4">
                    <div className="border rounded-md p-3">
                      <p className="text-sm font-medium">Share your ride details</p>
                      <p className="text-xs text-muted-foreground mb-3">
                        Let your friends or family know where you are
                      </p>
                      <Button variant="outline" className="w-full">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share Live Location
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
