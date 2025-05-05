"use client"

import { Car, Clock, Bike, Truck } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function RideOptions() {
  const [selectedRide, setSelectedRide] = useState("auto")
  const router = useRouter()

  const handleRideSelect = (value: string) => {
    setSelectedRide(value)
  }

  const handleBookRide = () => {
    router.push("/ride-confirmation")
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <h3 className="text-lg font-semibold">Available Rides</h3>
        <p className="text-sm text-muted-foreground">Select your preferred ride option</p>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedRide} onValueChange={handleRideSelect} className="space-y-3">
          <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-muted/50">
            <RadioGroupItem value="bike" id="bike" />
            <Label htmlFor="bike" className="flex flex-1 cursor-pointer justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Bike className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Bike</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>2 min</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>Lowest fare</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">₹60</p>
                <p className="text-sm text-muted-foreground">Hero Splendor</p>
              </div>
            </Label>
          </div>

          <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-muted/50 border-primary bg-primary/5">
            <RadioGroupItem value="auto" id="auto" />
            <Label htmlFor="auto" className="flex flex-1 cursor-pointer justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Auto Rickshaw</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>3 min</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>Affordable</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">₹120</p>
                <p className="text-sm text-muted-foreground">Bajaj RE</p>
              </div>
            </Label>
          </div>

          <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-muted/50">
            <RadioGroupItem value="mini" id="mini" />
            <Label htmlFor="mini" className="flex flex-1 cursor-pointer justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Car className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Mini</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>4 min</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>Standard</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">₹180</p>
                <p className="text-sm text-muted-foreground">Maruti Suzuki WagonR</p>
              </div>
            </Label>
          </div>

          <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-muted/50">
            <RadioGroupItem value="sedan" id="sedan" />
            <Label htmlFor="sedan" className="flex flex-1 cursor-pointer justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Car className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Sedan</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>5 min</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>Premium</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">₹250</p>
                <p className="text-sm text-muted-foreground">Honda City</p>
              </div>
            </Label>
          </div>
        </RadioGroup>

        <Button className="w-full mt-6" onClick={handleBookRide}>
          Book{" "}
          {selectedRide === "bike"
            ? "Bike"
            : selectedRide === "auto"
              ? "Auto Rickshaw"
              : selectedRide === "mini"
                ? "Mini"
                : "Sedan"}
        </Button>
      </CardContent>
    </Card>
  )
}
