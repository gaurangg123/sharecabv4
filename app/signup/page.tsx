import Link from "next/link"
import { Car } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EmailSignupForm } from "@/components/email-signup-form"
import { PhoneSignupForm } from "@/components/phone-signup-form"
import { SocialLoginButtons } from "@/components/social-login-buttons"

export const metadata = {
  title: "Sign Up - ShareCab",
  description: "Create a new ShareCab account",
}

export default function SignupPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <Link href="/" className="flex items-center gap-2">
            <Car className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">ShareCab</span>
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
          <p className="text-sm text-muted-foreground">Sign up to get started with ShareCab</p>
        </div>

        <Card className="w-full">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-xl">Sign Up</CardTitle>
            <CardDescription>Choose your preferred signup method</CardDescription>
          </CardHeader>
          <CardContent className="pb-4">
            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="phone">Phone</TabsTrigger>
              </TabsList>
              <TabsContent value="email">
                <EmailSignupForm />
              </TabsContent>
              <TabsContent value="phone">
                <PhoneSignupForm />
              </TabsContent>
            </Tabs>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <SocialLoginButtons />
          </CardContent>
          <CardFooter className="flex flex-col gap-4 pt-0">
            <div className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="underline underline-offset-4 hover:text-primary">
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
