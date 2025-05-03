"use client"

import { useState } from "react"
import { MapPin, Calendar, Users, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TimePickerDemo } from "@/components/time-picker"

export function HeroSearch() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Card className="w-full shadow-lg border-primary/10">
      <CardHeader className="bg-primary/5 pb-4">
        <h3 className="text-lg font-semibold">Book Your Ride</h3>
        <p className="text-sm text-muted-foreground">Find the perfect ride in seconds</p>
      </CardHeader>
      <CardContent className="pt-6 pb-4">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="pickup">Pickup Location</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input id="pickup" placeholder="Enter pickup location (e.g., Connaught Place)" className="pl-9" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="destination">Destination</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input id="destination" placeholder="Enter destination (e.g., India Gate)" className="pl-9" />
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
              <TimePickerDemo />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="passengers">Passengers</Label>
            <div className="relative">
              <Users className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Select>
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
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full gap-2">
          <Search className="h-4 w-4" />
          Find Rides
        </Button>
      </CardFooter>
    </Card>
  )
}
