import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Card({ title }) {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        backgroundColor: "#c6c6c6",
        margin: 5,
        elevation: 4,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
