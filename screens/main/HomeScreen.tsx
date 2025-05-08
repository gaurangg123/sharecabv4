"use client"

import { useEffect, useRef } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Ionicons } from "@expo/vector-icons"
import { useAuth } from "../../contexts/AuthContext"

const { width } = Dimensions.get("window")

const HomeScreen = () => {
  const navigation = useNavigation<any>()
  const { user } = useAuth()
  const animatedValue = useRef(new Animated.Value(0)).current

  // Animation for the car moving from point A to B
  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }),
    ).start()
  }, [])

  const carPosition = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, width - 100],
  })

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, {user?.name || "User"}</Text>
        <Text style={styles.subGreeting}>Where would you like to go today?</Text>
      </View>

      <View style={styles.animationContainer}>
        <View style={styles.roadLine} />
        <Animated.View style={[styles.car, { transform: [{ translateX: carPosition }] }]}>
          <Ionicons name="car" size={32} color="#6366F1" />
        </Animated.View>
        <View style={styles.locationMarkers}>
          <View style={styles.locationMarker}>
            <Ionicons name="location" size={24} color="#6366F1" />
            <Text style={styles.locationText}>Point A</Text>
          </View>
          <View style={styles.locationMarker}>
            <Ionicons name="location" size={24} color="#6366F1" />
            <Text style={styles.locationText}>Point B</Text>
          </View>
        </View>
      </View>

      <View style={styles.quickActions}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate("Book")}>
            <View style={styles.actionIcon}>
              <Ionicons name="add-circle" size={28} color="#6366F1" />
            </View>
            <Text style={styles.actionText}>Book a Ride</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate("My Rides")}>
            <View style={styles.actionIcon}>
              <Ionicons name="car" size={28} color="#6366F1" />
            </View>
            <Text style={styles.actionText}>My Rides</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate("Completed")}>
            <View style={styles.actionIcon}>
              <Ionicons name="checkmark-circle" size={28} color="#6366F1" />
            </View>
            <Text style={styles.actionText}>Completed</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.upcomingRides}>
        <Text style={styles.sectionTitle}>Upcoming Rides</Text>

        <View style={styles.rideCard}>
          <View style={styles.rideHeader}>
            <Text style={styles.rideDate}>Today, 5:30 PM</Text>
            <View style={styles.rideStatus}>
              <Text style={styles.rideStatusText}>Confirmed</Text>
            </View>
          </View>

          <View style={styles.rideRoute}>
            <View style={styles.routePoint}>
              <View style={[styles.routeMarker, styles.startMarker]} />
              <Text style={styles.routeText}>Central Park</Text>
            </View>
            <View style={styles.routeLine} />
            <View style={styles.routePoint}>
              <View style={[styles.routeMarker, styles.endMarker]} />
              <Text style={styles.routeText}>Times Square</Text>
            </View>
          </View>

          <View style={styles.rideDetails}>
            <View style={styles.rideDetail}>
              <Ionicons name="people" size={16} color="#666666" />
              <Text style={styles.rideDetailText}>3 co-passengers</Text>
            </View>
            <View style={styles.rideDetail}>
              <Ionicons name="cash" size={16} color="#666666" />
              <Text style={styles.rideDetailText}>₹850</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.viewButton}>
            <Text style={styles.viewButtonText}>View Details</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See All Rides</Text>
          <Ionicons name="chevron-forward" size={16} color="#6366F1" />
        </TouchableOpacity>
      </View>

      <View style={styles.popularRoutes}>
        <Text style={styles.sectionTitle}>Popular Routes</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.routesScroll}>
          <View style={styles.popularRouteCard}>
            <View style={styles.popularRouteHeader}>
              <Ionicons name="star" size={16} color="#FFD700" />
              <Text style={styles.popularRouteHeaderText}>Most Popular</Text>
            </View>
            <View style={styles.popularRouteContent}>
              <Text style={styles.popularRouteTitle}>Downtown to Airport</Text>
              <View style={styles.popularRouteStats}>
                <View style={styles.popularRouteStat}>
                  <Ionicons name="people" size={14} color="#666666" />
                  <Text style={styles.popularRouteStatText}>12 rides today</Text>
                </View>
                <View style={styles.popularRouteStat}>
                  <Ionicons name="cash" size={14} color="#666666" />
                  <Text style={styles.popularRouteStatText}>Avg ₹1,050</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.popularRouteCard}>
            <View style={styles.popularRouteContent}>
              <Text style={styles.popularRouteTitle}>University to Mall</Text>
              <View style={styles.popularRouteStats}>
                <View style={styles.popularRouteStat}>
                  <Ionicons name="people" size={14} color="#666666" />
                  <Text style={styles.popularRouteStatText}>8 rides today</Text>
                </View>
                <View style={styles.popularRouteStat}>
                  <Ionicons name="cash" size={14} color="#666666" />
                  <Text style={styles.popularRouteStatText}>Avg ₹650</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.popularRouteCard}>
            <View style={styles.popularRouteContent}>
              <Text style={styles.popularRouteTitle}>Suburb to City Center</Text>
              <View style={styles.popularRouteStats}>
                <View style={styles.popularRouteStat}>
                  <Ionicons name="people" size={14} color="#666666" />
                  <Text style={styles.popularRouteStatText}>5 rides today</Text>
                </View>
                <View style={styles.popularRouteStat}>
                  <Ionicons name="cash" size={14} color="#666666" />
                  <Text style={styles.popularRouteStatText}>Avg ₹825</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    padding: 20,
    paddingTop: 10,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
  },
  subGreeting: {
    fontSize: 16,
    color: "#666666",
    marginTop: 4,
  },
  animationContainer: {
    height: 120,
    marginHorizontal: 20,
    marginBottom: 20,
    position: "relative",
  },
  roadLine: {
    height: 2,
    backgroundColor: "#e0e0e0",
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
  },
  car: {
    position: "absolute",
    top: 45,
  },
  locationMarkers: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  locationMarker: {
    alignItems: "center",
  },
  locationText: {
    fontSize: 12,
    color: "#666666",
    marginTop: 4,
  },
  quickActions: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 16,
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    alignItems: "center",
    width: "30%",
  },
  actionIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  actionText: {
    fontSize: 14,
    color: "#333333",
    textAlign: "center",
  },
  upcomingRides: {
    padding: 20,
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
    backgroundColor: "#E6F7FF",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  rideStatusText: {
    fontSize: 12,
    color: "#0070F3",
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
  seeAllButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  seeAllText: {
    color: "#6366F1",
    fontSize: 14,
    fontWeight: "500",
    marginRight: 4,
  },
  popularRoutes: {
    padding: 20,
    paddingBottom: 40,
  },
  routesScroll: {
    marginLeft: -5,
  },
  popularRouteCard: {
    width: 200,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 12,
    marginLeft: 5,
    marginRight: 10,
    overflow: "hidden",
  },
  popularRouteHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF9E6",
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  popularRouteHeaderText: {
    fontSize: 12,
    color: "#B59000",
    fontWeight: "500",
    marginLeft: 4,
  },
  popularRouteContent: {
    padding: 12,
  },
  popularRouteTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333333",
    marginBottom: 8,
  },
  popularRouteStats: {
    flexDirection: "column",
    gap: 4,
  },
  popularRouteStat: {
    flexDirection: "row",
    alignItems: "center",
  },
  popularRouteStatText: {
    fontSize: 12,
    color: "#666666",
    marginLeft: 4,
  },
})

export default HomeScreen
