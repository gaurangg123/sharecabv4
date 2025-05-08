"use client"

import { useState } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import DateTimePicker from "@react-native-community/datetimepicker"
import { useNavigation } from "@react-navigation/native"

const BookRideScreen = () => {
  const navigation = useNavigation<any>()
  const [pickup, setPickup] = useState("")
  const [destination, setDestination] = useState("")
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [showTimePicker, setShowTimePicker] = useState(false)
  const [passengers, setPassengers] = useState("1")

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false)
    if (selectedDate) {
      setDate(selectedDate)
    }
  }

  const handleTimeChange = (event: any, selectedTime?: Date) => {
    setShowTimePicker(false)
    if (selectedTime) {
      setTime(selectedTime)
    }
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const formatTime = (time: Date) => {
    return time.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }

  const handleBookRide = () => {
    if (!pickup || !destination) {
      Alert.alert("Error", "Please enter pickup and destination locations")
      return
    }

    // In a real app, this would send the booking to an API
    Alert.alert(
      "Ride Booked",
      `Your ride from ${pickup} to ${destination} has been booked for ${formatDate(date)} at ${formatTime(time)}.`,
      [
        {
          text: "View My Rides",
          onPress: () => navigation.navigate("My Rides"),
        },
        {
          text: "OK",
          style: "cancel",
        },
      ],
    )
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.formContainer}>
        <Text style={styles.sectionTitle}>Ride Details</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Pickup Location</Text>
          <View style={styles.inputWrapper}>
            <Ionicons name="location" size={20} color="#6366F1" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter pickup location"
              value={pickup}
              onChangeText={setPickup}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Destination</Text>
          <View style={styles.inputWrapper}>
            <Ionicons name="location" size={20} color="#F43F5E" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter destination"
              value={destination}
              onChangeText={setDestination}
            />
          </View>
        </View>

        <View style={styles.dateTimeContainer}>
          <View style={styles.dateContainer}>
            <Text style={styles.label}>Date</Text>
            <TouchableOpacity style={styles.dateTimeButton} onPress={() => setShowDatePicker(true)}>
              <Ionicons name="calendar" size={20} color="#6366F1" style={styles.inputIcon} />
              <Text style={styles.dateTimeText}>{formatDate(date)}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={handleDateChange}
                minimumDate={new Date()}
              />
            )}
          </View>

          <View style={styles.timeContainer}>
            <Text style={styles.label}>Time</Text>
            <TouchableOpacity style={styles.dateTimeButton} onPress={() => setShowTimePicker(true)}>
              <Ionicons name="time" size={20} color="#6366F1" style={styles.inputIcon} />
              <Text style={styles.dateTimeText}>{formatTime(time)}</Text>
            </TouchableOpacity>
            {showTimePicker && (
              <DateTimePicker value={time} mode="time" display="default" onChange={handleTimeChange} />
            )}
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Number of Passengers</Text>
          <View style={styles.passengerSelector}>
            <TouchableOpacity
              style={styles.passengerButton}
              onPress={() => setPassengers((prev) => Math.max(1, Number.parseInt(prev) - 1).toString())}
            >
              <Ionicons name="remove" size={20} color="#6366F1" />
            </TouchableOpacity>
            <TextInput
              style={styles.passengerInput}
              value={passengers}
              onChangeText={setPassengers}
              keyboardType="number-pad"
              textAlign="center"
            />
            <TouchableOpacity
              style={styles.passengerButton}
              onPress={() => setPassengers((prev) => Math.min(4, Number.parseInt(prev) + 1).toString())}
            >
              <Ionicons name="add" size={20} color="#6366F1" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.fareEstimate}>
        <Text style={styles.sectionTitle}>Fare Estimate</Text>
        <View style={styles.fareCard}>
          <View style={styles.fareRow}>
            <Text style={styles.fareLabel}>Base fare</Text>
            <Text style={styles.fareValue}>₹700</Text>
          </View>
          <View style={styles.fareRow}>
            <Text style={styles.fareLabel}>Distance (est. 5 miles)</Text>
            <Text style={styles.fareValue}>₹500</Text>
          </View>
          <View style={styles.fareRow}>
            <Text style={styles.fareLabel}>Service fee</Text>
            <Text style={styles.fareValue}>₹150</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.fareRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>₹1,350</Text>
          </View>
          <Text style={styles.fareNote}>
            *This is an estimate. Actual fare may vary based on traffic and other factors.
          </Text>
        </View>
      </View>

      <View style={styles.paymentMethod}>
        <Text style={styles.sectionTitle}>Payment Method</Text>
        <TouchableOpacity style={styles.paymentCard}>
          <Ionicons name="card" size={24} color="#6366F1" />
          <View style={styles.paymentDetails}>
            <Text style={styles.paymentTitle}>Credit Card</Text>
            <Text style={styles.paymentSubtitle}>**** **** **** 4321</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#666666" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.bookButton} onPress={handleBookRide}>
        <Text style={styles.bookButtonText}>Book Ride</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  formContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333333",
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  dateTimeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  dateContainer: {
    width: "48%",
  },
  timeContainer: {
    width: "48%",
  },
  dateTimeButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  dateTimeText: {
    fontSize: 14,
    color: "#333333",
  },
  passengerSelector: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  passengerButton: {
    padding: 8,
  },
  passengerInput: {
    width: 50,
    paddingVertical: 12,
    fontSize: 16,
  },
  fareEstimate: {
    marginBottom: 24,
  },
  fareCard: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 12,
    padding: 16,
  },
  fareRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  fareLabel: {
    fontSize: 14,
    color: "#666666",
  },
  fareValue: {
    fontSize: 14,
    color: "#333333",
    fontWeight: "500",
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 12,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333333",
  },
  totalValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6366F1",
  },
  fareNote: {
    fontSize: 12,
    color: "#666666",
    marginTop: 12,
    fontStyle: "italic",
  },
  paymentMethod: {
    marginBottom: 24,
  },
  paymentCard: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 12,
    padding: 16,
  },
  paymentDetails: {
    flex: 1,
    marginLeft: 12,
  },
  paymentTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333333",
  },
  paymentSubtitle: {
    fontSize: 12,
    color: "#666666",
  },
  bookButton: {
    backgroundColor: "#6366F1",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  bookButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
})

export default BookRideScreen
