import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { COLORS } from "../constants";

const Welcome = () => {
  const { container } = styles;
  return (
    <SafeAreaView style={container}>
      <Text></Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default Welcome;
