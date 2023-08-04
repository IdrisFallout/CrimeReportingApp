import React, {useCallback, useState} from "react";
import { handlePostRequest } from "../reusable_functions";
import {
  View,
  ImageBackground,
  StyleSheet,
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
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');

  const onSignupButtonClick = useCallback(async () => {
    // Create the POST data object using the state variables
    const postData = {
      full_name: fullName,
      phone: phone,
      pin: pin,
      confirm_pin: confirmPin,
    };
    // all fields should not be empty
    if (fullName === '' || phone === '' || pin === '' || confirmPin === '') {
        Alert.alert('Error', 'All fields are required');
        return;
    }

    if (postData['pin'] !== postData['confirm_pin']) {
      Alert.alert('Error', 'PINs do not match');
      return;
    }
    const response = await handlePostRequest(postData, '/auth/signup');
    Alert.alert('Feedback', response.message);
    if (response.message === 'Signup successful') {
        navigation.navigate('LoginScreen');
    }
    // Clear the input fields after successful submission (if needed)
    setFullName('');
    setPhone('');
    setPin('');
    setConfirmPin('');
  }, [fullName, phone, pin, confirmPin]);

  return (
    <View style={styles.signupScreen}>
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
        source={require("../assets/splashcontents1.png")}
      />
      <View style={[styles.signupContainer, styles.nameFlexBox]}>
        <TextInput
          style={[styles.name, styles.pinBorder]}
          placeholder="Full Name"
          keyboardType="default"
          placeholderTextColor="#000"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={[styles.phone, styles.pinFlexBox]}
          placeholder="Phone"
          keyboardType="phone-pad"
          placeholderTextColor="#000"
          value={phone}
          onChangeText={setPhone}
        />
        <TextInput
          style={[styles.pin, styles.pinFlexBox]}
          placeholder="PIN"
          keyboardType="numeric"
          secureTextEntry={true}
          placeholderTextColor="#000"
          value={pin}
          onChangeText={setPin}
        />
        <TextInput
          style={[styles.pin, styles.pinFlexBox]}
          placeholder="Confirm PIN"
          keyboardType="numeric"
          secureTextEntry={true}
          placeholderTextColor="#000"
          value={confirmPin}
          onChangeText={setConfirmPin}
        />
        <RNKButton
          style={[styles.loginButton, styles.pinFlexBox]}
          title="Click Me!"
          size="medium"
          status="primary"
          appearance="filled"
          color="#224092"
          textStyle={styles.loginButtonText}
          onPress={onSignupButtonClick}
        >
          Sign Up
        </RNKButton>
        <View style={[styles.signupSuggestion, styles.pinFlexBox]}>
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
    fontFamily: "Roboto-Black",
  },
  loginBtn: {
    color: "#0678be",
    fontSize: 12,
    fontWeight: "800",
    fontFamily: "Roboto-Black",
  },
  loginBtn1: {
    position: "relative",
  },
  loginBtn2: {},
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
  nameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  pinBorder: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
  pinFlexBox: {
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoBlack,
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
    top: 0,
    width: 842,
    position: "absolute",
  },
  splashcontentsIcon: {
    marginLeft: -180,
  },
  name: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  phone: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
    alignSelf: "center",
  },
  pin: {
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
    marginLeft: -115,
    bottom: 0,
    height: 587,
    paddingTop: 180,
    paddingBottom: 120,
    alignSelf: "center",
    left: "50%",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  signupScreen: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default SignupScreen1;
