import { View, Image, Alert } from "react-native";
import styles from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";

const LoginPage = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.background}>
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg",
          }}
        />
      </View>
      <View style={styles.input_container}>
        <TextInput
          style={styles.input}
          label="Usuário"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          label="Senha"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.btn_container}>
        <Button
          style={styles.btn}
          onPress={() => {
            if (username == "" || password == "") {
              Alert.alert(
                "Não é possível realizar login!",
                "Existem campos em branco!"
              );
            } else {
              navigation.navigate("s_home");
            }
          }}
          mode="contained"
          icon="login"
        >
          Login
        </Button>
        <Button
          style={styles.btn}
          onPress={() => navigation.navigate("signup")}
          mode="contained"
        >
          Cadastre-se
        </Button>
      </View>
    </View>
  );
};

export default LoginPage;
