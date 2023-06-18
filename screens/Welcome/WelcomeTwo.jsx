import { View, StyleSheet } from "react-native";
import { COLORS, assets } from "../../constants";
import WelcomeScreensTop from "../../components/welcomeScreens";
import { RoundButton, Dots } from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";
const WelcomeTwo = () => {
  const navigation = useNavigation();

  const { container, buttonWrapper, vectorWrapper, dotWrapper } = styles;
  return (
    <View style={container}>
      <View style={vectorWrapper}>
        <WelcomeScreensTop
          imgUrl={assets.vector02}
          heading="Live Tracking"
          text="Track your items in real-time,
        no reckless time wasting."
          textWidth={206}
        />
      </View>

      <View style={dotWrapper}>
        <Dots dot1={assets.icon11} dot2={assets.icon13} dot3={assets.icon11} />
      </View>

      <View style={buttonWrapper}>
        <RoundButton
          imgUrl={assets.icon01}
          handleNavigate={() => navigation.navigate("Welcome-three")}
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
    top: 58,
  },
  buttonWrapper: {
    position: "absolute",
    bottom: "8.5%",
  },
  dotWrapper: {
    position: "absolute",
    bottom: "33.7%",
  },
});

export default WelcomeTwo;
