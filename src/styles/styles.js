import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    top: 50,
    backgroundColor: "#fff",
  },
  image_container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: windowWidth,
    height: windowHeight / 2 - 50,
  },
  input_container: {
    padding: 5,
    margin: 5,
  },
  input: {
    margin: 5,
    padding: 5,
  },
  btn: {
    width: windowWidth / 2,
    marginTop: 2,
    padding: 5,
  },
  btn_container: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
export default styles;
