import React, { useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageBackground, Alert } from "react-native";
import { Button } from "@ui-kitten/components";
import { FontFamily, Color, Border } from "../GlobalStyles";

const LoginScreen = () => {
  const onLoginButtonClick = useCallback(() => {
    Alert.alert("The Alert!", "Yoo! I think i am a notification");
  }, []);

  return (
    <ImageBackground
      style={[styles.loginScreenIcon, styles.loginFlexBox]}
      resizeMode="cover"
      source={require("../assets/loginscreen.png")}
    >
      <Image
        style={[styles.kenyaFlagBackgroundIcon, styles.splashcontentsPosition]}
        contentFit="cover"
        source={require("../assets/kenyaflagbackground.png")}
      />
      <View style={styles.curveDesign} />
      <View style={[styles.splashcontents, styles.splashcontentsPosition]}>
        <View style={[styles.logoContainer, styles.loginFlexBox]}>
          <Image
            style={styles.logoIcon}
            contentFit="cover"
            source={require("../assets/logo1.png")}
          />
        </View>
        <Text style={[styles.login, styles.loginTypo]}>LOGIN</Text>
      </View>
      <Button
        style={[styles.loginButton, styles.loginFlexBox]}
        title="Click Me!"
        size="medium"
        status="primary"
        appearance="filled"
        color="#224092"
        textStyle={styles.loginButtonText}
        onLongPress={onLoginButtonClick}
      >
        Login
      </Button>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loginButtonText: {
    fontWeight: "800",
    fontFamily: "Roboto_extrabold",
  },
  loginFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  splashcontentsPosition: {
    width: 360,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  loginTypo: {
    fontFamily: FontFamily.robotoExtrabold,
    fontWeight: "800",
  },
  kenyaFlagBackgroundIcon: {
    left: 0,
    height: 252,
    zIndex: 0,
  },
  curveDesign: {
    top: 136,
    left: -12,
    borderRadius: 150,
    backgroundColor: Color.white,
    width: 842,
    height: 875,
    zIndex: 1,
    position: "absolute",
    overflow: "hidden",
  },
  logoIcon: {
    width: 91,
    height: 91,
  },
  logoContainer: {
    borderRadius: Border.br_3xs_8,
    backgroundColor: Color.darkslateblue,
    shadowColor: "rgba(0, 0, 0, 0.49)",
    shadowOffset: {
      width: 4.900000095367432,
      height: 3.5,
    },
    shadowRadius: 4.9,
    elevation: 4.9,
    shadowOpacity: 1,
    width: 109,
    height: 109,
    overflow: "hidden",
    alignItems: "center",
  },
  login: {
    fontSize: 32,
    color: Color.black,
    textAlign: "center",
    marginTop: 21,
  },
  splashcontents: {
    marginLeft: -180,
    left: "50%",
    paddingTop: 53,
    zIndex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    borderRadius: 5,
    paddingHorizontal: 94,
    paddingVertical: 11,
    zIndex: 3,
    overflow: "hidden",
    alignItems: "center",
  },
  loginScreenIcon: {
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    alignItems: "center",
  },
});

export default LoginScreen;
