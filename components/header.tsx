"use client"

import { useState } from "react"
import Link from "next/link"
import { Car, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggleEnhanced } from "@/components/theme-toggle-enhanced"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAuth } from "@/contexts/auth-context"
import { NotificationsPanel } from "@/components/notifications-panel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, isAuthenticated, logout } = useAuth()

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
            {isAuthenticated && (
              <Link href="/profile" className="text-sm font-medium transition-colors hover:text-primary">
                Profile
              </Link>
            )}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggleEnhanced />

          {isAuthenticated && <NotificationsPanel />}

          <div className="hidden sm:flex items-center gap-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={user?.profileImage || `/placeholder.svg?height=32&width=32&text=${user?.name.charAt(0)}`}
                        alt={user?.name}
                      />
                      <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">{user?.name}</p>
                      <p className="w-[200px] truncate text-sm text-muted-foreground">{user?.email}</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/my-rides">My Rides</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/plans">Subscription</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link href="/login" className="text-sm font-medium">
                  Login
                </Link>
                <Button asChild size="sm">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </>
            )}
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
                  {isAuthenticated && (
                    <Link
                      href="/profile"
                      className="text-base font-medium transition-colors hover:text-primary px-2 py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      Profile
                    </Link>
                  )}
                </nav>
                <div className="mt-auto border-t py-6 flex flex-col gap-4">
                  {isAuthenticated ? (
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 px-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={
                              user?.profileImage || `/placeholder.svg?height=32&width=32&text=${user?.name.charAt(0)}`
                            }
                            alt={user?.name}
                          />
                          <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{user?.name}</p>
                          <p className="text-xs text-muted-foreground">{user?.email}</p>
                        </div>
                      </div>
                      <Button variant="outline" onClick={logout} className="mt-2">
                        Log out
                      </Button>
                    </div>
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
