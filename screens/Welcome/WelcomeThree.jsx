import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import { COLORS, assets, SIZES } from "../../constants";
import WelcomeScreensTop from "../../components/welcomeScreens";
import { RectangleButton } from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";

const WelcomeThree = () => {
  const navigation = useNavigation();
  const { container, buttonWrapper, loginWrapper, vectorWrapper, login } =
    styles;
  return (
    <SafeAreaView style={container}>
      <View style={vectorWrapper}>
        <WelcomeScreensTop
          imgUrl={assets.vector03}
          heading="D2D Delivery"
          text="Ding Dong...delivery at your doorstep
        makes it the most convineint and
        comfortable platform."
          textWidth={259}
          dot1={assets.icon11}
          dot2={assets.icon11}
          dot3={assets.icon13}
        />
      </View>

      <View style={buttonWrapper}>
        <RectangleButton
          text="Get Started"
          color={COLORS.white}
          backgroundColor={COLORS.yellow}
          borderRadius={10}
          width={316}
          height={59}
          handlePress={() => navigation.navigate("CreateAccount")}
        />
      </View>

      <View style={loginWrapper}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Login")}
          accessibilityRole="link"
        >
          <Text style={login}>Login</Text>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
  },
  vectorWrapper: {
    marginTop: "17.6%",
  },
  buttonWrapper: {
    position: "absolute",
    bottom: "16%",
  },
  loginWrapper: {
    position: "absolute",
    bottom: "11%",
  },
  login: {
    color: COLORS.blue,
    fontSize: SIZES.base,
  },
});

export default WelcomeThree;
