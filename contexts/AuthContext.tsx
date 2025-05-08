"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import * as Google from "expo-auth-session/providers/google"
import * as WebBrowser from "expo-web-browser"

WebBrowser.maybeCompleteAuthSession()

type User = {
  id: string
  name: string
  email: string
  phone?: string
  authMethod?: "email" | "google" | "microsoft"
  is2FAEnabled?: boolean
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<{ requireOTP: boolean }>
  signUp: (name: string, email: string, password: string) => Promise<{ requireOTP: boolean }>
  verifyOTP: (otp: string) => Promise<void>
  signInWithGoogle: () => Promise<void>
  enable2FA: () => Promise<void>
  disable2FA: () => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  signIn: async () => ({ requireOTP: false }),
  signUp: async () => ({ requireOTP: false }),
  verifyOTP: async () => {},
  signInWithGoogle: async () => {},
  enable2FA: async () => {},
  disable2FA: async () => {},
  signOut: async () => {},
})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [pendingUser, setPendingUser] = useState<User | null>(null)

  // Google Auth setup
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "YOUR_EXPO_CLIENT_ID",
    iosClientId: "YOUR_IOS_CLIENT_ID",
    androidClientId: "YOUR_ANDROID_CLIENT_ID",
    webClientId: "YOUR_WEB_CLIENT_ID",
  })

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response
      // Handle Google sign-in success
      handleGoogleSignIn(authentication?.accessToken)
    }
  }, [response])

  useEffect(() => {
    // Check if user is logged in
    const loadUser = async () => {
      try {
        const userString = await AsyncStorage.getItem("user")
        if (userString) {
          setUser(JSON.parse(userString))
        }
      } catch (error) {
        console.error("Failed to load user from storage", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadUser()
  }, [])

  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true)
      // In a real app, you would make an API call to authenticate
      // For demo purposes, we'll simulate a successful login
      const mockUser = {
        id: "123",
        name: "John Doe",
        email: email,
        phone: "+91 9876543210",
        authMethod: "email" as const,
        is2FAEnabled: true, // Assuming 2FA is enabled for this user
      }

      // If 2FA is enabled, we don't set the user yet, but store it as pending
      if (mockUser.is2FAEnabled) {
        setPendingUser(mockUser)
        return { requireOTP: true }
      }

      // If 2FA is not enabled, we set the user directly
      await AsyncStorage.setItem("user", JSON.stringify(mockUser))
      setUser(mockUser)
      return { requireOTP: false }
    } catch (error) {
      console.error("Sign in failed", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signUp = async (name: string, email: string, password: string) => {
    try {
      setIsLoading(true)
      // In a real app, you would make an API call to register
      // For demo purposes, we'll simulate a successful registration with 2FA
      const mockUser = {
        id: "123",
        name: name,
        email: email,
        authMethod: "email" as const,
        is2FAEnabled: false, // New users don't have 2FA enabled by default
      }

      // For signup, we'll always require OTP verification
      setPendingUser(mockUser)
      return { requireOTP: true }
    } catch (error) {
      console.error("Sign up failed", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const verifyOTP = async (otp: string) => {
    try {
      setIsLoading(true)
      // In a real app, you would verify the OTP with your backend
      // For demo purposes, we'll accept any OTP

      if (!pendingUser) {
        throw new Error("No pending user to verify")
      }

      // OTP is verified, set the user
      await AsyncStorage.setItem("user", JSON.stringify(pendingUser))
      setUser(pendingUser)
      setPendingUser(null)
    } catch (error) {
      console.error("OTP verification failed", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignIn = async (accessToken?: string) => {
    try {
      setIsLoading(true)

      if (!accessToken) {
        throw new Error("No access token provided")
      }

      // In a real app, you would validate the token with your backend
      // For demo purposes, we'll simulate a successful Google sign-in
      const mockUser = {
        id: "456",
        name: "Google User",
        email: "google.user@example.com",
        authMethod: "google" as const,
        is2FAEnabled: false,
      }

      await AsyncStorage.setItem("user", JSON.stringify(mockUser))
      setUser(mockUser)
    } catch (error) {
      console.error("Google sign in failed", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signInWithGoogle = async () => {
    try {
      await promptAsync()
    } catch (error) {
      console.error("Google sign in prompt failed", error)
      throw error
    }
  }

  const enable2FA = async () => {
    try {
      setIsLoading(true)

      if (!user) {
        throw new Error("No user logged in")
      }

      // In a real app, you would make an API call to enable 2FA
      // For demo purposes, we'll just update the user object
      const updated2FAUser = {
        ...user,
        is2FAEnabled: true,
      }

      await AsyncStorage.setItem("user", JSON.stringify(updated2FAUser))
      setUser(updated2FAUser)
    } catch (error) {
      console.error("Enable 2FA failed", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const disable2FA = async () => {
    try {
      setIsLoading(true)

      if (!user) {
        throw new Error("No user logged in")
      }

      // In a real app, you would make an API call to disable 2FA
      // For demo purposes, we'll just update the user object
      const updated2FAUser = {
        ...user,
        is2FAEnabled: false,
      }

      await AsyncStorage.setItem("user", JSON.stringify(updated2FAUser))
      setUser(updated2FAUser)
    } catch (error) {
      console.error("Disable 2FA failed", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signOut = async () => {
    try {
      setIsLoading(true)
      await AsyncStorage.removeItem("user")
      setUser(null)
    } catch (error) {
      console.error("Sign out failed", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        signIn,
        signUp,
        verifyOTP,
        signInWithGoogle,
        enable2FA,
        disable2FA,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
