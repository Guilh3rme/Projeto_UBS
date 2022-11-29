import { Dimensions, StyleSheet } from "react-native";
import { Color } from "./colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Color.LavenderBlue,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default styles;
