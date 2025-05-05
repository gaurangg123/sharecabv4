"use client"

import { useState } from "react"
import { CreditCard, Wallet, Plus, Check } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type PaymentMethod = {
  id: string
  type: "card" | "upi" | "cash"
  name: string
  details: string
  isDefault?: boolean
}

export function PaymentMethods({ onSelect }: { onSelect: (method: PaymentMethod) => void }) {
  const [selectedMethod, setSelectedMethod] = useState<string>("upi-1")
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: "card-1",
      type: "card",
      name: "HDFC Credit Card",
      details: "•••• 4242",
      isDefault: false,
    },
    {
      id: "upi-1",
      type: "upi",
      name: "Google Pay",
      details: "user@okicici",
      isDefault: true,
    },
    {
      id: "upi-2",
      type: "upi",
      name: "PhonePe",
      details: "9876543210@ybl",
      isDefault: false,
    },
    {
      id: "cash",
      type: "cash",
      name: "Cash",
      details: "Pay with cash",
      isDefault: false,
    },
  ])

  const handleSelectMethod = (id: string) => {
    setSelectedMethod(id)
    const method = paymentMethods.find((m) => m.id === id)
    if (method) {
      onSelect(method)
    }
  }

  const getMethodIcon = (type: string) => {
    switch (type) {
      case "card":
        return <CreditCard className="h-4 w-4" />
      case "upi":
      case "cash":
      default:
        return <Wallet className="h-4 w-4" />
    }
  }

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between py-4">
        <h3 className="text-sm font-medium">Payment Method</h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="sm" className="h-8 gap-1">
              <Plus className="h-3 w-3" />
              Add
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Payment Method</DialogTitle>
            </DialogHeader>
            <Tabs defaultValue="card">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="card">Card</TabsTrigger>
                <TabsTrigger value="upi">UPI</TabsTrigger>
                <TabsTrigger value="wallet">Wallet</TabsTrigger>
              </TabsList>
              <TabsContent value="card" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input id="card-number" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Name on Card</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <Button className="w-full">Add Card</Button>
              </TabsContent>
              <TabsContent value="upi" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="upi-id">UPI ID</Label>
                  <Input id="upi-id" placeholder="yourname@bank" />
                </div>
                <Button className="w-full">Verify & Add</Button>
              </TabsContent>
              <TabsContent value="wallet" className="space-y-4 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <img src="/placeholder.svg?height=24&width=24" alt="Paytm" className="h-6 w-6" />
                    <span>Paytm</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <img src="/placeholder.svg?height=24&width=24" alt="Amazon Pay" className="h-6 w-6" />
                    <span>Amazon Pay</span>
                  </Button>
                </div>
                <Button className="w-full">Continue</Button>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedMethod} onValueChange={handleSelectMethod} className="space-y-2">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className={`flex items-center space-x-2 rounded-lg border p-3 cursor-pointer hover:bg-muted/50 ${
                method.isDefault ? "border-primary" : ""
              }`}
            >
              <RadioGroupItem value={method.id} id={method.id} />
              <Label htmlFor={method.id} className="flex flex-1 cursor-pointer items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">{getMethodIcon(method.type)}</div>
                  <div>
                    <p className="font-medium text-sm">{method.name}</p>
                    <p className="text-xs text-muted-foreground">{method.details}</p>
                  </div>
                </div>
                {method.isDefault && (
                  <div className="flex items-center text-xs text-primary">
                    <Check className="h-3 w-3 mr-1" />
                    Default
                  </div>
                )}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  )
}
