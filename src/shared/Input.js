import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export default function CustomInput({
  placeholder,
  secureTextEntry,
  onChange,
}) {
  return (
    <TextInput
      style={styles.input}
      mode="flat"
      label={placeholder}
      secureTextEntry={secureTextEntry}
      onChange={onChange}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#F6FFF8",
    width: "80%",
    margin: 5,
    padding: 5,
  },
});
