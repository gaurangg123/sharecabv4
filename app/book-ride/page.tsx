import { HeroSearch } from "@/components/hero-search"
import { RideOptions } from "@/components/ride-options"
import { MapPreview } from "@/components/map-preview"

export const metadata = {
  title: "Book a Ride - ShareCab",
  description: "Book your next ride with ShareCab - fast, reliable, and affordable.",
}

export default function BookRidePage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-start gap-4 md:gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Book a Ride</h1>
          <p className="text-muted-foreground">Find the perfect ride for your journey</p>
        </div>

        <div className="grid w-full gap-8 lg:grid-cols-[1fr_400px]">
          <div className="order-2 lg:order-1">
            <MapPreview />
          </div>
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <HeroSearch />
            <RideOptions />
          </div>
        </div>
      </div>
    </div>
  )
}
