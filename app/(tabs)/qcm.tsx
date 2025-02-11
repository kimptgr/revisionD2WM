import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import cards from "../../assets/def.json";

const indexCard: number = 0;

function getRandomIndex(): number {
  return Math.floor(Math.random() * cards.length);
}

function getQuestion(): void {}

function onClick(choice: number): void {}

function qcm(): JSX.Element {
  return (
    <>
      <ScrollView contentContainerStyle={styles.backgroundStyle}>
        <Text style={styles.title}>Kahout !</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{cards[indexCard].front}</Text>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => onClick(1)}
          >
            <Text style={styles.buttonText}>A :</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => onClick(2)}
          >
            <Text style={styles.buttonText}>B :</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => onClick(3)}
          >
            <Text style={styles.buttonText}>C :</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => onClick(4)}
          >
            <Text style={styles.buttonText}>D :</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#CCDF92",
    height: "100%",
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
  card: {
    width: 350,
    height: 500,
    backgroundColor: "#0F766E",
    borderRadius: 20,
    flexDirection: "column",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 15,
    color: "white",
  },
  choicesContainer: {},
  choicesRow: {},
  buttonContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#E195AB",
    borderRadius: 5,
    padding: 15,
    width: 300,
    marginBottom: 28,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  // v contenu non utilisé
  content: {
    padding: 10,
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },

  score: {
    marginBottom: 28,
    fontSize: 25,
    fontWeight: "bold",
  },

  choicesButtonContainer: {
    flexDirection: "row",
  },

  choiceButton: {
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 15,
    padding: 5,
    width: 100,
    margin: 5,
    borderColor: "#1E293B",
    borderWidth: 1,
  },

  choiceButtonText: {
    color: "#1E293B",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  correct: {
    backgroundColor: "#AEEA94",
  },
  review: {
    backgroundColor: "#73C7C7",
  },
  wrong: {
    backgroundColor: "#F87171",
  },
});

export default qcm;
