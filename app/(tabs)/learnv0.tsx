import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import definitions from "../../assets/def.json";
import Card from "../../components/Card";

export default function App() {
  const [randomCardIndex, setRandomCardIndex] = useState(null);
  const [isAllCardsDisplayed, setIsAllCardsDisplayed] = useState(false);
  const [isAllCardsLearned, setIsAllCardsLearned] = useState(false);
  const [cardsToLearn, setCardsToLearn] = useState([]);
  const [revealedCards, setRevealedCards] = useState([]); // Suivi des cartes révélées

  function aleaCard() {
    const randomIndex = Math.floor(Math.random() * definitions.length);
    setRandomCardIndex(randomIndex);
    if (!revealedCards.includes(randomIndex)) {
      setRevealedCards([...revealedCards, randomIndex]); // Ajouter la carte à la liste des cartes révélées
    }
  }

  function toggleAllCards() {
    setIsAllCardsDisplayed(!isAllCardsDisplayed);
    setIsAllCardsLearned(false); // Réinitialisation de l'état d'apprentissage
  }

  function learnCards() {
    if (isAllCardsLearned) {
      setIsAllCardsLearned(false);
    } else {
      let newCards = [];
      while (newCards.length < 10) {
        let randomIndex = Math.floor(Math.random() * definitions.length);
        if (!newCards.includes(definitions[randomIndex])) {
          newCards.push(definitions[randomIndex]);
        }
      }
      setCardsToLearn(newCards);
      setIsAllCardsLearned(true);
      setIsAllCardsDisplayed(false);
    }
  }

  function handleAction(index, action) {
    let updatedCards = [...cardsToLearn];
    switch (action) {
      case "correct":
        updatedCards = updatedCards.filter((_, idx) => idx !== index);
        break;
      case "review":
        updatedCards.push(updatedCards.splice(index, 1)[0]);
        break;
      case "wrong":
        if (updatedCards.length > 1) {
          const card = updatedCards.splice(index, 1)[0];
          updatedCards.splice(1, 0, card);
        }
        break;
      default:
        break;
    }
    setCardsToLearn(updatedCards);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Révisons pour le titre !</Text>

      <TouchableOpacity onPress={aleaCard} style={styles.button}>
        <Text style={styles.buttonText}>Une carte aléatoire ?</Text>
      </TouchableOpacity>

      {randomCardIndex !== null && (
        <Card
          front={definitions[randomCardIndex].front}
          back={
            revealedCards.includes(randomCardIndex)
              ? definitions[randomCardIndex].back
              : ""
          }
        />
      )}

      <TouchableOpacity onPress={toggleAllCards} style={styles.button}>
        <Text style={styles.buttonText}>
          {isAllCardsDisplayed
            ? "Masquer toutes les cartes"
            : "Afficher toutes les cartes"}
        </Text>
      </TouchableOpacity>

      {/* Affiche toutes les cartes si elles ne sont pas en mode d'apprentissage */}
      {isAllCardsDisplayed && !isAllCardsLearned && (
        <View style={styles.cardsContainer}>
          {definitions.map((def, index) => (
            <Card
              key={index}
              front={def.front}
              back={def.back}
              onPress={() => handleClick(index)}
            />
          ))}
        </View>
      )}

      {/* Affiche les cartes à apprendre si elles sont définies */}
      {isAllCardsLearned && cardsToLearn.length > 0 && (
        <View style={styles.cardsContainer}>
          {cardsToLearn.map((def, index) => (
            <Card
              key={index}
              front={def.front}
              back={def.back}
              onAction={(action) => handleAction(index, action)}
            />
          ))}
        </View>
      )}

      <TouchableOpacity onPress={learnCards} style={styles.button}>
        <Text style={styles.buttonText}>
          {isAllCardsLearned ? "Ne plus apprendre" : "Apprendre"}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F8FAFC",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#E195AB",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardsContainer: {
    width: "100%",
    alignItems: "center",
  },
});
