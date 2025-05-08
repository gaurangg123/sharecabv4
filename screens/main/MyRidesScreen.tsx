"use client"

import { useState } from "react"
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"

type Ride = {
  id: string
  date: string
  time: string
  from: string
  to: string
  status: "upcoming" | "ongoing" | "cancelled"
  price: string
  passengers: number
}

const RIDES: Ride[] = [
  {
    id: "1",
    date: "Today",
    time: "5:30 PM",
    from: "Central Park",
    to: "Times Square",
    status: "upcoming",
    price: "₹850",
    passengers: 3,
  },
  {
    id: "2",
    date: "Tomorrow",
    time: "9:00 AM",
    from: "Brooklyn Heights",
    to: "Manhattan Office",
    status: "upcoming",
    price: "₹1,050",
    passengers: 2,
  },
  {
    id: "3",
    date: "May 10, 2025",
    time: "3:15 PM",
    from: "Airport Terminal",
    to: "Downtown Hotel",
    status: "upcoming",
    price: "₹1,500",
    passengers: 1,
  },
  {
    id: "4",
    date: "Today",
    time: "2:00 PM",
    from: "University Campus",
    to: "Public Library",
    status: "ongoing",
    price: "₹550",
    passengers: 4,
  },
  {
    id: "5",
    date: "Yesterday",
    time: "7:45 PM",
    from: "Restaurant District",
    to: "Residential Area",
    status: "cancelled",
    price: "₹700",
    passengers: 2,
  },
]

const MyRidesScreen = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "ongoing" | "cancelled">("upcoming")

  const filteredRides = RIDES.filter((ride) => ride.status === activeTab)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "#0070F3"
      case "ongoing":
        return "#10B981"
      case "cancelled":
        return "#F43F5E"
      default:
        return "#666666"
    }
  }

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "#E6F7FF"
      case "ongoing":
        return "#ECFDF5"
      case "cancelled":
        return "#FEE2E2"
      default:
        return "#f0f0f0"
    }
  }

  const renderRideItem = ({ item }: { item: Ride }) => (
    <TouchableOpacity style={styles.rideCard}>
      <View style={styles.rideHeader}>
        <Text style={styles.rideDate}>
          {item.date}, {item.time}
        </Text>
        <View style={[styles.rideStatus, { backgroundColor: getStatusBgColor(item.status) }]}>
          <Text style={[styles.rideStatusText, { color: getStatusColor(item.status) }]}>
            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
          </Text>
        </View>
      </View>

      <View style={styles.rideRoute}>
        <View style={styles.routePoint}>
          <View style={[styles.routeMarker, styles.startMarker]} />
          <Text style={styles.routeText}>{item.from}</Text>
        </View>
        <View style={styles.routeLine} />
        <View style={styles.routePoint}>
          <View style={[styles.routeMarker, styles.endMarker]} />
          <Text style={styles.routeText}>{item.to}</Text>
        </View>
      </View>

      <View style={styles.rideDetails}>
        <View style={styles.rideDetail}>
          <Ionicons name="people" size={16} color="#666666" />
          <Text style={styles.rideDetailText}>{item.passengers} co-passengers</Text>
        </View>
        <View style={styles.rideDetail}>
          <Ionicons name="cash" size={16} color="#666666" />
          <Text style={styles.rideDetailText}>{item.price}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.viewButton}>
        <Text style={styles.viewButtonText}>View Details</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )

  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Ionicons name="car-outline" size={64} color="#e0e0e0" />
      <Text style={styles.emptyText}>No {activeTab} rides found</Text>
      <Text style={styles.emptySubtext}>
        {activeTab === "upcoming"
          ? "Book a ride to see it here"
          : activeTab === "ongoing"
            ? "Your ongoing rides will appear here"
            : "Your cancelled rides will appear here"}
      </Text>
      {activeTab === "upcoming" && (
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book a Ride</Text>
        </TouchableOpacity>
      )}
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "upcoming" && styles.activeTab]}
          onPress={() => setActiveTab("upcoming")}
        >
          <Text style={[styles.tabText, activeTab === "upcoming" && styles.activeTabText]}>Upcoming</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "ongoing" && styles.activeTab]}
          onPress={() => setActiveTab("ongoing")}
        >
          <Text style={[styles.tabText, activeTab === "ongoing" && styles.activeTabText]}>Ongoing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "cancelled" && styles.activeTab]}
          onPress={() => setActiveTab("cancelled")}
        >
          <Text style={[styles.tabText, activeTab === "cancelled" && styles.activeTabText]}>Cancelled</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredRides}
        renderItem={renderRideItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={renderEmptyList}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  tabContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#6366F1",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666666",
  },
  activeTabText: {
    color: "#6366F1",
  },
  listContainer: {
    padding: 16,
    paddingBottom: 40,
    flexGrow: 1,
  },
  rideCard: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  rideHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  rideDate: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333333",
  },
  rideStatus: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  rideStatusText: {
    fontSize: 12,
    fontWeight: "500",
  },
  rideRoute: {
    marginBottom: 16,
  },
  routePoint: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  routeMarker: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  startMarker: {
    backgroundColor: "#6366F1",
  },
  endMarker: {
    backgroundColor: "#F43F5E",
  },
  routeText: {
    fontSize: 14,
    color: "#333333",
  },
  routeLine: {
    width: 1,
    height: 20,
    backgroundColor: "#e0e0e0",
    marginLeft: 6,
  },
  rideDetails: {
    flexDirection: "row",
    marginBottom: 16,
  },
  rideDetail: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },
  rideDetailText: {
    fontSize: 12,
    color: "#666666",
    marginLeft: 4,
  },
  viewButton: {
    backgroundColor: "#6366F1",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  viewButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "500",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333333",
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: "#666666",
    textAlign: "center",
    marginBottom: 24,
  },
  bookButton: {
    backgroundColor: "#6366F1",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  bookButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "500",
  },
})

export default MyRidesScreen
