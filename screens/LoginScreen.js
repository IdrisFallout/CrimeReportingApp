import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  TextInput,
  Text,
} from "react-native";
import { Image } from "expo-image";
import { Button as RNKButton } from "@ui-kitten/components";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginScreen}>
      <View style={[styles.bgDesign, styles.designLayout]}>
        <ImageBackground
          style={[styles.kenyaFlagBackgroundIcon, styles.iconPosition]}
          resizeMode="cover"
          source={require("../assets/kenyaflagbackground.png")}
        />
        <View style={[styles.curveDesign, styles.designLayout]} />
      </View>
      <Image
        style={[styles.splashcontentsIcon, styles.iconPosition]}
        contentFit="contain"
        source={require("../assets/splashcontents.png")}
      />
      <View style={[styles.loginContainer, styles.phoneFlexBox]}>
        <TextInput
          style={[styles.phone, styles.phoneBorder]}
          placeholder="Phone"
          keyboardType="phone-pad"
          secureTextEntry={false}
          placeholderTextColor="#000"
        />
        <TextInput
          style={[styles.password, styles.passwordFlexBox]}
          placeholder="PIN"
          keyboardType="numeric"
          secureTextEntry={true}
          placeholderTextColor="#000"
        />
        <RNKButton
          style={[styles.loginButton, styles.passwordFlexBox]}
          title="Click Me!"
          size="medium"
          status="primary"
          appearance="filled"
          color="#224092"
          textStyle={styles.loginButtonText}
          onPress={() => navigation.navigate("Dashboard")}
        >
          Login
        </RNKButton>
        <View style={[styles.signupSuggestion, styles.passwordFlexBox]}>
          <Text style={[styles.dontHaveAn, styles.loginTypo]}>
            Don’t have an account?
          </Text>
          <Button
            style={styles.signUp}
            title="Sign Up"
            radius="5"
            iconPosition="left"
            type="clear"
            color="#0678be"
            titleStyle={styles.signUpBtn}
            onPress={() => navigation.navigate("SignupScreen")}
            containerStyle={styles.signUpBtn1}
            buttonStyle={styles.signUpBtn2}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginButtonText: {
    fontWeight: "800",
    fontFamily: "Roboto",
  },
  signUpBtn: {
    color: "#0678be",
    fontSize: 12,
    fontWeight: "800",
    fontFamily: "Roboto",
  },
  signUpBtn1: {
    position: "relative",
  },
  signUpBtn2: {},
  designLayout: {
    width: 842,
    position: "absolute",
  },
  iconPosition: {
    height: 221,
    width: 360,
    left: "50%",
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  phoneFlexBox: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  phoneBorder: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
  passwordFlexBox: {
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  loginTypo: {
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "800",
    fontSize: FontSize.size_xs,
  },
  kenyaFlagBackgroundIcon: {
    marginLeft: -406,
  },
  curveDesign: {
    top: 136,
    left: 0,
    borderRadius: Border.br_131xl,
    height: 875,
    width: 842,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  bgDesign: {
    left: -15,
    height: 1011,
    zIndex: 0,
    top: 0,
    width: 842,
    position: "absolute",
  },
  splashcontentsIcon: {
    marginLeft: -180,
    zIndex: 1,
  },
  phone: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  password: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
  loginButton: {
    paddingHorizontal: Padding.p_75xl,
    paddingVertical: Padding.p_2xs,
    borderRadius: Border.br_8xs,
    marginTop: 12,
    overflow: "hidden",
  },
  dontHaveAn: {
    color: Color.black,
  },
  signUp: {
    marginLeft: 3,
  },
  signupSuggestion: {
    flexDirection: "row",
  },
  loginContainer: {
    marginTop: -149,
    marginLeft: -109,
    top: "50%",
    paddingHorizontal: 0,
    paddingVertical: 70,
    zIndex: 2,
    left: "50%",
    alignSelf: "center",
    position: "absolute",
    overflow: "hidden",
  },
  loginScreen: {
    flex: 1,
    height: 800,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default LoginScreen;
