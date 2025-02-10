import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import definitions from "../../assets/def.json";
import SimpleCard from "@/components/SimpleCard";
import { useState } from "react";

export default function cardList(): JSX.Element {
  const [cards, setCards] = useState(Array(definitions.length).fill(false));

  function flipCard(index: number): void {
    const updateCards = cards.slice();
    updateCards[index] = !updateCards[index];
    setCards(updateCards);
  }
  return (
    <ScrollView style={styles.backgroundStyle}>
      <Text style={styles.title}>Tout ça à voir 📖</Text>
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
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginBottom: 48,
  },
  card: {
    marginVertical: 10,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
});
