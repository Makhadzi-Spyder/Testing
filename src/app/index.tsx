import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

import { useRouter } from "expo-router";

import BottomNav from "../components/bottomNav";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>🐾</Text>
        </View>

        <Text style={styles.headerTitle}>Home</Text>
      </View>

      {/* MAIN CONTENT */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.welcome}>Welcome to Pawsitive Paws</Text>

        {/* MAIN IMAGE */}
        {/*
        <Image
          source={require("/assets/images/garden.jpeg")}
          style={styles.mainImage}
        />
        */}

        {/* BUSINESS INTRODUCTION */}
        <Text style={styles.introduction}>
          Pawsitive Paws is a pet care and training academy dedicated to helping
          pet owners provide their animals with the care, training and support
          they need.
        </Text>

        <Text style={styles.introduction}>
          We offer a range of courses covering areas such as puppy care, pet
          grooming, animal behaviour, obedience training and pet first aid.
        </Text>

        {/* DISCOUNT INFORMATION */}
        <View style={styles.discountBox}>
          <Text style={styles.discountTitle}>Course Discounts</Text>

          <Text style={styles.discountText}>
            The more courses you choose, the more you save!
          </Text>

          <Text style={styles.discountText}>2 courses: 5% discount</Text>

          <Text style={styles.discountText}>3 courses: 10% discount</Text>

          <Text style={styles.discountText}>
            More than 3 courses: 15% discount
          </Text>
        </View>

        {/* COURSES BUTTON */}
        <Pressable
          style={styles.coursesButton}
          onPress={() => router.push("/courses")}
        >
          <Text style={styles.coursesButtonText}>View All Courses</Text>
        </Pressable>
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

  welcome: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    marginBottom: 15,
  },

  mainImage: {
    width: "100%",
    height: 190,
    borderRadius: 15,
    marginBottom: 18,
  },

  introduction: {
    fontSize: 16,
    lineHeight: 23,
    color: "#000000",
    textAlign: "center",
    marginBottom: 12,
  },

  /* DISCOUNT BOX */

  discountBox: {
    backgroundColor: "#FFE0E0",
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius: 15,
    padding: 15,
    marginTop: 5,
    marginBottom: 18,
  },

  discountTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },

  discountText: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 4,
  },

  /* COURSES BUTTON */

  coursesButton: {
    backgroundColor: "#DFECFF",
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius: 22,
    paddingVertical: 12,
    alignItems: "center",
    marginHorizontal: 30,
  },

  coursesButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
});
