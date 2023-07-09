import { View, StyleSheet, SafeAreaView } from "react-native";
import { COLORS, assets } from "../../constants";
import WelcomeScreensTop from "../../components/welcomeScreens";
import { RoundButton } from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";
const WelcomeTwo = () => {
  const navigation = useNavigation();

  const { container, buttonWrapper, vectorWrapper } = styles;
  return (
    <SafeAreaView style={container}>
      <View style={vectorWrapper}>
        <WelcomeScreensTop
          imgUrl={assets.vector02}
          heading="Live Tracking"
          text="Track your items in real-time,
        no reckless time wasting."
          textWidth={206}
          dot1={assets.icon11}
          dot2={assets.icon13}
          dot3={assets.icon11}
        />
      </View>

      <View style={buttonWrapper}>
        <RoundButton
          imgUrl={assets.icon01}
          handleNavigate={() => navigation.navigate("Welcome-three")}
        />
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
    bottom: "14%",
  },
});

export default WelcomeTwo;
