import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default function CustomButton({ title, icon, onPress }) {
  return (
    <Button style={styles.button} icon={icon} mode="outlined" onPress={onPress}>
      {title}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    backgroundColor: "#F6FFF8",
    margin: 5,
  },
});
