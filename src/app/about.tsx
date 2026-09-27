import {
    Animated,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";

import { useEffect, useRef } from "react";

import BottomNav from "@/components/bottomNav";

export default function AboutScreen() {
  // Fade-in animation
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>🐾</Text>
        </View>

        <Text style={styles.headerTitle}>About Us</Text>
      </View>

      {/* MAIN CONTENT */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <Animated.View style={{ opacity: fadeAnim }}>
          <Text style={styles.pageTitle}>About Pawsitive Paws</Text>

          {/* FIRST IMAGE */}
          {/*
          <Image
            source={require("@/assets/images/about-paws.jpg")}
            style={styles.aboutImage}
          />*/}

          {/* HISTORY */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Our History</Text>

            <Text style={styles.sectionText}>
              WRITE THE HISTORY OF PAWSITIVE PAWS HERE. Explain when the
              business was started, why it was created and how it has developed.
            </Text>
          </View>

          {/* VISION */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Our Vision</Text>

            <Text style={styles.sectionText}>
              WRITE THE VISION OF PAWSITIVE PAWS HERE. Explain what the business
              hopes to achieve in the future.
            </Text>
          </View>

          {/* SECOND IMAGE */}
          {/*
          <Image
            source={require("@/assets/images/about-dog.jpg")}
            style={styles.aboutImage}
          />
          */}

          {/* MISSION */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Our Mission</Text>

            <Text style={styles.sectionText}>
              WRITE THE MISSION OF PAWSITIVE PAWS HERE. Explain what the
              business does and how it works towards its vision.
            </Text>
          </View>

          {/* GOALS */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Our Goals</Text>

            <Text style={styles.sectionText}>
              WRITE THE GOALS OF PAWSITIVE PAWS HERE. You can describe the main
              goals of the business and what it wants to accomplish.
            </Text>
          </View>
        </Animated.View>
      </ScrollView>

      {/* BOTTOM NAVIGATION */}
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  /* HEADER */

  header: {
    height: 108,
    backgroundColor: "#FFE0E0",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#555555",
    paddingHorizontal: 14,
  },

  logo: {
    width: 84,
    height: 84,
    borderRadius: 42,
    borderWidth: 2,
    borderColor: "#FF9EAD",
    backgroundColor: "#FFEAF0",
    justifyContent: "center",
    alignItems: "center",
  },

  logoText: {
    fontSize: 32,
  },

  headerTitle: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#000000",
    marginLeft: 28,
  },

  /* MAIN CONTENT */

  scrollView: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 18,
    paddingTop: 15,
    paddingBottom: 20,
  },

  pageTitle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },

  /* IMAGES */

  aboutImage: {
    width: "100%",
    height: 180,
    borderRadius: 15,
    marginBottom: 18,
  },

  /* INFORMATION SECTIONS */

  section: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius: 15,
    padding: 15,
    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },

  sectionText: {
    fontSize: 15,
    lineHeight: 22,
    color: "#000000",
    textAlign: "center",
  },
});
