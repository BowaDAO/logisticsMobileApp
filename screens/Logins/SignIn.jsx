import { View, Text, StyleSheet } from "react-native";
import { SIZES, FONTS, COLORS, assets } from "../../constants";
import { Input } from "../../components";
import { useGlobalContext } from "../../context/ContextApi";
import { useLogin } from "../../context/AccountContext";

const Login = () => {
  const [number, setPhone, password, setPassword] = useLogin();
  const { passwordVisible, handlePress } = useGlobalContext();

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headingText}>
          <Text style={{ color: COLORS.yellow }}>Welcome</Text>{" "}
          <Text style={{ color: COLORS.blue }}>Back</Text>
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
});
export default Login;
