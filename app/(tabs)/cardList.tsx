import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import definitions from "../../assets/def.json";
import SimpleCard from "@/components/SimpleCard";
import { useState } from "react";

export default function cardList(): JSX.Element {
  const [cards, setCards] = useState(Array(definitions.length).fill(false));
  const [isAllCardsHidden, setIsAllCardsHidden] = useState(true);

  function flipCard(index: number): void {
    const updateCards = cards.slice();
    updateCards[index] = !updateCards[index];
    setCards(updateCards);
  }

  function handleAllCards(): void {
    setIsAllCardsHidden(!isAllCardsHidden);
    const updateCards = cards.slice();
    updateCards.fill(isAllCardsHidden);
    setCards(updateCards);
  }
  return (
    <ScrollView contentContainerStyle={styles.backgroundStyle}>
      <Text style={styles.title}>Tout ça à voir 📖</Text>
      <Pressable style={styles.buttonContainer} onPress={handleAllCards}>
        <Text style={styles.buttonText}>
          {isAllCardsHidden ? "Voir tout" : "Cacher tout"}
        </Text>
      </Pressable>
      <FlatList
        data={definitions}
        renderItem={({ item, index }) => (
          <View style={styles.card}>
            <SimpleCard
              front={item.front}
              back={item.back}
              isFlipped={cards[index]}
              onClick={() => flipCard(index)}
            />
          </View>
        )}
      ></FlatList>
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
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginBottom: 24,
  },
  card: {
    marginVertical: 10,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
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
