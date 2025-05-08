"use client"

import { useEffect } from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useAuth } from "../../contexts/AuthContext"
import { SafeAreaView } from "react-native-safe-area-context"

const WelcomeScreen = () => {
  const navigation = useNavigation<any>()
  const { user } = useAuth()
  const translateY = new Animated.Value(0)
  const opacity = new Animated.Value(0)

  useEffect(() => {
    if (user) {
      navigation.replace("Main")
    }

    // Animation sequence
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(translateY, {
        toValue: -20,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start()
  }, [user])

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.content, { opacity, transform: [{ translateY }] }]}>
        <View style={styles.logoContainer}>
          <Image source={{ uri: "https://via.placeholder.com/150" }} style={styles.logo} resizeMode="contain" />
          <Text style={styles.title}>ShareCab</Text>
          <Text style={styles.subtitle}>Share rides, save money, reduce carbon footprint</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.primaryButton]} onPress={() => navigation.navigate("Login")}>
            <Text style={styles.buttonTextPrimary}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.buttonTextSecondary}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    padding: 24,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
    marginHorizontal: 20,
  },
  buttonContainer: {
    marginBottom: 40,
  },
  button: {
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 8,
  },
  primaryButton: {
    backgroundColor: "#6366F1",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#6366F1",
  },
  buttonTextPrimary: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  buttonTextSecondary: {
    color: "#6366F1",
    fontSize: 16,
    fontWeight: "600",
  },
})

export default WelcomeScreen
