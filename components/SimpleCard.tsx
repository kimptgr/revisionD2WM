import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type SimpleCardProps = {
  front: string;
  back: string;
  isFlipped: boolean;
  onClick: () => void;
};

const SimpleCard = ({
  front,
  back,
  isFlipped,
  onClick,
}: SimpleCardProps): JSX.Element => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{front}</Text>
      {isFlipped && <Text style={styles.content}>{back}</Text>}
      <TouchableOpacity style={styles.buttonContainer} onPress={onClick}>
        <Text style={styles.buttonText}>
          {isFlipped ? "Cacher" : "Découvrir"}
        </Text>
      </TouchableOpacity>
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
