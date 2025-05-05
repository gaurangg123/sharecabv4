"use client"

import { useState } from "react"
import { Phone, MessageSquare, Star, Shield, Award } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

interface DriverDetailsProps {
  driver?: {
    id: string
    name: string
    rating: number
    trips: number
    vehicle: string
    vehicleNumber: string
    arrivalTime: string
    photo?: string
  }
}

export function DriverDetails({
  driver = {
    id: "driver-123",
    name: "Rajesh Kumar",
    rating: 4.8,
    trips: 1243,
    vehicle: "Bajaj RE Auto",
    vehicleNumber: "DL 5S AB 1234",
    arrivalTime: "3 min",
    photo: undefined,
  },
}: DriverDetailsProps) {
  const [showContact, setShowContact] = useState(false)

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Your Driver</h3>
          <Badge variant="outline" className="font-normal">
            Arriving in {driver.arrivalTime}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={driver.photo || `/placeholder.svg?height=64&width=64&text=${driver.name.charAt(0)}`} />
            <AvatarFallback>{driver.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">{driver.name}</h4>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                <span className="font-medium">{driver.rating}</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              {driver.vehicle} • {driver.vehicleNumber}
            </p>
            <div className="flex items-center gap-1 mt-1">
              <Badge variant="secondary" className="text-xs font-normal">
                <Shield className="h-3 w-3 mr-1" />
                Verified
              </Badge>
              <Badge variant="secondary" className="text-xs font-normal">
                <Award className="h-3 w-3 mr-1" />
                {driver.trips}+ trips
              </Badge>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Driver is on the way</span>
            <span className="font-medium">{driver.arrivalTime}</span>
          </div>
          <Progress value={70} className="h-2" />
        </div>

        <Separator />

        {showContact ? (
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="w-full">
              <Phone className="h-4 w-4 mr-2" />
              Call
            </Button>
            <Button variant="outline" className="w-full">
              <MessageSquare className="h-4 w-4 mr-2" />
              Message
            </Button>
          </div>
        ) : (
          <Button className="w-full" onClick={() => setShowContact(true)}>
            Contact Driver
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
