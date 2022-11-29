import { Alert, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getRealm } from "../../services/database/Realm";
import { useState } from "react";
import uuid from "react-native-uuid";
import CustomButton from "../../shared/Button";
import CustomInput from "../../shared/Input";
import styles from "../../stylesGlobal";

export default function SignUpPage() {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  async function handleLogin() {
    if (confirmpassword == password) {
      const realm = await getRealm();
      try {
        realm.write(() => {
          const created = realm.create("Users", {
            _id: uuid.v4(),
            nome,
            sobrenome,
            email,
            password,
            telefone,
          });
          console.log(created);
        });

        Alert.alert("Sucesso!");
      } catch {
        Alert.alert("Falha!");
      } finally {
        realm.close();
      }
    } else {
      Alert.alert("Senhas não coincidem");
    }
  }
  return (
    <View style={styles.background}>
      <CustomInput placeholder={"Nome"} onChange={(text) => setNome(text)} />
      <CustomInput
        placeholder={"Sobrenome"}
        onChange={(text) => setSobrenome(text)}
      />
      <CustomInput
        placeholder={"Telefone"}
        onChange={(text) => setTelefone(text)}
      />
      <CustomInput placeholder={"Email"} onChange={(text) => setEmail(text)} />
      <CustomInput
        placeholder={"Senha"}
        onChange={(text) => setPassword(text)}
      />
      <CustomInput
        placeholder={"Confirmar Senha"}
        onChange={(text) => setConfirmPassword(text)}
      />

      <View style={estilos.btn_view}>
        <CustomButton
          title={"Back"}
          icon={"arrow-left"}
          onPress={() => navigation.goBack()}
        />
        <CustomButton
          title={"Cadastrar"}
          onPress={() => navigation.navigate("s_home")}
        />
      </View>
    </View>
  );
}
const estilos = StyleSheet.create({
  btn_view: {
    width: "80%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
