import { View, Image, Alert, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import CustomInput from "../../shared/Input";
import CustomButton from "../../shared/Button";
import styles from "../../stylesGlobal";

export default function LoginPage() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.background}>
      <View>
        <Image style={{ width: 50, height: 50 }} />
      </View>
      <CustomInput
        placeholder={"Usuário ou Email"}
        onChange={(text) => setEmail(text)}
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
          onPress={() => handleSubmitLogin}
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
