import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RideHistoryItem } from "@/components/ride-history-item"

export const metadata = {
  title: "My Rides - ShareCab",
  description: "View your upcoming and past rides with ShareCab.",
}

export default function MyRidesPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-start gap-4 md:gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Rides</h1>
          <p className="text-muted-foreground">View and manage your rides</p>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="space-y-4">
            <RideHistoryItem
              date="May 5, 2025"
              time="09:30 AM"
              pickup="Connaught Place, New Delhi"
              destination="Cyber City, Gurugram"
              price="₹350"
              status="scheduled"
            />
            <RideHistoryItem
              date="May 7, 2025"
              time="02:15 PM"
              pickup="Indiranagar, Bangalore"
              destination="Electronic City, Bangalore"
              price="₹280"
              status="scheduled"
            />
          </TabsContent>
          <TabsContent value="completed" className="space-y-4">
            <RideHistoryItem
              date="April 30, 2025"
              time="10:45 AM"
              pickup="Bandra, Mumbai"
              destination="Mumbai International Airport"
              price="₹450"
              status="completed"
            />
            <RideHistoryItem
              date="April 28, 2025"
              time="08:30 AM"
              pickup="Salt Lake, Kolkata"
              destination="Howrah Station, Kolkata"
              price="₹220"
              status="completed"
            />
            <RideHistoryItem
              date="April 25, 2025"
              time="07:15 PM"
              pickup="Jubilee Hills, Hyderabad"
              destination="Gachibowli, Hyderabad"
              price="₹320"
              status="completed"
            />
          </TabsContent>
          <TabsContent value="cancelled" className="space-y-4">
            <RideHistoryItem
              date="April 22, 2025"
              time="04:30 PM"
              pickup="Chennai International Airport"
              destination="T Nagar, Chennai"
              price="₹380"
              status="cancelled"
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
