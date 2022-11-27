import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import HomePage from "../pages/Home/HomePage";
import FeedbackPage from "../pages/Feedback/FeedbackPage";
import ExamsPage from "../pages/Home/Exams/ExamsPage";
import ProfilePage from "../pages/Home/UserData/ProfilePage";

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarLabel: navigation.isFocused() ? route.name : "",
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Exams") {
            iconName = focused ? "calendar-outline" : "calendar-blank";
          } else if (route.name === "Notifications") {
            iconName = focused ? "bell" : "bell-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "account-circle" : "account-circle-outline";
          } else if (route.name === "Feedback") {
            iconName = focused ? "message" : "message-outline";
          }
          return <Icon name={iconName} size={26} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Profile" component={ProfilePage} />
      <Tab.Screen name="Exams" component={ExamsPage} />
      <Tab.Screen name="Feedback" component={FeedbackPage} />
    </Tab.Navigator>
  );
}
