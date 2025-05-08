import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const SUBSCRIPTION_PLANS = [
  {
    id: "basic",
    name: "Basic",
    price: "₹199",
    duration: "per month",
    features: ["Unlimited ride bookings", "Basic customer support", "Standard ride matching", "Regular pricing"],
    recommended: false,
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹499",
    duration: "per month",
    features: [
      "Unlimited ride bookings",
      "Priority customer support",
      "Advanced ride matching",
      "10% discount on all rides",
      "No cancellation fees",
    ],
    recommended: true,
  },
  {
    id: "family",
    name: "Family",
    price: "₹799",
    duration: "per month",
    features: [
      "Up to 5 family members",
      "Unlimited ride bookings",
      "Priority customer support",
      "Advanced ride matching",
      "15% discount on all rides",
      "No cancellation fees",
      "Family location sharing",
    ],
    recommended: false,
  },
  {
    id: "annual",
    name: "Annual Premium",
    price: "₹4,999",
    duration: "per year",
    features: [
      "All Premium features",
      "2 months free (₹999 savings)",
      "Priority booking during peak hours",
      "Exclusive seasonal offers",
    ],
    recommended: false,
  },
]

const SubscriptionPlansScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Choose Your Plan</Text>
        <Text style={styles.headerSubtitle}>Select the plan that works best for you</Text>
      </View>

      <View style={styles.plansContainer}>
        {SUBSCRIPTION_PLANS.map((plan) => (
          <View key={plan.id} style={[styles.planCard, plan.recommended && styles.recommendedCard]}>
            {plan.recommended && (
              <View style={styles.recommendedBadge}>
                <Text style={styles.recommendedText}>Recommended</Text>
              </View>
            )}

            <View style={styles.planHeader}>
              <Text style={styles.planName}>{plan.name}</Text>
              <View style={styles.priceContainer}>
                <Text style={styles.planPrice}>{plan.price}</Text>
                <Text style={styles.planDuration}>{plan.duration}</Text>
              </View>
            </View>

            <View style={styles.featuresContainer}>
              {plan.features.map((feature, index) => (
                <View key={index} style={styles.featureItem}>
                  <Ionicons name="checkmark-circle" size={20} color="#10B981" style={styles.featureIcon} />
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>

            <TouchableOpacity
              style={[styles.subscribeButton, plan.recommended ? styles.recommendedButton : styles.regularButton]}
            >
              <Text
                style={[
                  styles.subscribeButtonText,
                  plan.recommended ? styles.recommendedButtonText : styles.regularButtonText,
                ]}
              >
                Subscribe Now
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={styles.benefitsSection}>
        <Text style={styles.sectionTitle}>Why Subscribe?</Text>

        <View style={styles.benefitItem}>
          <View style={styles.benefitIconContainer}>
            <Ionicons name="cash-outline" size={24} color="#6366F1" />
          </View>
          <View style={styles.benefitContent}>
            <Text style={styles.benefitTitle}>Save Money</Text>
            <Text style={styles.benefitDescription}>
              Get exclusive discounts on rides and special offers only available to subscribers.
            </Text>
          </View>
        </View>

        <View style={styles.benefitItem}>
          <View style={styles.benefitIconContainer}>
            <Ionicons name="time-outline" size={24} color="#6366F1" />
          </View>
          <View style={styles.benefitContent}>
            <Text style={styles.benefitTitle}>Priority Service</Text>
            <Text style={styles.benefitDescription}>
              Get matched with rides faster and enjoy priority customer support.
            </Text>
          </View>
        </View>

        <View style={styles.benefitItem}>
          <View style={styles.benefitIconContainer}>
            <Ionicons name="shield-checkmark-outline" size={24} color="#6366F1" />
          </View>
          <View style={styles.benefitContent}>
            <Text style={styles.benefitTitle}>Enhanced Features</Text>
            <Text style={styles.benefitDescription}>
              Access premium features like ride scheduling, favorite routes, and more.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.faqSection}>
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>

        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>How do I change my subscription plan?</Text>
          <Text style={styles.faqAnswer}>
            You can change your subscription plan at any time from your profile settings. Changes will take effect at
            the start of your next billing cycle.
          </Text>
        </View>

        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>Can I cancel my subscription?</Text>
          <Text style={styles.faqAnswer}>
            Yes, you can cancel your subscription at any time. You'll continue to have access to your benefits until the
            end of your current billing period.
          </Text>
        </View>

        <View style={styles.faqItem}>
          <Text style={styles.faqQuestion}>Are there any hidden fees?</Text>
          <Text style={styles.faqAnswer}>
            No, the price you see is the price you pay. There are no hidden fees or charges.
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 24,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
  },
  plansContainer: {
    marginBottom: 32,
  },
  planCard: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#ffffff",
  },
  recommendedCard: {
    borderColor: "#6366F1",
    borderWidth: 2,
    shadowColor: "#6366F1",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  recommendedBadge: {
    position: "absolute",
    top: -12,
    right: 16,
    backgroundColor: "#6366F1",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  recommendedText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
  planHeader: {
    marginBottom: 16,
  },
  planName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  planPrice: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6366F1",
    marginRight: 4,
  },
  planDuration: {
    fontSize: 14,
    color: "#666666",
  },
  featuresContainer: {
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  featureIcon: {
    marginRight: 8,
  },
  featureText: {
    fontSize: 14,
    color: "#333333",
  },
  subscribeButton: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  regularButton: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#6366F1",
  },
  recommendedButton: {
    backgroundColor: "#6366F1",
  },
  subscribeButtonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  regularButtonText: {
    color: "#6366F1",
  },
  recommendedButtonText: {
    color: "#ffffff",
  },
  benefitsSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 16,
  },
  benefitItem: {
    flexDirection: "row",
    marginBottom: 16,
  },
  benefitIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  benefitContent: {
    flex: 1,
  },
  benefitTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 4,
  },
  benefitDescription: {
    fontSize: 14,
    color: "#666666",
    lineHeight: 20,
  },
  faqSection: {
    marginBottom: 16,
  },
  faqItem: {
    marginBottom: 16,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 8,
  },
  faqAnswer: {
    fontSize: 14,
    color: "#666666",
    lineHeight: 20,
  },
})

export default SubscriptionPlansScreen
