import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Input } from "../../components";
import { assets, SIZES, FONTS, COLORS } from "../../constants";
import { RectangleButton } from "../../components/Buttons";
import { useNavigation } from "@react-navigation/native";
import { useGlobalContext } from "../../context/ContextApi";
import { useSignUp } from "../../context/AccountContext";

const CreateAccount = () => {
  const [
    name,
    setName,
    email,
    setEmail,
    number,
    setPhone,
    password,
    setPassword,
    handleSubmit,
  ] = useSignUp();

  const navigation = useNavigation();

  const { passwordVisible, handlePress } = useGlobalContext();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headingText}>
          <Text style={{ color: COLORS.blue }}>Ride</Text>{" "}
          <Text style={{ color: COLORS.yellow }}>Along...</Text>
        </Text>

        <Text style={styles.h2}>Create Account</Text>
      </View>

      <View style={styles.formWrapper}>
        <View>
          <Input
            placeholder={"Name"}
            value={name}
            onChange={setName}
            icon1={assets.icon03}
          />
        </View>
        <View>
          <Input
            placeholder={"Email"}
            value={email}
            onChange={setEmail}
            icon1={assets.icon04}
          />
        </View>

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
            secureTextEntry={passwordVisible ? "false" : "true"}
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

      <View style={styles.buttonWrapper}>
        <RectangleButton
          text={"Sign up"}
          color={COLORS.white}
          backgroundColor={COLORS.yellow}
          width={325}
          height={59}
          borderRadius={10}
          handlePress={handleSubmit}
        />
        <RectangleButton
          text={"Register as a company"}
          color={COLORS.blue}
          backgroundColor={COLORS.white}
          borderColor={COLORS.blue}
          borderWidth={0.5}
          borderRadius={10}
          width={325}
          height={59}
        />
      </View>

      <View style={styles.CTAWrapper}>
        <Text style={styles.question}>Already have an account? </Text>
        <TouchableOpacity>
          <Text
            style={styles.login}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  formWrapper: {
    paddingHorizontal: "6.67%",
    gap: 32,
    marginTop: 48,
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
  buttonWrapper: {
    alignItems: "center",
    marginTop: 64,
    gap: 16,
  },
  CTAWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 64,
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
export default CreateAccount;
