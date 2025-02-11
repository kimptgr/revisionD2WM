import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const gitHubLink = "https://github.com/kimptgr/revisionD2WM";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Application en cours de développement par Kim.
      </Text>
      <Text style={styles.text}>
        Suis-moi sur github : kimptgr&nbsp;
        <Ionicons name="logo-github" size={24} color="black" />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightpink",
  },
  text: {
    fontSize: 20,
    color: "#1E293B",
  },
  link: {
    textDecorationStyle: "underline",
  },
});
