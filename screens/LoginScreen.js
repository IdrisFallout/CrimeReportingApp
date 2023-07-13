import React, { useCallback } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  Alert,
} from "react-native";
import { Button } from "@ui-kitten/components";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

const LoginScreen = () => {
  const onLoginButtonClick = useCallback(() => {
    Alert.alert("The Alert!", "Yoo! I think i am a notification");
  }, []);

  return (
    <ImageBackground
      style={[styles.loginScreenIcon, styles.logoContainerFlexBox]}
      resizeMode="cover"
      source={require("../assets/loginscreen.png")}
    >
      <Image
        style={styles.kenyaFlagBackgroundIcon}
        contentFit="cover"
        source={require("../assets/kenyaflagbackground.png")}
      />
      <View style={styles.curveDesign} />
      <View style={[styles.splashcontents, styles.splashcontentsLayout]}>
        <View style={[styles.logoContainer, styles.logoContainerFlexBox]}>
          <Image
            style={styles.logoIcon}
            contentFit="cover"
            source={require("../assets/logo1.png")}
          />
        </View>
        <Text style={[styles.login, styles.loginTypo]}>LOGIN</Text>
      </View>
      <View style={[styles.loginContainer, styles.splashcontentsLayout]}>
        <TextInput
          style={[styles.phone, styles.phoneBorder]}
          placeholder="Phone"
          keyboardType="number-pad"
          placeholderTextColor="#000"
        />
        <TextInput
          style={[styles.password, styles.phoneBorder]}
          placeholder="Password"
          keyboardType="default"
          placeholderTextColor="#000"
        />
        <Button
          style={styles.loginButton}
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
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loginButtonText: {
    fontWeight: "800",
    fontFamily: "Roboto_extrabold",
  },
  logoContainerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  splashcontentsLayout: {
    width: 360,
    position: "absolute",
    overflow: "hidden",
  },
  loginTypo: {
    fontFamily: FontFamily.robotoExtrabold,
    fontWeight: "800",
  },
  phoneBorder: {
    fontFamily: FontFamily.robotoRegular,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    fontSize: FontSize.size_xs,
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_75xl,
    borderRadius: Border.br_8xs,
    marginLeft: -109,
    left: "50%",
    backgroundColor: Color.white,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  kenyaFlagBackgroundIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 0,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  curveDesign: {
    top: 136,
    left: -12,
    borderRadius: 150,
    width: 842,
    height: 875,
    zIndex: 1,
    backgroundColor: Color.white,
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
  },
  login: {
    fontSize: 32,
    color: Color.black,
    textAlign: "center",
    marginTop: 21,
  },
  splashcontents: {
    marginLeft: -180,
    paddingTop: 53,
    zIndex: 2,
    left: "50%",
    width: 360,
    top: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  phone: {
    top: 182,
    fontSize: FontSize.size_xs,
  },
  password: {
    top: 230,
    fontSize: FontSize.size_xs,
  },
  loginButton: {
    top: 278,
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_75xl,
    borderRadius: Border.br_8xs,
    marginLeft: -109,
    left: "50%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  loginContainer: {
    top: 221,
    height: 579,
    zIndex: 3,
    left: 0,
  },
  loginScreenIcon: {
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default LoginScreen;
