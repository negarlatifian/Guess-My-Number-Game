import { Image, View, StyleSheet, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

const GameOverScreen = ({ roundNumber, userNUmber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/target.png")}
          style={styles.imageStyle}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNUmber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start a New Game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // borderRadius: 150,
    alignItems: "center",
    width: 400,
    height: 400,
    // borderWidth: 3,
    // borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 10,
  },
  imageStyle: {
    width: "90%",
    height: "90%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
    color: "white",
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: "#e64b68",
  },
});

export default GameOverScreen;
