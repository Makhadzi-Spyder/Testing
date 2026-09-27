import {
    Alert,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

import { useRouter } from "expo-router";
import { useState } from "react";
import BottomNav from "../components/bottomNav";

/* Course information
   Change the names and prices here if needed. */

const courses = [
  { name: "Puppy Care", price: 750 },
  { name: "Pet First Aid", price: 750 },
  { name: "Basic Dog Walking", price: 750 },
  { name: "Canine Obedience Training", price: 1500 },
  { name: "Pet Grooming", price: 1500 },
  { name: "Animal Behaviour", price: 1500 },
  { name: "Pet Business Management", price: 1500 },
];

export default function FeesScreen() {
  const router = useRouter();

  /* Customer information */

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  /* Selected courses */

  const [selectedCourses, setSelectedCourses] = useState<
    { name: string; price: number }[]
  >([]);

  /* Calculation values */

  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [vat, setVat] = useState(0);
  const [total, setTotal] = useState(0);

  /* Booking requests */

  const [bookingRequests, setBookingRequests] = useState<any[]>([]);

  /* Select or unselect a course */

  function toggleCourse(course: { name: string; price: number }) {
    const alreadySelected = selectedCourses.some(
      (selected) => selected.name === course.name,
    );

    if (alreadySelected) {
      setSelectedCourses(
        selectedCourses.filter((selected) => selected.name !== course.name),
      );
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  }

  /* Remove a course */

  function removeCourse(courseName: string) {
    setSelectedCourses(
      selectedCourses.filter((course) => course.name !== courseName),
    );
  }

  /* Calculate the price */

  function calculateTotal() {
    let courseTotal = 0;

    /* Add the price of every selected course */

    selectedCourses.forEach((course) => {
      courseTotal = courseTotal + course.price;
    });

    /* Work out the discount */

    let discountRate = 0;

    if (selectedCourses.length === 2) {
      discountRate = 0.05;
    } else if (selectedCourses.length === 3) {
      discountRate = 0.1;
    } else if (selectedCourses.length > 3) {
      discountRate = 0.15;
    }

    /* Calculate discount */

    const discountAmount = courseTotal * discountRate;

    /* Remove discount from the subtotal */

    const amountAfterDiscount = courseTotal - discountAmount;

    /* Calculate 15% VAT */

    const vatAmount = amountAfterDiscount * 0.15;

    /* Calculate final amount */

    const finalTotal = amountAfterDiscount + vatAmount;

    /* Update the values shown on screen */

    setSubtotal(courseTotal);
    setDiscount(discountAmount);
    setVat(vatAmount);
    setTotal(finalTotal);
  }

  /* Request a quote */

  function requestQuote() {
    /* Make sure the customer entered their details */

    if (name === "" || phone === "" || email === "") {
      Alert.alert(
        "Missing information",
        "Please enter your name, phone number and email.",
      );

      return;
    }

    /* Make sure at least one course was selected */

    if (selectedCourses.length === 0) {
      Alert.alert("No courses selected", "Please select at least one course.");

      return;
    }

    /* Create the booking */

    const booking = {
      name: name,

      phone: phone,

      email: email,

      courses: selectedCourses,

      total: total,
    };

    /* Add booking to the array */

    setBookingRequests([...bookingRequests, booking]);

    Alert.alert(
      "Quote requested",
      "Our team will contact you with your quote.",
    );
  }

  return (
    <View style={styles.container}>
      {/* HEADER */}

      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>🐾</Text>
        </View>

        <Text style={styles.headerTitle}>Total Fees</Text>
      </View>

      {/* MAIN CONTENT */}

      <ScrollView style={styles.scrollView}>
        <Text style={styles.introduction}>
          Review your selected courses and get a quote.
        </Text>

        {/* CUSTOMER INFORMATION */}

        <Text style={styles.sectionTitle}>Customer Information</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#555555"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          placeholderTextColor="#555555"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#555555"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        {/* COURSE SELECTION */}

        <Text style={styles.sectionTitle}>Select Your Courses</Text>

        <View style={styles.courseBox}>
          {courses.map((course) => {
            const selected = selectedCourses.some(
              (item) => item.name === course.name,
            );

            return (
              <Pressable
                key={course.name}
                style={styles.courseRow}
                onPress={() => toggleCourse(course)}
              >
                {/* Checkbox */}

                <View
                  style={[styles.checkbox, selected && styles.checkboxSelected]}
                >
                  {selected && <Text style={styles.checkmark}>✓</Text>}
                </View>

                {/* Course name */}

                <Text style={styles.courseName}>{course.name}</Text>

                {/* Price */}

                <Text style={styles.coursePrice}>R{course.price}</Text>
              </Pressable>
            );
          })}
        </View>

        {/* CALCULATE BUTTON */}

        <Pressable style={styles.calculateButton} onPress={calculateTotal}>
          <Text style={styles.buttonText}>Calculate Total</Text>
        </Pressable>

        {/* SELECTED COURSES */}

        <View style={styles.selectedBox}>
          <Text style={styles.selectedTitle}>Selected Courses</Text>

          {selectedCourses.length === 0 ? (
            <Text style={styles.noCourses}>No courses selected.</Text>
          ) : (
            selectedCourses.map((course) => (
              <View style={styles.selectedCourse} key={course.name}>
                <View style={styles.selectedCourseInfo}>
                  <Text style={styles.selectedCourseName}>{course.name}</Text>

                  <Text style={styles.selectedCoursePrice}>
                    R{course.price.toFixed(2)}
                  </Text>
                </View>

                <Pressable onPress={() => removeCourse(course.name)}>
                  <Text style={styles.removeText}>Remove</Text>
                </Pressable>
              </View>
            ))
          )}
        </View>

        {/* CALCULATION */}

        <View style={styles.calculationBox}>
          <View style={styles.calculationRow}>
            <Text>Subtotal:</Text>

            <Text>R{subtotal.toFixed(2)}</Text>
          </View>

          <View style={styles.calculationRow}>
            <Text>Discount:</Text>

            <Text>-R{discount.toFixed(2)}</Text>
          </View>

          <View style={styles.calculationRow}>
            <Text>VAT (15%):</Text>

            <Text>R{vat.toFixed(2)}</Text>
          </View>

          <View style={styles.totalRow}>
            <Text style={styles.totalText}>Total:</Text>

            <Text style={styles.totalText}>R{total.toFixed(2)}</Text>
          </View>
        </View>

        {/* REQUEST QUOTE BUTTON */}

        <Pressable style={styles.quoteButton} onPress={requestQuote}>
          <Text style={styles.buttonText}>Request a Quote</Text>
        </Pressable>

        <Text style={styles.quoteMessage}>
          Our team will contact you with your quote.
        </Text>
      </ScrollView>

      {/* BOTTOM NAVIGATION */}
      <BottomNav />
    </View>
  );
}

/* STYLES */

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
    paddingHorizontal: 18,
  },

  introduction: {
    fontSize: 17,
    color: "#000000",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
  },

  input: {
    height: 45,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#555555",
    paddingHorizontal: 12,
    marginBottom: 10,
    fontSize: 14,
  },

  /* COURSE SELECTION */

  courseBox: {
    borderWidth: 1,
    borderColor: "#555555",
    marginBottom: 15,
  },

  courseRow: {
    minHeight: 48,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
  },

  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1,
    borderColor: "#555555",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  checkboxSelected: {
    backgroundColor: "#FFE0E0",
  },

  checkmark: {
    fontSize: 17,
    fontWeight: "bold",
  },

  courseName: {
    flex: 1,
    fontSize: 14,
    color: "#000000",
  },

  coursePrice: {
    fontSize: 14,
    color: "#000000",
  },

  /* BUTTONS */

  calculateButton: {
    backgroundColor: "#FFE0E0",
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius: 20,
    paddingVertical: 11,
    alignItems: "center",
    marginBottom: 15,
  },

  quoteButton: {
    backgroundColor: "#FFE0E0",
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius: 20,
    paddingVertical: 13,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },

  /* SELECTED COURSES */

  selectedBox: {
    borderWidth: 1,
    borderColor: "#555555",
    backgroundColor: "#FFFFFF",
    padding: 12,
    marginBottom: 15,
  },

  selectedTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

  noCourses: {
    fontSize: 14,
    color: "#555555",
  },

  selectedCourse: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#DDDDDD",
    paddingVertical: 9,
  },

  selectedCourseInfo: {
    flex: 1,
  },

  selectedCourseName: {
    fontSize: 14,
  },

  selectedCoursePrice: {
    fontSize: 13,
    marginTop: 2,
  },

  removeText: {
    color: "red",
    fontSize: 13,
  },

  /* CALCULATION */

  calculationBox: {
    borderWidth: 1,
    borderColor: "#555555",
    padding: 12,
    marginBottom: 10,
  },

  calculationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#555555",
    paddingTop: 10,
    marginTop: 5,
  },

  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  quoteMessage: {
    textAlign: "center",
    fontSize: 12,
    marginTop: 7,
    marginBottom: 20,
  },

  /* BOTTOM NAVIGATION */

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
