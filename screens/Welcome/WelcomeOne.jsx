import { View, StyleSheet, SafeAreaView } from "react-native";
import { COLORS, assets } from "../../constants";
import WelcomeScreensTop from "../../components/welcomeScreens";
import { RoundButton } from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";

const WelcomeOne = () => {
  const navigation = useNavigation();

  const { container, buttonWrapper, vectorWrapper } = styles;
  return (
    <SafeAreaView style={container}>
      <View style={vectorWrapper}>
        <WelcomeScreensTop
          imgUrl={assets.vector01}
          heading="Safe Delivery"
          text="The safest and most convinient way to get your items to their destination."
          textWidth={221}
          dot1={assets.icon13}
          dot2={assets.icon11}
          dot3={assets.icon11}
        />
      </View>

      <View style={buttonWrapper}>
        <RoundButton
          imgUrl={assets.icon01}
          handleNavigate={() => navigation.navigate("Welcome-two")}
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

export default WelcomeOne;
