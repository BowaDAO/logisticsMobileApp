import { View, Image, Text, StyleSheet } from "react-native";
import { assets } from "../constants";
import { Dimensions } from "react-native";

const Banner = () => {
  const width = Dimensions.get("screen").width;

  return (
    <View style={styles.container}>
      <View style={{ width: width - 30, height: 183 }}>
        <Image
          source={assets.image01}
          style={{ height: "100%", width: "100%", borderRadius: 10 }}
        />
      </View>

      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
});

export default Banner;
