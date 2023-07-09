import { View, Text, StyleSheet } from "react-native";
import Banner from "../components/Banner";
import { RectangleButton } from "../components/Buttons";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES } from "../constants";

export const Home = () => {
  const width = Dimensions.get("window").width;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Banner />
      <View style={styles.buttonContainer}>
        <RectangleButton
          text={"Request a ride"}
          width={width - 30}
          height={72}
          backgroundColor={COLORS.blue}
          color={COLORS.white}
          borderRadius={10}
          fontSize={SIZES.normal}
          handlePress={() => navigation.navigate("RequestRide")}
        />

        <RectangleButton
          text={"Live Tracking"}
          width={width - 30}
          height={72}
          backgroundColor={COLORS.blue}
          color={COLORS.white}
          borderRadius={10}
          fontSize={SIZES.normal}
        />

        <RectangleButton
          text={"Order History"}
          width={width - 30}
          height={72}
          backgroundColor={COLORS.blue}
          color={COLORS.white}
          borderRadius={10}
          fontSize={SIZES.normal}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginTop: 50,
    alignItems: "center",
  },
  buttonContainer: {
    gap: 30,
    marginTop: 50,
    alignItems: "center",
  },
});

export default Home;
