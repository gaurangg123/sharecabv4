"use client"

import { useState, useRef, useEffect } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Ionicons } from "@expo/vector-icons"
import { useAuth } from "../../contexts/AuthContext"
import { SafeAreaView } from "react-native-safe-area-context"

const OTPVerificationScreen = ({ route }: any) => {
  const navigation = useNavigation<any>()
  const { verifyOTP, isLoading } = useAuth()
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [timer, setTimer] = useState(30)
  const [canResend, setCanResend] = useState(false)
  const inputRefs = useRef<Array<TextInput | null>>([])
  const { email } = route.params || { email: "your email" }

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1)
      }, 1000)
      return () => clearInterval(interval)
    } else {
      setCanResend(true)
    }
  }, [timer])

  const handleOtpChange = (value: string, index: number) => {
    if (value.length > 1) {
      value = value[0]
    }

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyPress = (e: any, index: number) => {
    // Handle backspace
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleVerify = async () => {
    const otpString = otp.join("")
    if (otpString.length !== 6) {
      Alert.alert("Error", "Please enter a valid 6-digit OTP")
      return
    }

    try {
      await verifyOTP(otpString)
      navigation.replace("Main")
    } catch (error) {
      Alert.alert("Verification Failed", "The OTP you entered is incorrect. Please try again.")
    }
  }

  const handleResendOTP = () => {
    // In a real app, you would call an API to resend the OTP
    Alert.alert("OTP Sent", `A new OTP has been sent to ${email}`)
    setTimer(30)
    setCanResend(false)
    setOtp(["", "", "", "", "", ""])
    inputRefs.current[0]?.focus()
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#333333" />
      </TouchableOpacity>

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Verification</Text>
          <Text style={styles.subtitle}>We've sent a 6-digit verification code to {email}</Text>
        </View>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={styles.otpInput}
              value={digit}
              onChangeText={(value) => handleOtpChange(value, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              keyboardType="number-pad"
              maxLength={1}
              autoFocus={index === 0}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.verifyButton} onPress={handleVerify} disabled={isLoading}>
          {isLoading ? <ActivityIndicator color="#ffffff" /> : <Text style={styles.verifyButtonText}>Verify</Text>}
        </TouchableOpacity>

        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Didn't receive the code? </Text>
          {canResend ? (
            <TouchableOpacity onPress={handleResendOTP}>
              <Text style={styles.resendButton}>Resend</Text>
            </TouchableOpacity>
          ) : (
            <Text style={styles.timerText}>Resend in {timer}s</Text>
          )}
        </View>

        <View style={styles.alternativeContainer}>
          <Text style={styles.alternativeText}>Or verify using</Text>
          <TouchableOpacity style={styles.authenticatorButton}>
            <Ionicons name="shield-checkmark-outline" size={20} color="#6366F1" style={styles.authenticatorIcon} />
            <Text style={styles.authenticatorText}>Microsoft Authenticator</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  backButton: {
    padding: 16,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  header: {
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666666",
    lineHeight: 22,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  otpInput: {
    width: 45,
    height: 55,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  verifyButton: {
    backgroundColor: "#6366F1",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 24,
  },
  verifyButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  resendContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
  },
  resendText: {
    color: "#666666",
    fontSize: 14,
  },
  resendButton: {
    color: "#6366F1",
    fontSize: 14,
    fontWeight: "500",
  },
  timerText: {
    color: "#999999",
    fontSize: 14,
  },
  alternativeContainer: {
    alignItems: "center",
  },
  alternativeText: {
    color: "#666666",
    fontSize: 14,
    marginBottom: 16,
  },
  authenticatorButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#6366F1",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  authenticatorIcon: {
    marginRight: 8,
  },
  authenticatorText: {
    color: "#6366F1",
    fontSize: 14,
    fontWeight: "500",
  },
})

export default OTPVerificationScreen
