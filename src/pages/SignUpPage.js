import { View, Text } from "react-native";
import styles from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { DUMMYDATA } from "../data/users";

const SignUpPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.background}>
      <Text> SignUpPage </Text>
      <Button
        style={styles.btn}
        onPress={() => navigation.navigate("s_home")}
        mode="contained"
        icon="home"
      >
        Go to Home
      </Button>
      <Button
        style={styles.btn}
        onPress={() => navigation.navigate("login")}
        mode="contained"
        icon="account-key"
      >
        Go to Login
      </Button>
    </View>
  );
};

export default SignUpPage;
