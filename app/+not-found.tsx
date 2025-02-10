import { View, StyleSheet, Text } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Pas par là !" }} />
      <View style={styles.container}>
        <Text style={styles.p}>
          Oups ! Cette page s'est perdue en chemin... 🚀💨
        </Text>
        <Link href="/" style={styles.button}>
          Home
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  stack: {
    backgroundColor: "#CCDF92",
  },

  container: {
    flex: 1,
    backgroundColor: "#CCDF92",
    justifyContent: "center",
    alignItems: "center",
  },

  p: {
    fontSize: 25,
    color: "#1E293B",
  },

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#1E293B",
  },
});
