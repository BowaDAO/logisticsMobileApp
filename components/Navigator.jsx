import { createStackNavigator } from "@react-navigation/stack";
import {
  WelcomeOne,
  WelcomeTwo,
  WelcomeThree,
  CreateAccount,
  Login,
  Home,
} from "../screens";
import { COLORS, assets } from "../constants";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerTitle: "",
        headerShadowVisible: false,
        headerStyle: { backgroundColor: COLORS.white, height: 85 },
        headerBackTitle: " ",
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeOne}></Stack.Screen>
      <Stack.Screen name="Welcome-two" component={WelcomeTwo}></Stack.Screen>
      <Stack.Screen
        name="Welcome-three"
        component={WelcomeThree}
      ></Stack.Screen>
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
      ></Stack.Screen>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Navigator;
