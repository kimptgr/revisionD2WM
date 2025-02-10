import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import definitions from "../../assets/def.json";
import SimpleCard from "@/components/SimpleCard";
import { useState } from "react";

function LearnCards(): JSX.Element {
  const [cards, setCards] = useState<number[]>([]);
  const [isFlipped, setIsFlipped] = useState(false);

  function onClick() {
    setIsFlipped(!isFlipped);
  }

  function startLearn(): void {
    let updateCards: number[] = [];
    while (updateCards.length < 10) {
      let randomIndex = Math.floor(Math.random() * definitions.length);
      if (!updateCards.includes(randomIndex)) updateCards.push(randomIndex);
    }

    setCards(updateCards);
  }

  function handle(action: string): void {
    setIsFlipped(false);
    if (cards.length === 1 && (action === "wrong" || action === "review"))
      return;
    let updateCards = cards.slice();

    switch (action) {
      case "right":
        setCards(updateCards.slice(1));
        break;

      case "wrong":
        const [first, second, ...rest] = updateCards;
        setCards([...rest.reverse(), first, second].reverse());
        // let firstElement = updateCards.shift();
        // let secondElement = updateCards.shift();
        // updateCards.reverse();
        // updateCards.push(firstElement);
        // updateCards.push(secondElement);
        // updateCards.reverse();
        // setCards(updateCards);
        break;

      case "review":
        let firstElement1 = updateCards.shift();
        updateCards.push(firstElement1);
        setCards(updateCards);
        break;

      default:
        break;
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.backgroundStyle}>
      <Text style={styles.title}>Ready à apprendre ?! 💥</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={startLearn}>
        <Text style={styles.buttonText}>Balance les cartes !</Text>
      </TouchableOpacity>
      {cards.length > 0 && (
        <>
          <Text style={styles.score}>{10 - cards.length}/10</Text>
          <SimpleCard
            front={definitions[cards[0]].front}
            back={definitions[cards[0]].back}
            isFlipped={isFlipped}
            onClick={onClick}
          />
        </>
      )}
      {cards.length > 0 && (
        <View style={styles.choicesButtonContainer}>
          <TouchableOpacity
            style={[styles.choiceButton, styles.correct]}
            onPress={() => handle("right")}
          >
            <Text style={styles.choiceButtonText}>Juste</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.choiceButton, styles.review]}
            onPress={() => handle("review")}
          >
            <Text style={styles.choiceButtonText}>Revoir</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.choiceButton, styles.wrong]}
            onPress={() => handle("wrong")}
          >
            <Text style={styles.choiceButtonText}>Faux</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}

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
  score: {
    marginBottom: 28,
    fontSize: 25,
    fontWeight: "bold",
  },
  buttonContainer: {
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

export default LearnCards;
