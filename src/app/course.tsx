import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const courses = {
  "puppy-care": {
    title: "Puppy Care",
    description:
      "With our pet first aid course we offer skills that will make sure your furry friend is in the right hands.",
    paragraph:
      "This will help you know what to do in emergency situations. It is very important to have some knowledge of pet first care in case of and emergency.",
    offers: [
      "Minor injuries",
      "CPR basics",
      "Poison awareness",
      "Heatstroke",
      "Emergency transport",
    ],
    price: "R750",
  },

  "pet-first-aid": {
    title: "Pet First Aid",
    description:
      "With our pet first aid course we offer skills that will make sure your furry friend is in the right hands.",
    paragraph:
      "This will help you know what to do in emergency situations. It is very important to have some knowledge of pet first care in case of and emergency.",
    offers: [
      "Minor injuries",
      "CPR basics",
      "Poison awareness",
      "Heatstroke",
      "Emergency transport",
    ],
    price: "R750",
  },

  "basic-dog-walking": {
    title: "Basic Dog Walking",
    description:
      "With our pet grooming course, we offer professional grooming skills needed for domestic pets.",
    paragraph:
      "It is of the utmost importance that you provide domestic pets with proper grooming. Giving your little furry ones a nice fresh cleaning will make them happy and healthy!",
    offers: [
      "Walking equipment",
      "Handling multiple dogs",
      "Safety procedures",
      "Exercise routines",
    ],
    price: "R750",
  },

  "canine-obedience-training": {
    title: "Canine Obedience Training",
    description:
      "With our pet grooming course, we offer professional grooming skills needed for domestic pets.",
    paragraph:
      "It is of the utmost importance that you provide domestic pets with proper grooming. Giving your little furry ones a nice fresh cleaning will make them happy and healthy!",
    offers: [
      "Basic commands",
      "Leash training",
      "Behaviour correction",
      "Positive reinforcement",
      "Socialisation techniques",
    ],
    price: "R1 500",
  },

  "pet-grooming": {
    title: "Pet Grooming",
    description:
      "With our pet first aid course we offer skills that will make sure your furry friend is in the right hands.",
    paragraph:
      "This will help you know what to do in emergency situations. It is very important to have some knowledge of pet first care in case of and emergency.",
    offers: [
      "Minor injuries",
      "CPR basics",
      "Poison awareness",
      "Heatstroke",
      "Emergency transport",
    ],
    price: "R750",
  },

  "pet-business-management": {
    title: "Pet Business management",
    description:
      "With our pet first aid course we offer skills that will make sure your furry friend is in the right hands.",
    paragraph:
      "This will help you know what to do in emergency situations. It is very important to have some knowledge of pet first care in case of and emergency.",
    offers: [
      "Minor injuries",
      "CPR basics",
      "Poison awareness",
      "Heatstroke",
      "Emergency transport",
    ],
    price: "R750",
  },

  "animal-behaviour": {
    title: "Animal Behaviour",
    description:
      "With our pet first aid course we offer skills that will make sure your furry friend is in the right hands.",
    paragraph:
      "This will help you know what to do in emergency situations. It is very important to have some knowledge of pet first care in case of and emergency.",
    offers: [
      "Minor injuries",
      "CPR basics",
      "Poison awareness",
      "Heatstroke",
      "Emergency transport",
    ],
    price: "R750",
  },
};

export default function CourseScreen() {
  const router = useRouter();
  const { name } = useLocalSearchParams();

  const course = courses[name as keyof typeof courses];

  if (!course) {
    return (
      <View style={styles.container}>
        <Text>Course not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>🐾</Text>
        </View>

        <Text style={styles.headerTitle}>{course.title}</Text>
      </View>

      {/* Course content */}
      <ScrollView style={styles.scrollView}>
        <Text style={styles.description}>{course.description}</Text>

        {/* Course image */}
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imageText}>(Course image)</Text>
        </View>

        <Text style={styles.paragraph}>{course.paragraph}</Text>

        {/* What the course offers */}
        <View style={styles.offerBox}>
          <Text style={styles.offerTitle}>We Offer:</Text>

          {course.offers.map((item, index) => (
            <Text key={index} style={styles.offerItem}>
              • {item}
            </Text>
          ))}

          <Text style={styles.price}>{course.price}</Text>
        </View>
      </ScrollView>

      {/* Bottom navigation */}
      <View style={styles.bottomBar}>
        <Pressable style={styles.navItem} onPress={() => router.push("/")}>
          <Text style={styles.navIcon}>⌂</Text>
        </Pressable>

        <Pressable style={styles.navItem} onPress={() => router.push("/about")}>
          <Text style={styles.navIcon}>ⓘ</Text>
        </Pressable>

        <Pressable
          style={styles.navItem}
          onPress={() => router.push("/courses")}
        >
          <Text style={styles.navIcon}>▣</Text>
        </Pressable>

        <Pressable style={styles.navItem} onPress={() => router.push("/fees")}>
          <Text style={styles.navIcon}>🛒</Text>
        </Pressable>

        <Pressable
          style={styles.navItem}
          onPress={() => router.push("/contact")}
        >
          <Text style={styles.navIcon}>⌕</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  /* Header */

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
    fontSize: 35,
    fontWeight: "bold",
    color: "#000000",
    marginLeft: 25,
    flex: 1,
  },

  /* Course content */

  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },

  description: {
    fontSize: 14,
    color: "#000000",
    textAlign: "center",
    lineHeight: 18,
    marginTop: 10,
    marginBottom: 12,
  },

  imagePlaceholder: {
    height: 168,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
    marginBottom: 16,
  },

  imageText: {
    fontSize: 16,
    color: "#000000",
  },

  paragraph: {
    fontSize: 14,
    color: "#000000",
    textAlign: "center",
    lineHeight: 18,
    marginHorizontal: 5,
    marginBottom: 25,
  },

  /* Offer box */

  offerBox: {
    borderWidth: 1,
    borderColor: "#555555",
    minHeight: 210,
    padding: 10,
    marginHorizontal: 24,
    marginBottom: 15,
  },

  offerTitle: {
    fontSize: 17,
    textAlign: "center",
    textDecorationLine: "underline",
    marginBottom: 12,
  },

  offerItem: {
    fontSize: 16,
    lineHeight: 23,
  },

  price: {
    fontSize: 17,
    color: "red",
    textAlign: "center",
    marginTop: 32,
  },

  /* Bottom navigation */

  bottomBar: {
    height: 48,
    backgroundColor: "#DFECFF",
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius: 25,
    marginHorizontal: 17,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  navItem: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },

  navIcon: {
    fontSize: 25,
    color: "#222222",
  },
});
