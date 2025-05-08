import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import HomeScreen from "../screens/main/HomeScreen"
import MyRidesScreen from "../screens/main/MyRidesScreen"
import BookRideScreen from "../screens/main/BookRideScreen"
import CompletedTripsScreen from "../screens/main/CompletedTripsScreen"
import ProfileScreen from "../screens/main/ProfileScreen"
import SubscriptionPlansScreen from "../screens/main/SubscriptionPlansScreen"

const Tab = createBottomTabNavigator()

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline"
          } else if (route.name === "My Rides") {
            iconName = focused ? "car" : "car-outline"
          } else if (route.name === "Book") {
            iconName = focused ? "add-circle" : "add-circle-outline"
          } else if (route.name === "Completed") {
            iconName = focused ? "checkmark-circle" : "checkmark-circle-outline"
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline"
          } else if (route.name === "Subscriptions") {
            iconName = focused ? "star" : "star-outline"
          }

          return <Ionicons name={iconName as any} size={size} color={color} />
        },
        tabBarActiveTintColor: "#6366F1",
        tabBarInactiveTintColor: "gray",
        headerShown: true,
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My Rides" component={MyRidesScreen} />
      <Tab.Screen name="Book" component={BookRideScreen} />
      <Tab.Screen name="Completed" component={CompletedTripsScreen} />
      <Tab.Screen name="Subscriptions" component={SubscriptionPlansScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#ffffff",
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  headerTitle: {
    fontWeight: "bold",
    color: "#333333",
  },
})

export default MainTabs
