import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function Card({ title }) {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        backgroundColor: "#b38cb4",
        margin: 5,
        elevation: 4,
        height: 50,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
