import { PricingCard } from "@/components/pricing-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check } from "lucide-react"

export const metadata = {
  title: "Subscription Plans - ShareCab",
  description: "Choose a subscription plan that works for your commuting needs.",
}

export default function PlansPage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-center gap-4 md:gap-8 text-center">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Choose Your Plan</h1>
          <p className="text-muted-foreground md:text-xl max-w-[700px]">
            Select a subscription plan that works for your commuting needs and budget.
          </p>
        </div>

        <Tabs defaultValue="monthly" className="w-full max-w-5xl">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="annual">Annual (Save 20%)</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly" className="space-y-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <PricingCard
                title="Basic"
                price="₹499"
                description="Perfect for occasional riders"
                features={["5 rides per month", "Standard vehicles", "Peak hour availability", "24/7 support"]}
                buttonText="Get Started"
                buttonVariant="outline"
              />
              <PricingCard
                title="Premium"
                price="₹1,499"
                description="Ideal for regular commuters"
                features={[
                  "20 rides per month",
                  "Premium vehicles",
                  "Priority booking",
                  "24/7 support",
                  "Ride sharing option",
                ]}
                buttonText="Get Started"
                buttonVariant="default"
                highlighted={true}
              />
              <PricingCard
                title="Business"
                price="₹2,999"
                description="For business professionals"
                features={[
                  "Unlimited rides",
                  "Luxury vehicles",
                  "Dedicated driver",
                  "24/7 priority support",
                  "Expense management",
                  "Team accounts",
                ]}
                buttonText="Contact Sales"
                buttonVariant="outline"
              />
            </div>

            <div className="mt-12 border rounded-lg p-6 bg-muted/30 text-left">
              <h3 className="text-xl font-semibold mb-4">All Plans Include</h3>
              <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>No surge pricing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Cancel anytime</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Vetted drivers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>24/7 customer support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Ride tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Rewards program</span>
                </li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="annual" className="space-y-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <PricingCard
                title="Basic"
                price="₹4,790"
                description="Perfect for occasional riders"
                features={["5 rides per month", "Standard vehicles", "Peak hour availability", "24/7 support"]}
                buttonText="Get Started"
                buttonVariant="outline"
              />
              <PricingCard
                title="Premium"
                price="₹14,390"
                description="Ideal for regular commuters"
                features={[
                  "20 rides per month",
                  "Premium vehicles",
                  "Priority booking",
                  "24/7 support",
                  "Ride sharing option",
                ]}
                buttonText="Get Started"
                buttonVariant="default"
                highlighted={true}
              />
              <PricingCard
                title="Business"
                price="₹28,790"
                description="For business professionals"
                features={[
                  "Unlimited rides",
                  "Luxury vehicles",
                  "Dedicated driver",
                  "24/7 priority support",
                  "Expense management",
                  "Team accounts",
                ]}
                buttonText="Contact Sales"
                buttonVariant="outline"
              />
            </div>

            <div className="mt-12 border rounded-lg p-6 bg-muted/30 text-left">
              <h3 className="text-xl font-semibold mb-4">All Plans Include</h3>
              <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>No surge pricing</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Cancel anytime</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Vetted drivers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>24/7 customer support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Ride tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Rewards program</span>
                </li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
