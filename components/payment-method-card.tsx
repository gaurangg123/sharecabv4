import { CreditCard, Check, MoreVertical } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface PaymentMethodCardProps {
  type: "visa" | "mastercard" | "amex" | "discover"
  lastFour: string
  expiry: string
  isDefault: boolean
}

export function PaymentMethodCard({ type, lastFour, expiry, isDefault }: PaymentMethodCardProps) {
  return (
    <Card>
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 p-2 rounded-full">
            <CreditCard className="h-5 w-5 text-primary" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="font-medium capitalize">{type}</p>
              <p className="text-sm text-muted-foreground">•••• {lastFour}</p>
            </div>
            <p className="text-sm text-muted-foreground">Expires {expiry}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {isDefault && (
            <div className="flex items-center gap-1 bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
              <Check className="h-3 w-3" />
              Default
            </div>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
                <span className="sr-only">More options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {!isDefault && <DropdownMenuItem>Set as default</DropdownMenuItem>}
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">Remove</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  )
}
