import { View, Text, SafeAreaView, Image } from "react-native";
import styles from "../../stylesGlobal";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import Card from "./Components/Card";

export default function HomePage() {
  const teste = [
    {
      nome: "Dados Pessoais",
    },
    {
      nome: "Histórico",
    },
    {
      nome: "UBS mais próxima",
    },
    {
      nome: "Farmácias próximas",
    },
  ];
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return <Card title={item.nome} />;
  };

  return (
    <SafeAreaView style={styles.background}>
      <View
        style={{
          borderRadius: 5,
          height: "10%",
          width: "95%",
          backgroundColor: "#fff",
          paddingVertical: 10,
          paddingRight: 16,
          position: "absolute",
          top: 50,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 65, height: 65 }}
          source={{
            uri: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
          }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 24 }}>Olá Guilherme!</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 10 }}>Idade: 23</Text>
            <Text style={{ fontSize: 10 }}>
              Consulta mais próxima: 30/11/2023
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          borderRadius: 5,
          backgroundColor: "#fff",
          paddingVertical: 10,
          paddingRight: 16,
          flexDirection: "row",
          alignItems: "center",
          top: 50,
        }}
      >
        <FlatList data={teste} renderItem={renderItem} numColumns={2} />
      </View>
    </SafeAreaView>
  );
}
