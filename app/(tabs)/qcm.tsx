import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import cards from "../../assets/def.json";
import { useState } from "react";

//define the type of object in cards
type Card = {
  id: number;
  front: string;
  back: string;
  isCorrect: boolean;
};

//return a random number between 0 and the parameter
function getRandomIndex(nb: number): number {
  return Math.floor(Math.random() * nb);
}

// return an array of four cards
function getResponses(): Card[] {
  //init the index of question Card
  let indexGoodCard = getRandomIndex(4);

  let fourCards: Card[] = [];
  for (let i = 0; i < 4; i++) {
    let randomIndex = getRandomIndex(cards.length);
    if (!fourCards.some((element) => element.id === randomIndex))
      fourCards.push({
        id: randomIndex,
        front: cards[randomIndex].front,
        back: cards[randomIndex].back,
        isCorrect: indexGoodCard === i ? true : false,
      });
  }

  return fourCards;
}

function qcm(): JSX.Element {
  //init the 4 answers
  const [answerCards, setAnswerCards] = useState(getResponses());
  const [selectedId, setSelectedId] = useState<number>(-1);

  //check if the button pressed corresponds to the correct answer
  function checkAnswer(answer: Card): void {
    setSelectedId(answer.id);
    if (answer.isCorrect) {
    }
  }

  function onClick(choice: string): void {}
  return (
    <>
      <ScrollView contentContainerStyle={styles.backgroundStyle}>
        <Text style={styles.title}>Kahout !</Text>
        <View style={styles.card}>
          {answerCards.map(
            (ans) =>
              ans.isCorrect && <Text style={styles.cardTitle}>{ans.front}</Text>
          )}

          {answerCards.map((ans) => (
            <TouchableOpacity
              key={ans.id}
              style={[
                styles.buttonContainer,
                selectedId === ans.id &&
                  (ans.isCorrect ? styles.correct : styles.wrong),
              ]}
              onPress={() => checkAnswer(ans)}
            >
              <Text style={styles.buttonText}>{ans.back}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={styles.buttonQuestion}
          onPress={() => {
            setAnswerCards(getResponses());
            setSelectedId(-1);
          }}
        >
          <Text style={styles.content}>Une autre !</Text>
        </TouchableOpacity>
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
    height: 600,
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
    fontSize: 18,
    textAlign: "left",
  },
  correct: {
    backgroundColor: "#AEEA94",
  },
  wrong: {
    backgroundColor: "#F87171",
  },
  buttonQuestion: {
    height: 50,
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#73C7C7",
    borderRadius: 5,
    padding: 2,
    width: 200,
    marginTop: 10,
  },
  content: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
});

export default qcm;
