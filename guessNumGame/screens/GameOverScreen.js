import { Image, View, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

const GameOverScreen = () => {
  return (
    <View>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.imageStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 200,
    width: 400,
    height: 400,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
