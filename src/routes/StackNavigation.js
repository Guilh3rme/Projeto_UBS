import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import TabNavigation from "./BottomTabsNavigation";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="login" component={LoginPage} />
      <Stack.Screen name="signup" component={SignUpPage} />
      <Stack.Screen name="s_home" component={TabNavigation} />
    </Stack.Navigator>
  );
};
export default StackNavigation;
