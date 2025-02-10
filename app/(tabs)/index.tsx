import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Révision D2WM</Text>
      <Link href="/random" style={styles.button}>
        Une carte au hasard ?
      </Link>
      <Link href="/learn" style={styles.button}>
        Apprendre
      </Link>
      <Link href="/about" style={styles.button}>
        En savoir plus
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
  },
  text: {
    color: "black",
    fontSize: 25,
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
