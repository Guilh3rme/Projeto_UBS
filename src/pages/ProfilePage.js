import { View, Text } from "react-native";
import styles from "../styles/styles";
import { useNavigation } from "@react-navigation/native";

const ProfilePage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.background}>
      <Text> ProfilePage </Text>
    </View>
  );
};

export default ProfilePage;
