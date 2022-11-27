import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../pages/Login/LoginPage";
import SignUpPage from "../pages/SignUp/SignUpPage";
import TabNavigation from "./BottomTabsNavigation";
import ProfileConfig from "../pages/ProfileConfig/ProfileConfigPage";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="login" component={LoginPage} />
      <Stack.Screen name="signup" component={SignUpPage} />
      <Stack.Screen name="s_home" component={TabNavigation} />
      <Stack.Screen name="s_profile" component={ProfileConfig} />
    </Stack.Navigator>
  );
}
