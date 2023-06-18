import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { COLORS, assets, SIZES } from "../../constants";
import WelcomeScreensTop from "../../components/welcomeScreens";
import { RectangleButton, Dots } from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";

const WelcomeThree = () => {
  const navigation = useNavigation();
  const {
    container,
    buttonWrapper,
    loginWrapper,
    vectorWrapper,
    login,
    dotWrapper,
  } = styles;
  return (
    <View style={container}>
      <View style={vectorWrapper}>
        <WelcomeScreensTop
          imgUrl={assets.vector03}
          heading="D2D Delivery"
          text="Ding Dong...delivery at your doorstep
        makes it the most convineint and
        comfortable platform."
          textWidth={259}
        />
      </View>

      <View style={dotWrapper}>
        <Dots dot1={assets.icon11} dot2={assets.icon11} dot3={assets.icon13} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: "center",
  },
  vectorWrapper: {
    top: 56,
  },
  buttonWrapper: {
    position: "absolute",
    bottom: "12.07%",
  },
  loginWrapper: {
    position: "absolute",
    bottom: "6.78%",
  },
  login: {
    color: COLORS.blue,
    fontSize: SIZES.base,
  },
  dotWrapper: {
    position: "absolute",
    bottom: "31.2%",
  },
});

export default WelcomeThree;
