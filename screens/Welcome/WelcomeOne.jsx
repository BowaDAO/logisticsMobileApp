import { View, StyleSheet, Image } from "react-native";
import { COLORS, assets } from "../../constants";
import WelcomeScreensTop from "../../components/welcomeScreens";
import { RoundButton, Dots } from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";

const WelcomeOne = () => {
  const navigation = useNavigation();

  const { container, buttonWrapper, vectorWrapper, dotWrapper } = styles;
  return (
    <View style={container}>
      <View style={vectorWrapper}>
        <WelcomeScreensTop
          imgUrl={assets.vector03}
          heading="Safe Delivery"
          text="The safest and most convinient way to get your items to their destination."
          textWidth={221}
          style={vectorWrapper}
        />
      </View>

      <View style={dotWrapper}>
        <Dots dot1={assets.icon13} dot2={assets.icon11} dot3={assets.icon11} />
      </View>

      <View style={buttonWrapper}>
        <RoundButton
          imgUrl={assets.icon01}
          handleNavigate={() => navigation.navigate("Welcome-two")}
        />
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
    top: 53,
    //value from 143(height from Figma) - headerHeight(85)
  },
  buttonWrapper: {
    position: "absolute",
    bottom: "8.5%",
  },
  dotWrapper: {
    position: "absolute",
    bottom: "31.2%",
  },
});

export default WelcomeOne;
