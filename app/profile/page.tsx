import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { PaymentMethodCard } from "@/components/payment-method-card"

export const metadata = {
  title: "Profile - ShareCab",
  description: "Manage your ShareCab profile and account settings.",
}

export default function ProfilePage() {
  return (
    <div className="container px-4 md:px-6 py-12">
      <div className="flex flex-col items-start gap-4 md:gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>

        <div className="grid w-full gap-8 md:grid-cols-[240px_1fr]">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=120&width=120&text=RS"
                alt="Profile"
                width={120}
                height={120}
                className="rounded-full border-4 border-background"
              />
              <Button size="sm" variant="outline" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0">
                <span className="sr-only">Edit profile picture</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                  <path d="m15 5 4 4" />
                </svg>
              </Button>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold">Rahul Sharma</h2>
              <p className="text-sm text-muted-foreground">Premium Member</p>
            </div>
          </div>

          <div>
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="payment">Payment</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Update your personal details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" defaultValue="Rahul" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" defaultValue="Sharma" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="rahul.sharma@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone number</Label>
                      <Input id="phone" type="tel" defaultValue="+91 98765 43210" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Address</CardTitle>
                    <CardDescription>Update your address information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Street address</Label>
                      <Input id="address" defaultValue="B-12, Vasant Kunj" />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" defaultValue="New Delhi" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input id="state" defaultValue="Delhi" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip">PIN code</Label>
                        <Input id="zip" defaultValue="110070" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="payment" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Methods</CardTitle>
                    <CardDescription>Manage your payment methods</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <PaymentMethodCard type="visa" lastFour="4242" expiry="05/28" isDefault={true} />
                    <PaymentMethodCard type="mastercard" lastFour="5555" expiry="09/26" isDefault={false} />
                    <Button variant="outline" className="w-full">
                      Add Payment Method
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Billing History</CardTitle>
                    <CardDescription>View your recent billing history</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b pb-4">
                        <div>
                          <p className="font-medium">Premium Plan - Monthly</p>
                          <p className="text-sm text-muted-foreground">Apr 1, 2025</p>
                        </div>
                        <p className="font-medium">₹1,499</p>
                      </div>
                      <div className="flex items-center justify-between border-b pb-4">
                        <div>
                          <p className="font-medium">Premium Plan - Monthly</p>
                          <p className="text-sm text-muted-foreground">Mar 1, 2025</p>
                        </div>
                        <p className="font-medium">₹1,499</p>
                      </div>
                      <div className="flex items-center justify-between border-b pb-4">
                        <div>
                          <p className="font-medium">Premium Plan - Monthly</p>
                          <p className="text-sm text-muted-foreground">Feb 1, 2025</p>
                        </div>
                        <p className="font-medium">₹1,499</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">View All Transactions</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="preferences" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>Manage how you receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="ride-updates">Ride Updates</Label>
                        <p className="text-sm text-muted-foreground">Receive notifications about your rides</p>
                      </div>
                      <Switch id="ride-updates" defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="promotions">Promotions</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications about promotions and discounts
                        </p>
                      </div>
                      <Switch id="promotions" defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="account-updates">Account Updates</Label>
                        <p className="text-sm text-muted-foreground">Receive notifications about your account</p>
                      </div>
                      <Switch id="account-updates" defaultChecked />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save Preferences</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Ride Preferences</CardTitle>
                    <CardDescription>Set your default ride preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="quiet-rides">Quiet Rides</Label>
                        <p className="text-sm text-muted-foreground">Prefer minimal conversation during rides</p>
                      </div>
                      <Switch id="quiet-rides" />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="temperature">Temperature Preference</Label>
                        <p className="text-sm text-muted-foreground">Set your preferred temperature in the vehicle</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">Cool</span>
                        <Input id="temperature" type="range" className="w-24" />
                        <span className="text-sm">Warm</span>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="music">Music Preference</Label>
                        <p className="text-sm text-muted-foreground">Set your preferred music genre</p>
                      </div>
                      <select id="music" className="rounded-md border border-input bg-background px-3 py-1 text-sm">
                        <option>No preference</option>
                        <option>Bollywood</option>
                        <option>Classical</option>
                        <option>Punjabi</option>
                        <option>Rock</option>
                        <option>No music</option>
                      </select>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save Preferences</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                    <CardDescription>Update your password</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Update Password</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Two-Factor Authentication</CardTitle>
                    <CardDescription>Add an extra layer of security to your account</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="two-factor">Enable Two-Factor Authentication</Label>
                        <p className="text-sm text-muted-foreground">Receive a code via SMS when signing in</p>
                      </div>
                      <Switch id="two-factor" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save Settings</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
