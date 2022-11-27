import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#8A8EEE",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default styles;
