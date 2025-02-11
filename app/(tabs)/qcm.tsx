import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import cards from "../../assets/def.json";

function qcm(): JSX.Element {
  return (
    <>
      <Text style={styles.title}>Kahout !</Text>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
  },
});
export default qcm;
