import React, { useState, useCallback } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  TextInput,
  Text,
  Alert,
} from "react-native";
import { Image } from "expo-image";
import {
  Datepicker as RNKDatepicker,
  Button as RNKButton,
} from "@ui-kitten/components";
import DropDownPicker from "react-native-dropdown-picker";
import { Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const SignupScreen = () => {
  const [dateOfBirthDatePicker, setDateOfBirthDatePicker] = useState(undefined);
  const [genderOpen, setGenderOpen] = useState(false);
  const [genderItems, setGenderItems] = useState([
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ]);
  const navigation = useNavigation();

  const onSignupButtonClick = useCallback(() => {
    Alert.alert("The Alert!", "Yoo! I think i am a notification");
  }, []);

  return (
    <View style={[styles.signupScreen, styles.signupFlexBox]}>
      <ImageBackground
        style={[styles.kenyaFlagBackgroundIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/kenyaflagbackground.png")}
      />
      <View style={[styles.curveDesign, styles.curveDesignBg]} />
      <Image
        style={[styles.splashcontentsIcon, styles.iconPosition]}
        contentFit="contain"
        source={require("../assets/splashcontents1.png")}
      />
      <View style={styles.signupContainer}>
        <TextInput
          style={[styles.name, styles.passwordBorder]}
          placeholder="Name"
          keyboardType="default"
          secureTextEntry={false}
          placeholderTextColor="#000"
        />
        <RNKDatepicker
          date={dateOfBirthDatePicker}
          onSelect={setDateOfBirthDatePicker}
          controlStyle={styles.dateOfBirthValue}
        />
        <View style={styles.gender} placeholder="Gender">
          <DropDownPicker
            style={styles.dropdownpicker}
            open={genderOpen}
            setOpen={setGenderOpen}
            items={genderItems}
            dropDownContainerStyle={styles.genderdropDownContainer}
          />
        </View>
        <TextInput
          style={[styles.address, styles.passwordBorder]}
          placeholder="Address"
          keyboardType="default"
          placeholderTextColor="#000"
        />
        <TextInput
          style={[styles.phone, styles.passwordBorder]}
          placeholder="Phone"
          keyboardType="phone-pad"
          secureTextEntry={false}
          placeholderTextColor="#000"
        />
        <TextInput
          style={[styles.password, styles.passwordBorder]}
          placeholder="PIN"
          keyboardType="numeric"
          secureTextEntry={true}
          placeholderTextColor="#000"
        />
        <TextInput
          style={[styles.confirmPassword, styles.passwordBorder]}
          placeholder="Confirm PIN"
          keyboardType="numeric"
          secureTextEntry={true}
          placeholderTextColor="#000"
        />
        <RNKButton
          style={styles.signupButton}
          title="Click Me!"
          size="medium"
          status="primary"
          appearance="filled"
          color="#224092"
          textStyle={styles.signupButtonText}
          onLongPress={onSignupButtonClick}
        >
          Sign Up
        </RNKButton>
        <View style={[styles.signupSuggestion, styles.signupFlexBox]}>
          <Text style={[styles.alreadyHaveAn, styles.signUpTypo]}>
            Already have an account?
          </Text>
          <Button
            style={styles.login}
            title="Sign Up"
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
  dateOfBirthValue: {},
  genderdropDownContainer: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  signupButtonText: {
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
  signupFlexBox: {
    justifyContent: "center",
    alignItems: "center",
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
  curveDesignBg: {
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  passwordBorder: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    left: 36,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
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
  name: {
    top: 70,
    alignSelf: "center",
    padding: 5,
  },
  dropdownpicker: {
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  gender: {
    top: 166,
    borderStyle: "solid",
    left: 36,
    borderRadius: Border.br_8xs,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  address: {
    top: 214,
    alignSelf: "center",
    padding: 5,
  },
  phone: {
    top: 262,
    alignSelf: "center",
    padding: 5,
  },
  password: {
    top: 310,
  },
  confirmPassword: {
    top: 358,
  },
  signupButton: {
    top: 406,
    left: 30,
    paddingHorizontal: Padding.p_75xl,
    paddingVertical: Padding.p_2xs,
    borderRadius: Border.br_8xs,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  alreadyHaveAn: {
    color: Color.black,
  },
  login: {
    marginLeft: 3,
  },
  signupSuggestion: {
    top: 454,
    left: 59,
    flexDirection: "row",
    position: "absolute",
  },
  signupContainer: {
    marginLeft: -145,
    bottom: 0,
    width: 291,
    height: 538,
    zIndex: 3,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  signupScreen: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignupScreen;
