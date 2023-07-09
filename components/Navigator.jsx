import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity } from "react-native";
import {
  WelcomeOne,
  WelcomeTwo,
  WelcomeThree,
  CreateAccount,
  Login,
  Home,
} from "../screens";
import { COLORS, assets } from "../constants";
import HomeHeading from "./HomeHeading";
import RequestRide from "../screens/RequestRide";

const Stack = createStackNavigator();

const Navigator = () => {
  const navigation = useNavigation();

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
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            height: 124,
            borderBottomWidth: 1,
            backgroundColor: "transparent",
          },
          headerLeft: () => <HomeHeading />,
          headerRight: () => <Image source={assets.icon09} />,
          headerLeftContainerStyle: {
            paddingLeft: 15,
          },
          headerRightContainerStyle: {
            paddingRight: 15,
          },
          headerShadowVisible: true,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="RequestRide"
        component={RequestRide}
        options={{
          headerStyle: {
            backgroundColor: "transparent",
          },

          headerTitle: "Request a ride",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={assets.icon12} />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: { paddingLeft: 15 },
          headerRightContainerStyle: { paddingRight: 15 },
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Navigator;
