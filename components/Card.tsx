import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Card = ({ front, back, onAction }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{front}</Text>
        {isFlipped && <Text style={styles.description}>{back}</Text>}
      </View>

      <TouchableOpacity
        onPress={() => setIsFlipped(!isFlipped)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          {isFlipped ? "Cacher" : "Découvrir"}
        </Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => onAction("correct")}
          style={[styles.choiceButton, styles.correct]}
        >
          <Text style={styles.choiceText}>Juste</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onAction("review")}
          style={[styles.choiceButton, styles.review]}
        >
          <Text style={styles.choiceText}>Revoir</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onAction("wrong")}
          style={[styles.choiceButton, styles.wrong]}
        >
          <Text style={styles.choiceText}>Faux</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    maxWidth: 300,
    minHeight: 200,
    backgroundColor: "#0F766E",
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    alignItems: "center",
  },
  cardContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#E2E8F0",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#1E293B",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    alignSelf: "stretch",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  choiceButton: {
    flex: 1,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 16,
    alignItems: "center",
  },
  correct: {
    backgroundColor: "#86EFAC",
  },
  review: {
    backgroundColor: "#67E8F9",
  },
  wrong: {
    backgroundColor: "#F87171",
  },
  choiceText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1E293B",
  },
});

export default Card;
