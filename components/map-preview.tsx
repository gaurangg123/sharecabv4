import Image from "next/image"
import { Card } from "@/components/ui/card"

interface MapPreviewProps {
  pickup?: string
  destination?: string
}

export function MapPreview({ pickup, destination }: MapPreviewProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-[400px] w-full">
        <Image
          src="/placeholder.svg?height=400&width=800&text=Map+Preview"
          alt="Map Preview"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 p-4 bg-background/90 rounded-lg border shadow-sm">
          <div className="space-y-2">
            {pickup && destination ? (
              <>
                <div className="flex items-center justify-between">
                  <div className="font-medium">From</div>
                  <div className="text-sm">{pickup}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-medium">To</div>
                  <div className="text-sm">{destination}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-medium">Distance</div>
                  <div className="text-sm">3.2 km</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-medium">Estimated Time</div>
                  <div className="text-sm">12 minutes</div>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between">
                  <div className="font-medium">Estimated Trip</div>
                  <div className="text-sm text-muted-foreground">Enter pickup and destination</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}
