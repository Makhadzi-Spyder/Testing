import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { useRouter } from "expo-router";
import { useState } from "react";

import BottomNav from "@/components/bottomNav";

const courses = [
  {
    name: "Puppy Care",
    description: "Learn the essentials of caring for puppies.",
    route: "/course?name=puppy-care",
  },
  {
    name: "Pet First Aid",
    description: "Learn basic first aid and emergency care for pets.",
    route: "/course?name=pet-first-aid",
  },
  {
    name: "Basic Dog Training",
    description: "Learn the foundations of training a well-behaved dog.",
    route: "/course?name=basic-dog-training",
  },
  {
    name: "Canine Obedience Training",
    description:
      "Develop obedience skills and better communication with your dog.",
    route: "/course?name=canine-obedience-training",
  },
  {
    name: "Pet Grooming",
    description: "Learn essential grooming and hygiene techniques.",
    route: "/course?name=pet-grooming",
  },
  {
    name: "Animal Behaviour",
    description: "Understand animal behaviour and improve communication.",
    route: "/course?name=animal-behaviour",
  },
  {
    name: "Pet Business Management",
    description: "Learn the fundamentals of managing a pet-related business.",
    route: "/course?name=pet-business-management",
  },
];

export default function CoursesScreen() {
  const router = useRouter();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  function openCourse(route: any) {
    router.push(route);
    setDropdownOpen(false);
  }
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>🐾</Text>
        </View>

        <Text style={styles.headerTitle}>Courses</Text>
      </View>

      {/* MAIN CONTENT */}
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.pageTitle}>Our Courses</Text>

        <Text style={styles.introduction}>
          Explore our range of courses designed to help you develop your
          knowledge and skills in pet care and training.
        </Text>

        {/* DROPDOWN */}
        <Pressable
          style={styles.dropdownButton}
          onPress={() => setDropdownOpen(!dropdownOpen)}
        >
          <Text style={styles.dropdownText}>Select a course</Text>

          <Text style={styles.dropdownArrow}>{dropdownOpen ? "▲" : "▼"}</Text>
        </Pressable>

        {/* DROPDOWN OPTIONS */}
        {dropdownOpen && (
          <View style={styles.dropdownOptions}>
            {courses.map((course) => (
              <Pressable
                key={course.name}
                style={styles.dropdownOption}
                onPress={() => openCourse(course.route)}
              >
                <Text style={styles.dropdownOptionText}>{course.name}</Text>
              </Pressable>
            ))}
          </View>
        )}

        {/* COURSE CARDS */}
        {courses.map((course) => (
          <View key={course.name} style={styles.courseCard}>
            <View style={styles.courseImagePlaceholder}>
              <Text style={styles.pawIcon}>🐾</Text>
            </View>

            <Text style={styles.courseTitle}>{course.name}</Text>

            <Text style={styles.courseDescription}>{course.description}</Text>

            <Pressable
              style={styles.learnButton}
              onPress={() => openCourse(course.route)}
            >
              <Text style={styles.learnButtonText}>Learn More</Text>
            </Pressable>
          </View>
        ))}
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
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },

  introduction: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
    marginBottom: 18,
  },

  /* DROPDOWN */

  dropdownButton: {
    height: 48,
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius: 10,
    backgroundColor: "#DFECFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 8,
  },

  dropdownText: {
    fontSize: 15,
    fontWeight: "bold",
  },

  dropdownArrow: {
    fontSize: 14,
  },

  dropdownOptions: {
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius: 10,
    marginBottom: 18,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
  },

  dropdownOption: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
  },

  dropdownOptionText: {
    fontSize: 14,
  },

  /* COURSE CARDS */

  courseCard: {
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    padding: 12,
    marginBottom: 16,
  },

  courseImagePlaceholder: {
    height: 110,
    backgroundColor: "#FFE0E0",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  pawIcon: {
    fontSize: 40,
  },

  courseTitle: {
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },

  courseDescription: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    marginBottom: 12,
  },

  learnButton: {
    backgroundColor: "#DFECFF",
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius: 20,
    paddingVertical: 9,
    alignItems: "center",
  },

  learnButtonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
