"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Calendar, Users, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TimePickerDemo } from "@/components/time-picker"

interface HeroSearchProps {
  onSubmit: (details: {
    pickup: string
    destination: string
    date: Date
    time: string
    passengers: string
  }) => void
}

export function HeroSearch({ onSubmit }: HeroSearchProps) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [time, setTime] = useState("12:00")
  const [pickup, setPickup] = useState("")
  const [destination, setDestination] = useState("")
  const [passengers, setPassengers] = useState("1")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (pickup && destination && date) {
      onSubmit({
        pickup,
        destination,
        date,
        time,
        passengers,
      })
    }
  }

  return (
    <Card className="w-full shadow-lg border-primary/10">
      <CardHeader className="bg-primary/5 pb-4">
        <h3 className="text-lg font-semibold">Book Your Ride</h3>
        <p className="text-sm text-muted-foreground">Find the perfect ride in seconds</p>
      </CardHeader>
      <CardContent className="pt-6 pb-4">
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="pickup">Pickup Location</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="pickup"
                placeholder="Enter pickup location (e.g., Connaught Place)"
                className="pl-9"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="destination">Destination</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="destination"
                placeholder="Enter destination (e.g., India Gate)"
                className="pl-9"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="date">Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <Calendar className="mr-2 h-4 w-4" />
                    {date ? date.toLocaleDateString() : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="time">Time</Label>
              <TimePickerDemo value={time} onChange={setTime} />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="passengers">Passengers</Label>
            <div className="relative">
              <Users className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Select value={passengers} onValueChange={setPassengers}>
                <SelectTrigger className="pl-9">
                  <SelectValue placeholder="Select passengers" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Passenger</SelectItem>
                  <SelectItem value="2">2 Passengers</SelectItem>
                  <SelectItem value="3">3 Passengers</SelectItem>
                  <SelectItem value="4">4 Passengers</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button type="submit" className="w-full gap-2 mt-2">
            <Search className="h-4 w-4" />
            Find Rides
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
