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

const LoginScreen = () => {
  const navigation = useNavigation();

  const onLoginButtonClick = useCallback(() => {
    Alert.alert("The Alert!", "Yoo! I think i am a notification");
  }, []);

  return (
    <View style={styles.loginScreen}>
      <ImageBackground
        style={[styles.kenyaFlagBackgroundIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/kenyaflagbackground.png")}
      />
      <View style={styles.curveDesign} />
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
            onPress={() => navigation.navigate("SignupScreen1")}
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
  loginTypo: {
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
    paddingVertical: Padding.p_51xl,
    zIndex: 3,
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
