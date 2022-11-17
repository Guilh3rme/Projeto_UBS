import { View, Text } from "react-native";
import styles from "../styles/styles";
import { useNavigation } from "@react-navigation/native";

const MessagePage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.background}>
      <Text> MessagePage </Text>
    </View>
  );
};

export default MessagePage;
