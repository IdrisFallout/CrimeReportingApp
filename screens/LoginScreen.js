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
import { Button } from "@ui-kitten/components";
import { Color, Border } from "../GlobalStyles";

const LoginScreen = () => {
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
      <View style={styles.loginContainer}>
        <TextInput
          style={[styles.phone, styles.phoneBorder]}
          placeholder="Phone"
          keyboardType="phone-pad"
          placeholderTextColor="#000"
        />
        <TextInput
          style={[styles.password, styles.passwordFlexBox]}
          placeholder="Password"
          keyboardType="numeric"
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
  iconPosition: {
    height: 221,
    width: 360,
    top: 0,
    marginLeft: -180,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
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
  splashcontentsIcon: {
    zIndex: 2,
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
    left: "50%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
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
