import React, { useCallback } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
} from "react-native";
import { Image } from "expo-image";
import { Button } from "@ui-kitten/components";
import { FontFamily, Color, Border } from "../GlobalStyles";

const LoginScreen = () => {
  const onLoginButtonClick = useCallback(() => {
    Alert.alert("The Alert!", "Yoo! I think i am a notification");
  }, []);

  return (
    <View style={[styles.loginScreen, styles.loginContainerFlexBox]}>
      <ImageBackground
        style={[styles.kenyaFlagBackgroundIcon, styles.splashcontentsPosition]}
        resizeMode="cover"
        source={require("../assets/kenyaflagbackground.png")}
      />
      <View style={styles.curveDesign} />
      <View style={[styles.splashcontents, styles.splashcontentsPosition]}>
        <View style={[styles.logoContainer, styles.loginContainerFlexBox]}>
          <Image
            style={styles.logoIcon}
            contentFit="cover"
            source={require("../assets/logo1.png")}
          />
        </View>
        <Text style={[styles.login, styles.loginTypo]}>LOGIN</Text>
      </View>
      <View style={[styles.loginContainer, styles.splashcontentsPosition]}>
        <TextInput
          style={[styles.phone, styles.phoneBorder]}
          placeholder="Phone"
          keyboardType="number-pad"
          placeholderTextColor="#000"
        />
        <TextInput
          style={[styles.password, styles.passwordFlexBox]}
          placeholder="Password"
          keyboardType="default"
          placeholderTextColor="#000"
        />
        <Button
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
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginButtonText: {
    fontWeight: "800",
    fontFamily: "Roboto",
  },
  loginContainerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  splashcontentsPosition: {
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  loginTypo: {
    fontFamily: FontFamily.roboto,
    fontWeight: "800",
  },
  phoneBorder: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    width: "100%",
    backgroundColor: Color.white,
  },
  passwordFlexBox: {
    marginTop: 12,
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  kenyaFlagBackgroundIcon: {
    zIndex: 0,
    top: 0,
    marginLeft: -180,
    left: "50%",
  },
  curveDesign: {
    top: 136,
    left: -15,
    borderRadius: 150,
    width: 842,
    height: 875,
    zIndex: 1,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
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
    width: 360,
    height: 221,
    paddingTop: 53,
    zIndex: 2,
    top: 0,
    marginLeft: -180,
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  phone: {
    alignSelf: "center",
    borderRadius: Border.br_8xs,
    padding: 5,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  password: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    width: "100%",
    backgroundColor: Color.white,
  },
  loginButton: {
    paddingHorizontal: 94,
    paddingVertical: 11,
  },
  loginContainer: {
    marginLeft: -179.5,
    bottom: 0,
    paddingHorizontal: 70,
    paddingTop: 260,
    paddingBottom: 189,
    zIndex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  loginScreen: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    alignItems: "center",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default LoginScreen;
