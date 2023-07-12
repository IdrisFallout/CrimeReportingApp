import React, { useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Alert } from "react-native";
import { Button } from "@ui-kitten/components";
import { FontFamily, Border, Color } from "../GlobalStyles";

const LoginScreen = () => {
  const onLoginButtonClick = useCallback(() => {
    Alert.alert("The Alert!", "Yoo! I think i am a notification");
  }, []);

  return (
    <View style={[styles.loginScreen, styles.loginFlexBox]}>
      <View style={[styles.splashcontents, styles.loginFlexBox]}>
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
        color="#003194"
        textStyle={styles.loginButtonText}
        onLongPress={onLoginButtonClick}
      >
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  loginButtonText: {
    fontWeight: "800",
    fontFamily: "Inter",
  },
  loginFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  loginTypo: {
    fontFamily: FontFamily.inter,
    fontWeight: "800",
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
    position: "absolute",
    marginLeft: -180,
    top: 0,
    left: "50%",
    width: 360,
    paddingTop: 53,
    zIndex: 0,
  },
  loginButton: {
    borderRadius: 5,
    paddingHorizontal: 94,
    paddingVertical: 11,
    zIndex: 1,
  },
  loginScreen: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default LoginScreen;
