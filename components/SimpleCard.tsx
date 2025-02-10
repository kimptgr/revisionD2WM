import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import { useState } from "react";

type SimpleCardProps = {
  front: string;
  back: string;
};

const SimpleCard = (props: SimpleCardProps) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{props.front}</Text>
      {isDisplayed && <Text style={styles.content}>{props.back}</Text>}
      <Pressable
        style={styles.buttonContainer}
        onPress={() => {
          setIsDisplayed(!isDisplayed);
        }}
      >
        <Text style={styles.buttonText}>
          {isDisplayed ? "Cacher" : "Découvrir"}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 250,
    width: 350,
    backgroundColor: "#0F766E",
    borderRadius: 20,
    position: "relative",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 15,
    color: "white",
  },
  content: {
    padding: 10,
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
  button: {
    padding: 15,
  },
  buttonContainer: {
    alignItems: "center",
    backgroundColor: "#1E293B",
    borderRadius: 5,
    padding: 15,
    width: 300,
    position: "absolute",
    bottom: 16,
    right: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});

export default SimpleCard;
