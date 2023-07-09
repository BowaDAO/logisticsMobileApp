import { TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import { COLORS, FONTS } from "../constants";

//round buttons component
export const RoundButton = ({ imgUrl, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.roundButton} onPress={handleNavigate}>
      <Image source={imgUrl} />
    </TouchableOpacity>
  );
};

//rectangle buttons component
export const RectangleButton = ({
  text,
  color,
  width,
  height,
  borderRadius,
  backgroundColor,
  borderWidth,
  borderColor,
  fontSize,
  handlePress,
}) => {
  return (
    <TouchableOpacity
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
        borderWidth: borderWidth,
        borderColor: borderColor,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          color: color,
          fontSize: fontSize,
          fontFamily: FONTS.medium,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  roundButton: {
    backgroundColor: COLORS.yellow,
    width: 56,
    height: 56,
    borderRadius: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
