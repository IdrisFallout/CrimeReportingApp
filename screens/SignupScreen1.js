import React, { useCallback } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  TextInput,
  Text,
  Alert,
} from "react-native";
import { Image } from "expo-image";
import { Button as RNKButton } from "@ui-kitten/components";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const SignupScreen1 = () => {
  const navigation = useNavigation();

  const onLoginButtonClick = useCallback(() => {
    Alert.alert("The Alert!", "Yoo! I think i am a notification");
  }, []);

  return (
    <View style={styles.signupScreen}>
      <ImageBackground
        style={[styles.kenyaFlagBackgroundIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/kenyaflagbackground.png")}
      />
      <View style={styles.curveDesign} />
      <Image
        style={[styles.splashcontentsIcon, styles.iconPosition]}
        contentFit="contain"
        source={require("../assets/splashcontents1.png")}
      />
      <View style={[styles.signupContainer, styles.phoneFlexBox]}>
        <TextInput
          style={[styles.phone, styles.phoneBorder]}
          placeholder="Phone"
          keyboardType="phone-pad"
          placeholderTextColor="#000"
        />
        <TextInput
          style={[styles.password, styles.passwordFlexBox]}
          placeholder="PIN"
          keyboardType="numeric"
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
          onLongPress={onLoginButtonClick}
        >
          Sign Up
        </RNKButton>
        <View style={[styles.signupSuggestion, styles.passwordFlexBox]}>
          <Text style={[styles.alreadyHaveAn, styles.signUpTypo]}>
            Already have an account?
          </Text>
          <Button
            style={styles.login}
            title="Login"
            radius="5"
            iconPosition="left"
            type="clear"
            color="#0678be"
            titleStyle={styles.loginBtn}
            onPress={() => navigation.navigate("LoginScreen")}
            containerStyle={styles.loginBtn1}
            buttonStyle={styles.loginBtn2}
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
  loginBtn: {
    color: "#0678be",
    fontSize: 12,
    fontWeight: "800",
    fontFamily: "Roboto",
  },
  loginBtn1: {
    position: "relative",
  },
  loginBtn2: {},
  iconPosition: {
    height: 221,
    width: 360,
    top: 0,
    marginLeft: -180,
    left: "50%",
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
  signUpTypo: {
    textAlign: "left",
    fontFamily: FontFamily.roboto,
    fontWeight: "800",
    fontSize: FontSize.size_xs,
  },
  kenyaFlagBackgroundIcon: {
    zIndex: 0,
  },
  curveDesign: {
    top: 136,
    left: -15,
    borderRadius: Border.br_131xl,
    width: 842,
    height: 875,
    zIndex: 1,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  splashcontentsIcon: {
    zIndex: 2,
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
  alreadyHaveAn: {
    color: Color.black,
  },
  login: {
    marginLeft: 3,
  },
  signupSuggestion: {
    flexDirection: "row",
  },
  signupContainer: {
    marginTop: -149,
    marginLeft: -115,
    top: "50%",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_51xl,
    zIndex: 3,
    left: "50%",
    alignSelf: "center",
    position: "absolute",
    overflow: "hidden",
  },
  signupScreen: {
    flex: 1,
    height: 800,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default SignupScreen1;
