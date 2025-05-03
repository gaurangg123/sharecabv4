import Link from "next/link"
import Image from "next/image"
import { MapPin, Users, ChevronRight, Star, Shield, Zap, CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FeatureCard } from "@/components/feature-card"
import { TestimonialCard } from "@/components/testimonial-card"

export default function HomePage() {
  return (
    <>
      <section className="relative">
        <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Ride with confidence
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Your Journey, <span className="text-primary">Our Priority</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Experience premium cab service with subscription plans that save you money and time. Join thousands of
                  satisfied customers who trust us for their daily commute.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="gap-1">
                  <Link href="/book-ride">
                    Book a Ride
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/plans">View Plans</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:mx-0">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Taxi service illustration"
                width={600}
                height={400}
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Why Choose Us</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Features You'll Love</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We've designed our service with your needs in mind. Here's what makes ShareCab special.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-primary" />}
              title="Safety First"
              description="All our drivers are verified and our vehicles undergo regular safety checks."
            />
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-primary" />}
              title="Fast & Reliable"
              description="Book a ride in seconds and get picked up on time, every time."
            />
            <FeatureCard
              icon={<CreditCard className="h-10 w-10 text-primary" />}
              title="Subscription Savings"
              description="Save up to 30% with our flexible subscription plans for regular commuters."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-primary" />}
              title="Ride Sharing"
              description="Share your ride with others going the same way and split the cost."
            />
            <FeatureCard
              icon={<MapPin className="h-10 w-10 text-primary" />}
              title="Real-time Tracking"
              description="Track your ride in real-time and share your journey with loved ones."
            />
            <FeatureCard
              icon={<Star className="h-10 w-10 text-primary" />}
              title="Rewards Program"
              description="Earn points with every ride and redeem them for free rides and discounts."
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Customers Say</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it. Here's what our customers have to say about ShareCab.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <TestimonialCard
              quote="ShareCab has completely transformed my daily commute. The subscription plan saves me money, and the drivers are always professional."
              author="Sarah Johnson"
              role="Daily Commuter"
              rating={5}
            />
            <TestimonialCard
              quote="As a business traveler, I appreciate the reliability and comfort of ShareCab. The app is intuitive and booking is seamless."
              author="Michael Chen"
              role="Business Executive"
              rating={5}
            />
            <TestimonialCard
              quote="I've tried many ride-sharing services, but ShareCab stands out for its excellent customer service and clean vehicles."
              author="Emily Rodriguez"
              role="Weekend Traveler"
              rating={4}
            />
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Download Our App
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Take ShareCab Everywhere</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get the ShareCab app for a seamless experience. Book rides, track your driver, and manage your
                  subscription all from your smartphone.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="gap-2">
                  <Link href="#">
                    <Image src="/placeholder.svg?height=24&width=24" alt="App Store" width={24} height={24} />
                    App Store
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link href="#">
                    <Image src="/placeholder.svg?height=24&width=24" alt="Google Play" width={24} height={24} />
                    Google Play
                  </Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="ShareCab Mobile App"
                width={300}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
