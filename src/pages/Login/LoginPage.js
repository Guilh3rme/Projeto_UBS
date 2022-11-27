import { View, Image, Alert, SafeAreaView } from "react-native";
import styles from "../../stylesGlobal";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import CustomInput from "../../shared/Input";
import CustomButton from "../../shared/Button";

export default function LoginPage() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.background}>
      <View>
        <Image />
      </View>
      <CustomInput
        placeholder={"Usuário ou Email"}
        secureTextEntry={false}
        onChange={(text) => setUsername(text)}
      />
      <CustomInput
        placeholder={"Senha"}
        secureTextEntry={true}
        onChange={(text) => setPassword(text)}
      />
      <View>
        <CustomButton
          title={"Entrar"}
          icon={"login"}
          onPress={() => navigation.navigate("s_home")}
        />
        <CustomButton
          title={"Cadastre-se"}
          icon={"account"}
          onPress={() => navigation.navigate("signup")}
        />
      </View>
    </SafeAreaView>
  );
}
