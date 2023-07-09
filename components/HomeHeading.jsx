import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const HomeHeading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Hello, <Text style={styles.span}>Bowal</Text>
      </Text>
      <Text style={styles.subheading}>Experience the best services</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 2,
  },
  heading: {
    fontSize: SIZES.large,
    color: COLORS.blue,
    fontFamily: FONTS.medium,
  },
  span: {
    color: COLORS.yellow,
  },
  subheading: {
    fontSize: SIZES.small,
  },
});
export default HomeHeading;
