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
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

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
      <View style={styles.curveDesign} />
      <Image
        style={[styles.splashcontentsIcon, styles.iconPosition]}
        contentFit="contain"
        source={require("../assets/splashcontents1.png")}
      />
      <View style={[styles.signupContainer, styles.createAccountPosition]}>
        <TextInput
          style={[styles.name, styles.nameBorder]}
          placeholder="Name"
          keyboardType="default"
          secureTextEntry={false}
          placeholderTextColor="#000"
        />
        <RNKDatepicker
          style={styles.dateOfBirth}
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
          style={[styles.address, styles.nameBorder]}
          placeholder="Address"
          keyboardType="default"
          placeholderTextColor="#000"
        />
        <TextInput
          style={[styles.address, styles.nameBorder]}
          placeholder="Phone"
          keyboardType="phone-pad"
          secureTextEntry={false}
          placeholderTextColor="#000"
        />
        <TextInput
          style={[styles.password, styles.nameBorder]}
          placeholder="PIN"
          keyboardType="numeric"
          secureTextEntry={true}
          placeholderTextColor="#000"
        />
        <TextInput
          style={[styles.password, styles.nameBorder]}
          placeholder="PIN"
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
          Create Account
        </RNKButton>
        <View style={[styles.signupSuggestion, styles.signupFlexBox]}>
          <Text style={[styles.alreadyHaveAn, styles.createAccountTypo]}>
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
  createAccountPosition: {
    left: "50%",
    position: "absolute",
  },
  nameBorder: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
  createAccountTypo: {
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
    alignSelf: "center",
    padding: 5,
  },
  dateOfBirth: {
    marginTop: 12,
  },
  dropdownpicker: {
    borderWidth: 1,
    borderColor: "#000",
    borderStyle: "solid",
    backgroundColor: Color.white,
  },
  gender: {
    marginTop: 12,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  address: {
    marginTop: 12,
    alignSelf: "center",
    padding: 5,
  },
  password: {
    marginTop: 12,
  },
  signupButton: {
    width: 272,
    height: 36,
    marginTop: 12,
    borderRadius: Border.br_8xs,
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
    marginTop: 12,
  },
  signupContainer: {
    marginLeft: -166,
    bottom: 0,
    paddingHorizontal: Padding.p_11xl,
    paddingTop: 70,
    paddingBottom: 115,
    zIndex: 3,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  signupScreen: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default SignupScreen;
