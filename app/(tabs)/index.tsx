import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.background}>
      <Text style={styles.title}>Révision D2WM</Text>

      <TouchableOpacity style={styles.buttonContainer}>
        <Link href="/random" style={styles.buttonText}>
          Une carte au hasard ?
        </Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer}>
        <Link href="/cardList" style={styles.buttonText}>
          Voir TOUT
        </Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer}>
        <Link href="/learn" style={styles.buttonText}>
          Apprendre
        </Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer}>
        <Link href="/qcm" style={styles.buttonText}>
          Kahout
        </Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer}>
        <Link href="/about" style={styles.buttonText}>
          En savoir plus...
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CCDF92",
  },
  title: {
    color: "#1E293B",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginBottom: 24,
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
  buttonContainer: {
    alignItems: "center",
    backgroundColor: "#E195AB",
    borderRadius: 5,
    padding: 15,
    width: 300,
    marginBottom: 24,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
