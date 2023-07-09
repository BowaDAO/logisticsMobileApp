import { View, SafeAreaView, StyleSheet, TextInput, Image } from "react-native";
import { COLORS, assets } from "../constants";
import { RectangleButton } from "../components/Buttons";
import { Dimensions } from "react-native";

const RequestRide = () => {
  width = Dimensions.get("screen").width;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.inputContainer}>
          <Image source={assets.icon14} />
          <TextInput placeholder="choose your pick up" style={styles.input} />
          <Image source={assets.icon15} />
        </View>
        <View style={styles.inputContainer}>
          <Image source={assets.icon15} />
          <TextInput
            placeholder="choose your destination"
            style={styles.input}
          />
          <Image source={assets.icon16} />
        </View>
      </View>
      <View style={styles.button}>
        <RectangleButton
          text={"Continue"}
          backgroundColor={COLORS.blue}
          width={width - 30}
          height={65}
          color={COLORS.white}
          borderRadius={15}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 15,
    marginVertical: 30,
  },
  wrapper: {
    gap: 30,
  },
  input: {
    height: 40,
    width: 260,
    backgroundColor: COLORS.grey,
    borderRadius: 14,
    paddingLeft: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  button: {
    marginTop: 340,
  },
});

export default RequestRide;
