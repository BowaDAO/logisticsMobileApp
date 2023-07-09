import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { FONTS, assets, SIZES, COLORS } from "../constants";

const WelcomeScreensTop = ({
  imgUrl,
  text,
  heading,
  textWidth,
  dot1,
  dot2,
  dot3,
}) => {
  const { container, headingContainer, headingText, vector, dot } = styles;
  return (
    <View style={container}>
      <Image source={imgUrl} style={vector} />
      <View style={headingContainer}>
        <Text style={headingText}>{heading}</Text>
        <Image source={assets.icon02} resizeMode="contain" />
      </View>
      <Text
        style={{
          width: textWidth,
          fontSize: SIZES.normal,
          color: COLORS.black,
          textAlign: "center",
          top: 20,
          lineHeight: 21,
          fontFamily: FONTS.regular,
        }}
      >
        {text}
      </Text>
      <View style={dot}>
        <Image source={dot1} />
        <Image source={dot2} />
        <Image source={dot3} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  vector: {
    height: 199,
    width: 298.5,
    marginBottom: 45,
  },
  headingContainer: {
    alignItems: "flex-end",
    gap: 10,
  },

  headingText: {
    fontSize: SIZES.large,
    letterSpacing: 0.6,
    color: COLORS.black,
    fontFamily: FONTS.medium,
  },

  dot: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    marginTop: 50,
  },
});

export default WelcomeScreensTop;
