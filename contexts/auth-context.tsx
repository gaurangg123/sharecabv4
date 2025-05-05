"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

type User = {
  id: string
  name: string
  email: string
  phone?: string
  profileImage?: string
  isSubscribed: boolean
  subscriptionTier?: "basic" | "premium" | "business"
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  loginWithOTP: (emailOrPhone: string, otp: string) => Promise<void>
  signup: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Check if user is logged in on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // In a real app, this would be an API call to verify the session
        const storedUser = localStorage.getItem("sharecab-user")
        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error("Authentication error:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Mock login - in a real app, this would be an API call
      const mockUser: User = {
        id: "user-123",
        name: "Rahul Sharma",
        email: email,
        phone: "+91 98765 43210",
        isSubscribed: true,
        subscriptionTier: "premium",
      }

      // Store user in localStorage for persistence
      localStorage.setItem("sharecab-user", JSON.stringify(mockUser))
      setUser(mockUser)
      router.push("/")
    } catch (error) {
      console.error("Login error:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const loginWithOTP = async (emailOrPhone: string, otp: string) => {
    setIsLoading(true)
    try {
      // Mock OTP login - in a real app, this would be an API call
      const mockUser: User = {
        id: "user-123",
        name: "Rahul Sharma",
        email: emailOrPhone.includes("@") ? emailOrPhone : "rahul.sharma@example.com",
        phone: emailOrPhone.includes("@") ? "+91 98765 43210" : emailOrPhone,
        isSubscribed: true,
        subscriptionTier: "premium",
      }

      localStorage.setItem("sharecab-user", JSON.stringify(mockUser))
      setUser(mockUser)
      router.push("/")
    } catch (error) {
      console.error("OTP login error:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true)
    try {
      // Mock signup - in a real app, this would be an API call
      const mockUser: User = {
        id: "user-123",
        name: name,
        email: email,
        isSubscribed: false,
      }

      localStorage.setItem("sharecab-user", JSON.stringify(mockUser))
      setUser(mockUser)
      router.push("/")
    } catch (error) {
      console.error("Signup error:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("sharecab-user")
    setUser(null)
    router.push("/login")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        loginWithOTP,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
