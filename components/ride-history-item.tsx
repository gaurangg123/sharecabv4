import { MapPin, DollarSign, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface RideHistoryItemProps {
  date: string
  time: string
  pickup: string
  destination: string
  price: string
  status: "scheduled" | "completed" | "cancelled"
}

export function RideHistoryItem({ date, time, pickup, destination, price, status }: RideHistoryItemProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge
                variant={status === "scheduled" ? "outline" : status === "completed" ? "default" : "destructive"}
                className="capitalize"
              >
                {status}
              </Badge>
              <span className="text-sm font-medium">{date}</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{time}</span>
            </div>
            <div className="grid gap-1">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{pickup}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{destination}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">{price}</span>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">View details</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
