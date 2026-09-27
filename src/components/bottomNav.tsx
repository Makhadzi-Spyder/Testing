import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function BottomNav() {
  const router = useRouter();

  return (
    <View style={styles.bottomBar}>
      {/* Home */}
      <Pressable style={styles.navItem} onPress={() => router.push("/")}>
        <Text style={styles.navIcon}>⌂</Text>
      </Pressable>

      {/* About Us */}
      <Pressable style={styles.navItem} onPress={() => router.push("/about")}>
        <Text style={styles.navIcon}>ⓘ</Text>
      </Pressable>

      {/* Courses */}
      <Pressable style={styles.navItem} onPress={() => router.push("/courses")}>
        <Text style={styles.navIcon}>▣</Text>
      </Pressable>

      {/* Fees */}
      <Pressable style={styles.navItem} onPress={() => router.push("/fees")}>
        <Text style={styles.navIcon}>🛒</Text>
      </Pressable>

      {/* Contact Us */}
      <Pressable style={styles.navItem} onPress={() => router.push("/contact")}>
        <Text style={styles.navIcon}>⌕</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
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
