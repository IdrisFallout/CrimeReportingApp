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
    <View style={[styles.loginScreen, styles.loginScreenFlexBox]}>
      <ImageBackground
        style={[styles.kenyaFlagBackgroundIcon, styles.loginContainerFlexBox]}
        resizeMode="cover"
        source={require("../assets/kenyaflagbackground.png")}
      />
      <View style={styles.curveDesign} />
      <View style={[styles.splashcontents, styles.splashcontentsPosition]}>
        <View style={[styles.logoContainer, styles.loginScreenFlexBox]}>
          <Image
            style={styles.logoIcon}
            contentFit="cover"
            source={require("../assets/logo1.png")}
          />
        </View>
        <Text style={[styles.login, styles.loginTypo]}>LOGIN</Text>
      </View>
      <View style={[styles.loginContainer, styles.loginContainerFlexBox]}>
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
  loginScreenFlexBox: {
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
  },
  loginContainerFlexBox: {
    alignSelf: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  splashcontentsPosition: {
    height: 221,
    width: 360,
    left: "50%",
    top: 0,
    marginLeft: -180,
    position: "absolute",
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
    height: 221,
    width: 360,
    left: "50%",
    top: 0,
    marginLeft: -180,
    position: "absolute",
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
  },
  login: {
    fontSize: 32,
    color: Color.black,
    textAlign: "center",
    marginTop: 21,
  },
  splashcontents: {
    paddingTop: 53,
    zIndex: 2,
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
  },
  phone: {
    borderRadius: Border.br_8xs,
    padding: 5,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    alignSelf: "center",
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
    paddingHorizontal: 70,
    paddingTop: 260,
    paddingBottom: 189,
    zIndex: 3,
    alignItems: "center",
    alignSelf: "center",
  },
  loginScreen: {
    flex: 1,
    height: 800,
    width: "100%",
    backgroundColor: Color.white,
    overflow: "hidden",
  },
});

export default LoginScreen;
