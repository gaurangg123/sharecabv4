import Link from "next/link"
import { Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Car className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">ShareCab</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/book-ride" className="text-sm font-medium transition-colors hover:text-primary">
              Book Ride
            </Link>
            <Link href="/my-rides" className="text-sm font-medium transition-colors hover:text-primary">
              My Rides
            </Link>
            <Link href="/plans" className="text-sm font-medium transition-colors hover:text-primary">
              Plans
            </Link>
            <Link href="/profile" className="text-sm font-medium transition-colors hover:text-primary">
              Profile
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/login" className="text-sm font-medium hidden sm:block">
            Login
          </Link>
          <Button asChild size="sm">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
