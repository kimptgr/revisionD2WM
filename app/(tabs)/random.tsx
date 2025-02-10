import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import definitions from "../../assets/def.json";
import SimpleCard from "@/components/SimpleCard";
import { useState } from "react";

function randomIndex(): number {
  return Math.floor(Math.random() * definitions.length);
}

const random = () => {
  let [randIndex, setRandIndex] = useState(randomIndex());
  let [isFlipped, setIsFlipped] = useState(false);

  function onClick(): void {
    setIsFlipped(!isFlipped);
  }

  return (
    <View style={styles.backgroundStyle}>
      <Text style={styles.title}>Révisons un peu pour le titre 📚</Text>
      <SimpleCard
        front={definitions[randIndex].front}
        back={definitions[randIndex].back}
        isFlipped={isFlipped}
        onClick={onClick}
      />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          setIsFlipped(false);
          setRandIndex(randomIndex());
        }}
      >
        <Text style={styles.buttonText}>Tirer une carte</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#CCDF92",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: "#1E293B",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginBottom: 48,
  },
  buttonContainer: {
    alignItems: "center",
    backgroundColor: "#E195AB",
    borderRadius: 5,
    padding: 15,
    width: 300,
    margin: 48,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default random;
