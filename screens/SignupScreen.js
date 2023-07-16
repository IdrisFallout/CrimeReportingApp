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
      <View style={[styles.curveDesign, styles.curveDesignPosition]} />
      <Image
        style={[styles.splashcontentsIcon, styles.iconPosition]}
        contentFit="contain"
        source={require("../assets/splashcontents1.png")}
      />
      <View style={[styles.signupContainer, styles.curveDesignPosition]}>
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
        <View style={[styles.gender, styles.nameBorder]} placeholder="Gender">
          <DropDownPicker
            style={[styles.dropdownpicker, styles.passwordBorder]}
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
    left: "50%",
    top: 0,
    marginLeft: -180,
    position: "absolute",
    overflow: "hidden",
  },
  curveDesignPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  nameBorder: {
    padding: 5,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
  passwordBorder: {
    borderWidth: 1,
    borderColor: "#000",
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
    backgroundColor: Color.white,
    position: "absolute",
  },
  splashcontentsIcon: {
    zIndex: 2,
  },
  name: {
    alignSelf: "center",
    padding: 5,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: Color.white,
  },
  dateOfBirth: {
    marginTop: 12,
  },
  dropdownpicker: {
    borderStyle: "solid",
    borderColor: "#000",
  },
  gender: {
    marginTop: 12,
  },
  address: {
    marginTop: 12,
    alignSelf: "center",
    padding: 5,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: Color.white,
  },
  password: {
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: Color.white,
  },
  signupButton: {
    paddingHorizontal: Padding.p_75xl,
    paddingVertical: Padding.p_2xs,
    marginTop: 12,
    borderRadius: Border.br_8xs,
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
    flexDirection: "row",
    marginTop: 12,
  },
  signupContainer: {
    bottom: 0,
    left: 65,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_51xl,
    zIndex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  signupScreen: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.white,
  },
});

export default SignupScreen;
