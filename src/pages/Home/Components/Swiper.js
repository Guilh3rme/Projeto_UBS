import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { Color } from "../../../colors";

import Swiper from "react-native-swiper";
export default function Slide({ title }) {
  return (
    <View style={estilos.wrapper}>
      <Text style={estilos.title}>Próximas Consultas</Text>
      <Swiper autoplay={true} autoplayTimeout={3}>
        <View style={estilos.slide}>
          <Text style={estilos.content}>Teste{title}</Text>
        </View>
        <View style={estilos.slide}>
          <Text style={estilos.content}>Teste{title}</Text>
        </View>
        <View style={estilos.slide}>
          <Text style={estilos.content}>Teste{title}</Text>
        </View>
      </Swiper>
    </View>
  );
}
const estilos = StyleSheet.create({
  wrapper: {
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    borderRadius: 5,
    backgroundColor: Color.MaxBlueGreen,
  },
  slide: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: Color.MidBlueGreen,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
