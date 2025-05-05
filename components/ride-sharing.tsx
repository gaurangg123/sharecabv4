"use client"

import { useState } from "react"
import { Users, UserPlus, Clock, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface RideSharingProps {
  onToggle: (enabled: boolean) => void
}

export function RideSharing({ onToggle }: RideSharingProps) {
  const [enabled, setEnabled] = useState(false)
  const [availableRiders, setAvailableRiders] = useState([
    {
      id: "1",
      name: "Priya M",
      rating: 4.8,
      pickup: "Connaught Place",
      destination: "Cyber City",
      time: "9:30 AM",
      distance: 0.5,
      selected: false,
    },
    {
      id: "2",
      name: "Vikram S",
      rating: 4.9,
      pickup: "Connaught Place",
      destination: "Cyber City",
      time: "9:45 AM",
      distance: 0.3,
      selected: false,
    },
  ])

  const handleToggle = (checked: boolean) => {
    setEnabled(checked)
    onToggle(checked)
  }

  const handleSelectRider = (id: string) => {
    setAvailableRiders(
      availableRiders.map((rider) => (rider.id === id ? { ...rider, selected: !rider.selected } : rider)),
    )
  }

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-medium">Ride Sharing</h3>
        </div>
        <Switch checked={enabled} onCheckedChange={handleToggle} />
      </CardHeader>
      <CardContent>
        {enabled ? (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Share your ride with others going the same way and save up to 40% on fare.
            </p>

            <div className="space-y-3">
              <h4 className="text-sm font-medium">Riders going your way</h4>

              {availableRiders.map((rider) => (
                <div key={rider.id} className="border rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${rider.name.charAt(0)}`} />
                        <AvatarFallback>{rider.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-1">
                          <p className="text-sm font-medium">{rider.name}</p>
                          <Badge variant="outline" className="text-xs">
                            {rider.rating}★
                          </Badge>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{rider.time}</span>
                          <span>•</span>
                          <span>{rider.distance} km away</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant={rider.selected ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleSelectRider(rider.id)}
                    >
                      {rider.selected ? "Selected" : "Select"}
                    </Button>
                  </div>

                  <Separator className="my-2" />

                  <div className="grid gap-1">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-3 w-3 mt-0.5 text-muted-foreground" />
                      <p className="text-xs">{rider.pickup}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-3 w-3 mt-0.5 text-muted-foreground" />
                      <p className="text-xs">{rider.destination}</p>
                    </div>
                  </div>
                </div>
              ))}

              <Button className="w-full" variant="outline" size="sm">
                <UserPlus className="h-4 w-4 mr-2" />
                Invite Friends
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center py-4">
            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">
              Enable ride sharing to find people traveling the same route and save on your fare.
            </p>
            <Button className="mt-4" onClick={() => handleToggle(true)}>
              Enable Ride Sharing
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
