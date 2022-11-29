import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Color } from "../colors";

export default function CustomButton({ title, icon, onPress }) {
  return (
    <Button
      style={styles.button}
      color={Color.Turquese}
      icon={icon}
      mode="outlined"
      onPress={onPress}
    >
      {title}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    backgroundColor: Color.PurpleNavy,
    margin: 5,
  },
});
