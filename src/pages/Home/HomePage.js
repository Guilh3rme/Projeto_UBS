import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  StatusBar,
} from "react-native";
import styles from "../../stylesGlobal";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import Card from "./Components/Card";
import Slide from "./Components/Swiper";
import { Color } from "../../colors";

import { useEffect, useState } from "react";

export default function HomePage() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.background}>
      <View style={estilos.container}>
        <View style={estilos.header}>
          <Image
            style={estilos.imagem}
            source={{
              uri: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
            }}
          />
          <View style={estilos.inner_header}>
            <Text style={estilos.title}>Olá Guilherme!</Text>
            <View style={estilos.inner_header_titles}>
              <Text style={estilos.subtitle}>Idade: 23</Text>
              <Text style={estilos.subtitle}>Idade: 23</Text>
              <Text style={estilos.subtitle}>
                Consulta mais próxima: 30/11/2023
              </Text>
            </View>
          </View>
        </View>
        <View style={estilos.content_container}></View>
        <Slide title={"teste"} />
        <StatusBar />
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  header: {
    borderRadius: 5,
    backgroundColor: Color.MaxBlueGreen,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  inner_header: {
    flex: 1,
  },
  inner_header_titles: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imagem: {
    width: 65,
    height: 65,
    marginRight: 10,
    borderRadius: 35,
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 8,
  },
  content_container: {
    borderRadius: 5,
    backgroundColor: "#fff",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 10,
  },
});
