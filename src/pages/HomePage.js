import { View, Text } from "react-native";
import styles from "../styles/styles";
import { useNavigation } from "@react-navigation/native";

const HomePage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.background}>
      <Text> HomePage </Text>
    </View>
  );
};

export default HomePage;
