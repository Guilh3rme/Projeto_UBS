import { View, Text } from "react-native";
import styles from "../styles/styles";
import { useNavigation } from "@react-navigation/native";

const NotificationsPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.background}>
      <Text> NotificationsPage </Text>
    </View>
  );
};

export default NotificationsPage;
