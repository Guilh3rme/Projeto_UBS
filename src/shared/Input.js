import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { Color } from "../colors";

export default function CustomInput({
  placeholder,
  secureTextEntry,
  onChange,
  icon,
}) {
  return (
    <TextInput
      style={styles.input}
      icon={icon}
      mode="flat"
      label={placeholder}
      secureTextEntry={secureTextEntry}
      onChange={onChange}
      underlineColor={Color.MaxBlueGreen}
      activeUnderlineColor={Color.MaxBlueGreen}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    color: "#fff",
    backgroundColor: Color.PurpleNavy,
    width: "80%",
    margin: 5,
    padding: 5,
  },
});
