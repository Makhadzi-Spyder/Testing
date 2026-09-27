import { useRouter } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";
import BottomNav from "../components/bottomNav";

export default function ContactScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>🐾</Text>
        </View>

        <Text style={styles.headerTitle}>Contact Us</Text>
      </View>

      {/* Main content */}
      <ScrollView style={styles.scrollView}>
        <Text style={styles.introduction}>
          If there is any thing you would like more information, reach out to
          us.
        </Text>

        <Text style={styles.getInTouch}>Get in touch:</Text>

        {/* WhatsApp / Phone */}
        <View style={styles.contactBox}>
          <Text style={styles.contactIcon}>☎</Text>

          <View>
            <Text style={styles.contactTitle}>Call Us</Text>

            <Text style={styles.contactDetails}>012 345 6789</Text>
          </View>
        </View>

        {/* Email */}
        <View style={styles.contactBox}>
          <Text style={styles.contactIcon}>✉</Text>

          <View>
            <Text style={styles.contactTitle}>Email Us</Text>

            <Text style={styles.contactDetails}>info@pawsitivepaws.co.za</Text>
          </View>
        </View>

        {/* Instagram */}
        <View style={styles.contactBox}>
          <Text style={styles.contactIcon}>◎</Text>

          <View>
            <Text style={styles.contactTitle}>Check out our Instagram</Text>

            <Text style={styles.contactDetails}>@pawsitivepaws</Text>
          </View>
        </View>

        {/* Message request */}
        <View style={styles.messageBox}>
          <Text style={styles.messageTitle}>Message request</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#555555"
          />

          <TextInput
            style={styles.input}
            placeholder="Enter your email address"
            placeholderTextColor="#555555"
            keyboardType="email-address"
          />

          <TextInput
            style={styles.messageInput}
            placeholder="How can we help?"
            placeholderTextColor="#555555"
            multiline={true}
            textAlignVertical="top"
          />
        </View>
      </ScrollView>

      {/* Bottom navigation */}
      <BottomNav />
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
    fontSize: 38,
    fontWeight: "bold",
    color: "#000000",
    marginLeft: 28,
  },

  /* Main content */

  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },

  introduction: {
    fontSize: 16,
    color: "#000000",
    textAlign: "center",
    lineHeight: 21,
    marginTop: 18,
    marginBottom: 12,
  },

  getInTouch: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 12,
  },

  /* Contact boxes */

  contactBox: {
    minHeight: 75,
    borderWidth: 1,
    borderColor: "#555555",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 10,
  },

  contactIcon: {
    fontSize: 32,
    width: 55,
    textAlign: "center",
    marginRight: 12,
  },

  contactTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 4,
  },

  contactDetails: {
    fontSize: 14,
    color: "#000000",
  },

  /* Message section */

  messageBox: {
    backgroundColor: "#FFE0E0",
    borderWidth: 1,
    borderColor: "#555555",
    padding: 15,
    marginTop: 10,
    marginBottom: 20,
  },

  messageTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 15,
  },

  input: {
    height: 45,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#777777",
    paddingHorizontal: 12,
    marginBottom: 10,
    fontSize: 14,
  },

  messageInput: {
    height: 120,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#777777",
    paddingHorizontal: 12,
    paddingTop: 12,
    fontSize: 14,
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
