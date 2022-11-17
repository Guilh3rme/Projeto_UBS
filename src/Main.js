import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./routes/StackNavigation";

export default function Main() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
