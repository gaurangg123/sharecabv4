import Link from "next/link"
import { Car } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Car className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">ShareCab</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Making transportation accessible, affordable, and reliable for everyone.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Company</h3>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              About
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Careers
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Press
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Blog
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Services</h3>
            <Link href="/book-ride" className="text-sm text-muted-foreground hover:text-foreground">
              Book Ride
            </Link>
            <Link href="/plans" className="text-sm text-muted-foreground hover:text-foreground">
              Subscription Plans
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Business Accounts
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Airport Transfers
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Support</h3>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Help Center
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact Us
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Safety
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2025 ShareCab. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Facebook</span>
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
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Twitter</span>
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
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Instagram</span>
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
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
