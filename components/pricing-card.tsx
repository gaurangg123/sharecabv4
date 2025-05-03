import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant: "default" | "outline"
  highlighted?: boolean
}

export function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  buttonVariant,
  highlighted = false,
}: PricingCardProps) {
  return (
    <Card className={`h-full flex flex-col ${highlighted ? "border-primary shadow-lg" : ""}`}>
      {highlighted && (
        <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">Most Popular</div>
      )}
      <CardHeader className={highlighted ? "pt-4" : ""}>
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="grid gap-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant={buttonVariant} className="w-full">
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  )
}
