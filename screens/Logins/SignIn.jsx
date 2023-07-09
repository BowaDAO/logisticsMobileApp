import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SIZES, FONTS, COLORS, assets } from "../../constants";
import Input from "../../components/Input";
import { useGlobalContext } from "../../context/ContextApi";
import { useLogin } from "../../context/AccountContext";
import { RectangleButton } from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [number, setPhone, password, setPassword] = useLogin();
  const { passwordVisible, handlePress } = useGlobalContext();

  const navigation = useNavigation();

  const handleSubmit = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headingText}>
          <Text style={{ color: COLORS.yellow }}>Welcome</Text>
          <Text style={{ color: COLORS.blue }}> Back</Text>
        </Text>

        <Text style={styles.h2}>Sign in</Text>
      </View>

      <View style={styles.formWrapper}>
        <View>
          <Input
            placeholder={"Phone Number"}
            value={number}
            onChange={setPhone}
            icon1={assets.icon05}
            keyboardType={"numeric"}
          />
        </View>

        <View>
          <Input
            placeholder={"Password"}
            value={password}
            onChange={(text) => setPassword(text)}
            icon1={assets.icon06}
            icon2={passwordVisible ? assets.icon06 : assets.icon07}
            secureTextEntry={passwordVisible ? false : true}
            handlePress={handlePress}
          />
          {/* hardcoded value for password error - this should change soon */}
          <Text
            style={{
              color: COLORS.red,
              fontSize: SIZES.extraSmall,
              marginTop: 4,
            }}
          >
            Password should contain at least 8 characters.
          </Text>
        </View>
      </View>

      <View style={styles.button}>
        <RectangleButton
          text={"Login"}
          color={COLORS.white}
          backgroundColor={COLORS.yellow}
          width={325}
          height={59}
          borderRadius={10}
          handlePress={handleSubmit}
        />
      </View>

      <View style={styles.CTAWrapper}>
        <Text style={styles.question}>Don't have an account? </Text>
        <TouchableOpacity>
          <Text
            style={styles.login}
            onPress={() => navigation.navigate("CreateAccount")}
          >
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headingText: {
    fontSize: SIZES.extraLarge,
    fontFamily: FONTS.bold,
    letterSpacing: 0.6,
  },
  headerWrapper: {
    paddingHorizontal: "4.27%",
    marginTop: 28,
  },
  h2: {
    color: COLORS.black,
    fontSize: SIZES.medium,
    letterSpacing: 0.6,
    fontWeight: 500,
    marginTop: 6.79,
  },
  formWrapper: {
    paddingHorizontal: "6.67%",
    gap: 32,
    marginTop: 48,
  },
  button: {
    alignSelf: "center",
    marginTop: 64,
  },
  CTAWrapper: {
    flexDirection: "row",
    alignSelf: "center",
    // marginTop: 255,
    bottom: "9.7%",
    position: "absolute",
  },
  login: {
    color: COLORS.blue,
    fontSize: SIZES.normal,
    textDecorationLine: "underline",
  },
  question: {
    color: COLORS.black,
    fontSize: SIZES.normal,
  },
});
export default Login;
