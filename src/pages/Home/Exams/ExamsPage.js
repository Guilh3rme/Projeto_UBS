import { View, Text } from "react-native";
import styles from "../../../stylesGlobal";
import { useNavigation } from "@react-navigation/native";

export default function ExamsPage() {
  const navigation = useNavigation();
  return (
    <View style={styles.background}>
      <Text> ExamsPage </Text>
    </View>
  );
}
