import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"

type Trip = {
  id: string
  date: string
  from: string
  to: string
  price: string
  rating?: number
}

// Update the COMPLETED_TRIPS array to use Rupee symbol
const COMPLETED_TRIPS: Trip[] = [
  {
    id: "1",
    date: "May 5, 2025",
    from: "Central Park",
    to: "Times Square",
    price: "₹850",
    rating: 5,
  },
  {
    id: "2",
    date: "May 3, 2025",
    from: "Brooklyn Heights",
    to: "Manhattan Office",
    price: "₹1,050",
    rating: 4,
  },
  {
    id: "3",
    date: "April 28, 2025",
    from: "Airport Terminal",
    to: "Downtown Hotel",
    price: "₹1,500",
    rating: 5,
  },
  {
    id: "4",
    date: "April 25, 2025",
    from: "University Campus",
    to: "Public Library",
    price: "₹550",
    rating: 3,
  },
  {
    id: "5",
    date: "April 20, 2025",
    from: "Restaurant District",
    to: "Residential Area",
    price: "₹700",
  },
]

const CompletedTripsScreen = () => {
  const renderRatingStars = (rating?: number) => {
    if (!rating) return null

    return (
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Ionicons
            key={star}
            name={star <= rating ? "star" : "star-outline"}
            size={16}
            color={star <= rating ? "#FFD700" : "#e0e0e0"}
            style={styles.starIcon}
          />
        ))}
      </View>
    )
  }

  const renderTripItem = ({ item }: { item: Trip }) => (
    <TouchableOpacity style={styles.tripCard}>
      <View style={styles.tripHeader}>
        <Text style={styles.tripDate}>{item.date}</Text>
        <Text style={styles.tripPrice}>{item.price}</Text>
      </View>

      <View style={styles.tripRoute}>
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

      {renderRatingStars(item.rating)}

      <View style={styles.tripActions}>
        {!item.rating && (
          <TouchableOpacity style={styles.rateButton}>
            <Text style={styles.rateButtonText}>Rate Trip</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.viewButton}>
          <Text style={styles.viewButtonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )

  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Ionicons name="checkmark-circle-outline" size={64} color="#e0e0e0" />
      <Text style={styles.emptyText}>No completed trips yet</Text>
      <Text style={styles.emptySubtext}>Your completed trips will appear here</Text>
      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book a Ride</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={COMPLETED_TRIPS}
        renderItem={renderTripItem}
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
  listContainer: {
    padding: 16,
    paddingBottom: 40,
    flexGrow: 1,
  },
  tripCard: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  tripHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  tripDate: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333333",
  },
  tripPrice: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6366F1",
  },
  tripRoute: {
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
  ratingContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  starIcon: {
    marginRight: 4,
  },
  tripActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rateButton: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#6366F1",
    marginRight: 8,
  },
  rateButtonText: {
    color: "#6366F1",
    fontSize: 14,
    fontWeight: "500",
  },
  viewButton: {
    flex: 1,
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

export default CompletedTripsScreen
