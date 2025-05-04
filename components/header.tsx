"use client"

import { useState } from "react"
import Link from "next/link"
import { Car, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

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
          <div className="hidden sm:flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium">
              Login
            </Link>
            <Button asChild size="sm">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b py-4">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <Car className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold">ShareCab</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-4 py-6">
                  <Link
                    href="/"
                    className="text-base font-medium transition-colors hover:text-primary px-2 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/book-ride"
                    className="text-base font-medium transition-colors hover:text-primary px-2 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Ride
                  </Link>
                  <Link
                    href="/my-rides"
                    className="text-base font-medium transition-colors hover:text-primary px-2 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    My Rides
                  </Link>
                  <Link
                    href="/plans"
                    className="text-base font-medium transition-colors hover:text-primary px-2 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Plans
                  </Link>
                  <Link
                    href="/profile"
                    className="text-base font-medium transition-colors hover:text-primary px-2 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Profile
                  </Link>
                </nav>
                <div className="mt-auto border-t py-6 flex flex-col gap-4">
                  <Link
                    href="/login"
                    className="text-base font-medium transition-colors hover:text-primary px-2 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Button asChild className="w-full" onClick={() => setIsOpen(false)}>
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
