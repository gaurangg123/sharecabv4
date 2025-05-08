"use client"
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useAuth } from "../../contexts/AuthContext"
import { useNavigation } from "@react-navigation/native"

const ProfileScreen = () => {
  const navigation = useNavigation<any>()
  const { user, signOut } = useAuth()

  const handleSignOut = async () => {
    try {
      await signOut()
      navigation.replace("Auth")
    } catch (error) {
      Alert.alert("Error", "Failed to sign out")
    }
  }

  const handleEditProfile = () => {
    Alert.alert("Edit Profile", "This feature is coming soon!")
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.profileHeader}>
        <View style={styles.profileImageContainer}>
          <Image source={{ uri: "https://via.placeholder.com/150" }} style={styles.profileImage} />
          <TouchableOpacity style={styles.editImageButton}>
            <Ionicons name="camera" size={20} color="#ffffff" />
          </TouchableOpacity>
        </View>

        <Text style={styles.profileName}>{user?.name || "User"}</Text>
        <Text style={styles.profileEmail}>{user?.email || "user@example.com"}</Text>

        <TouchableOpacity style={styles.editProfileButton} onPress={handleEditProfile}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>Rides</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>₹9,850</Text>
          <Text style={styles.statLabel}>Saved</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statValue}>4.8</Text>
          <Text style={styles.statLabel}>Rating</Text>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Account</Text>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIconContainer}>
            <Ionicons name="person" size={20} color="#6366F1" />
          </View>
          <Text style={styles.menuItemText}>Personal Information</Text>
          <Ionicons name="chevron-forward" size={20} color="#666666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIconContainer}>
            <Ionicons name="card" size={20} color="#6366F1" />
          </View>
          <Text style={styles.menuItemText}>Payment Methods</Text>
          <Ionicons name="chevron-forward" size={20} color="#666666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIconContainer}>
            <Ionicons name="location" size={20} color="#6366F1" />
          </View>
          <Text style={styles.menuItemText}>Saved Addresses</Text>
          <Ionicons name="chevron-forward" size={20} color="#666666" />
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Preferences</Text>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIconContainer}>
            <Ionicons name="notifications" size={20} color="#6366F1" />
          </View>
          <Text style={styles.menuItemText}>Notifications</Text>
          <Ionicons name="chevron-forward" size={20} color="#666666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIconContainer}>
            <Ionicons name="globe" size={20} color="#6366F1" />
          </View>
          <Text style={styles.menuItemText}>Language</Text>
          <Ionicons name="chevron-forward" size={20} color="#666666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIconContainer}>
            <Ionicons name="moon" size={20} color="#6366F1" />
          </View>
          <Text style={styles.menuItemText}>Dark Mode</Text>
          <Ionicons name="chevron-forward" size={20} color="#666666" />
        </TouchableOpacity>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Support</Text>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIconContainer}>
            <Ionicons name="help-circle" size={20} color="#6366F1" />
          </View>
          <Text style={styles.menuItemText}>Help Center</Text>
          <Ionicons name="chevron-forward" size={20} color="#666666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIconContainer}>
            <Ionicons name="chatbubble-ellipses" size={20} color="#6366F1" />
          </View>
          <Text style={styles.menuItemText}>Contact Support</Text>
          <Ionicons name="chevron-forward" size={20} color="#666666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuIconContainer}>
            <Ionicons name="document-text" size={20} color="#6366F1" />
          </View>
          <Text style={styles.menuItemText}>Terms & Privacy Policy</Text>
          <Ionicons name="chevron-forward" size={20} color="#666666" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Ionicons name="log-out" size={20} color="#F43F5E" />
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>

      <Text style={styles.versionText}>Version 1.0.0</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  contentContainer: {
    paddingBottom: 40,
  },
  profileHeader: {
    alignItems: "center",
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  profileImageContainer: {
    position: "relative",
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editImageButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#6366F1",
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#ffffff",
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 16,
  },
  editProfileButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#6366F1",
    borderRadius: 20,
  },
  editProfileText: {
    color: "#6366F1",
    fontSize: 14,
    fontWeight: "500",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#666666",
  },
  statDivider: {
    width: 1,
    backgroundColor: "#e0e0e0",
  },
  sectionContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  menuItemText: {
    flex: 1,
    fontSize: 14,
    color: "#333333",
  },
  signOutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    marginTop: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "#F43F5E",
    borderRadius: 8,
  },
  signOutText: {
    color: "#F43F5E",
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 8,
  },
  versionText: {
    textAlign: "center",
    fontSize: 12,
    color: "#999999",
    marginTop: 16,
  },
})

export default ProfileScreen
