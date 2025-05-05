"use client"

import { useState, useEffect } from "react"
import { Calculator, Info } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface FareEstimatorProps {
  distance?: number
  duration?: number
}

export function FareEstimator({ distance = 5, duration = 15 }: FareEstimatorProps) {
  const [estimatedDistance, setEstimatedDistance] = useState(distance)
  const [estimatedDuration, setEstimatedDuration] = useState(duration)
  const [rideType, setRideType] = useState("auto")

  const baseFares = {
    bike: 20,
    auto: 30,
    mini: 40,
    sedan: 50,
  }

  const ratePerKm = {
    bike: 8,
    auto: 15,
    mini: 22,
    sedan: 30,
  }

  const calculateFare = (type: string, distance: number, duration: number) => {
    const baseFare = baseFares[type as keyof typeof baseFares] || 0
    const rate = ratePerKm[type as keyof typeof ratePerKm] || 0

    // Basic calculation: base fare + (rate per km * distance) + small time factor
    const distanceFare = rate * distance
    const timeFare = duration * 0.5 // ₹0.5 per minute

    return Math.round(baseFare + distanceFare + timeFare)
  }

  const [estimates, setEstimates] = useState({
    bike: 0,
    auto: 0,
    mini: 0,
    sedan: 0,
  })

  useEffect(() => {
    setEstimates({
      bike: calculateFare("bike", estimatedDistance, estimatedDuration),
      auto: calculateFare("auto", estimatedDistance, estimatedDuration),
      mini: calculateFare("mini", estimatedDistance, estimatedDuration),
      sedan: calculateFare("sedan", estimatedDistance, estimatedDuration),
    })
  }, [estimatedDistance, estimatedDuration])

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Calculator className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-medium">Fare Estimator</h3>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Info className="h-4 w-4" />
                <span className="sr-only">Fare information</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">Fares are estimates and may vary based on traffic, weather, and demand.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm">Distance: {estimatedDistance} km</label>
          </div>
          <Slider
            value={[estimatedDistance]}
            min={1}
            max={30}
            step={0.5}
            onValueChange={(value) => setEstimatedDistance(value[0])}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm">Duration: {estimatedDuration} min</label>
          </div>
          <Slider
            value={[estimatedDuration]}
            min={5}
            max={60}
            step={1}
            onValueChange={(value) => setEstimatedDuration(value[0])}
          />
        </div>

        <Tabs defaultValue="auto" value={rideType} onValueChange={setRideType}>
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="bike">Bike</TabsTrigger>
            <TabsTrigger value="auto">Auto</TabsTrigger>
            <TabsTrigger value="mini">Mini</TabsTrigger>
            <TabsTrigger value="sedan">Sedan</TabsTrigger>
          </TabsList>
          <TabsContent value="bike" className="pt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Estimated fare:</span>
              <span className="font-bold">₹{estimates.bike}</span>
            </div>
          </TabsContent>
          <TabsContent value="auto" className="pt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Estimated fare:</span>
              <span className="font-bold">₹{estimates.auto}</span>
            </div>
          </TabsContent>
          <TabsContent value="mini" className="pt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Estimated fare:</span>
              <span className="font-bold">₹{estimates.mini}</span>
            </div>
          </TabsContent>
          <TabsContent value="sedan" className="pt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Estimated fare:</span>
              <span className="font-bold">₹{estimates.sedan}</span>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
