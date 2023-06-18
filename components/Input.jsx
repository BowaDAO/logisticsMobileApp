import {
  View,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES } from "../constants";
const Input = ({
  value,
  placeholder,
  icon1,
  icon2,
  onChange,
  keyboardType,
  handlePress,
  secureTextEntry,
}) => {
  return (
    <View style={styles.inputWrapper}>
      <Image source={icon1} style={styles.icon1Style} />
      <TextInput
        value={value}
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChange}
        placeholderTextColor={COLORS.black}
        keyboardType={keyboardType}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
      />
      <TouchableOpacity style={styles.icon2Style} onPress={handlePress}>
        <Image source={icon2} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    position: "relative",
  },
  input: {
    paddingLeft: 34,
    height: 40,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderColor: "#9A9A9A",
    fontSize: SIZES.normal,
  },
  icon1Style: {
    position: "absolute",
    top: "25%",
    left: 5,
  },
  icon2Style: {
    position: "absolute",
    top: "25%",
    right: 5,
  },
});

export default Input;
