import { StyleSheet, View } from "react-native";
import styles from "../../stylesGlobal";
import { useNavigation } from "@react-navigation/native";

import CustomInput from "../../shared/Input";
import CustomButton from "../../shared/Button";

export default function SignUpPage() {
  const navigation = useNavigation();
  return (
    <View style={styles.background}>
      <CustomInput placeholder={"Nome"} />
      <CustomInput placeholder={"Sobrenome"} />
      <CustomInput placeholder={"Telefone"} />
      <CustomInput placeholder={"Email"} />
      <CustomInput placeholder={"Senha"} />
      <CustomInput placeholder={"Confirmar Senha"} />

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
