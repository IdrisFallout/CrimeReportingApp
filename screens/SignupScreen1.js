import React, { useState, useCallback } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
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

const SignupScreen1 = () => {
  const [dOBDatePicker, setDOBDatePicker] = useState(undefined);
  const [genderOpen, setGenderOpen] = useState(false);
  const [genderItems, setGenderItems] = useState([
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ]);
  const navigation = useNavigation();

  const onLoginButtonClick = useCallback(() => {
    Alert.alert("The Alert!", "Yoo! I think i am a notification");
  }, []);

  return (
    <View style={styles.signupScreen}>
      <ImageBackground
        style={[styles.kenyaFlagBackgroundIcon, styles.signupContainerPosition]}
        resizeMode="cover"
        source={require("../assets/kenyaflagbackground.png")}
      />
      <View style={styles.curveDesign} />
      <Image
        style={[styles.kenyaFlagBackgroundIcon, styles.signupContainerPosition]}
        contentFit="contain"
        source={require("../assets/splashcontents1.png")}
      />
      <View style={[styles.signupContainer, styles.nameFlexBox]}>
        <TextInput
          style={[styles.name, styles.pinBorder]}
          placeholder="Full Name"
          keyboardType="default"
          placeholderTextColor="#000"
        />
        <View style={[styles.datePickerParent, styles.pinSpaceBlock]}>
          <RNKDatepicker
            date={dOBDatePicker}
            onSelect={setDOBDatePicker}
            controlStyle={styles.dOBDatePickerValue}
          />
        </View>
        <View style={[styles.datePickerParent, styles.pinSpaceBlock]}>
          <View style={[styles.gender, styles.pinBorder]} placeholder="Gender">
            <DropDownPicker
              style={[styles.dropdownpicker, styles.pinBorder1]}
              open={genderOpen}
              setOpen={setGenderOpen}
              items={genderItems}
              dropDownContainerStyle={styles.genderdropDownContainer}
            />
          </View>
        </View>
        <TextInput
          style={[styles.phone, styles.pinSpaceBlock]}
          placeholder="Phone"
          keyboardType="phone-pad"
          placeholderTextColor="#000"
        />
        <TextInput
          style={[styles.pin, styles.pinSpaceBlock]}
          placeholder="PIN"
          keyboardType="numeric"
          secureTextEntry={true}
          placeholderTextColor="#000"
        />
        <TextInput
          style={[styles.pin, styles.pinSpaceBlock]}
          placeholder="Confirm PIN"
          keyboardType="numeric"
          secureTextEntry={true}
          placeholderTextColor="#000"
        />
        <RNKButton
          style={[styles.loginButton, styles.pinSpaceBlock]}
          title="Click Me!"
          size="medium"
          status="primary"
          appearance="filled"
          color="#224092"
          textStyle={styles.loginButtonText}
          onLongPress={onLoginButtonClick}
        >
          Sign Up
        </RNKButton>
        <View style={[styles.signupSuggestion, styles.pinSpaceBlock]}>
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
  dOBDatePickerValue: {},
  genderdropDownContainer: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
  },
  loginButtonText: {
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
  signupContainerPosition: {
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  nameFlexBox: {
    alignSelf: "center",
    alignItems: "center",
  },
  pinBorder: {
    padding: 5,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
    width: "100%",
  },
  pinSpaceBlock: {
    marginTop: 12,
    justifyContent: "center",
  },
  pinBorder1: {
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
    marginLeft: -180,
    top: 0,
    width: 360,
    height: 221,
  },
  curveDesign: {
    top: 136,
    left: -15,
    borderRadius: Border.br_131xl,
    width: 842,
    height: 875,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  name: {
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: Color.white,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  datePickerParent: {
    alignSelf: "stretch",
  },
  dropdownpicker: {
    borderStyle: "solid",
    borderColor: "#000",
  },
  gender: {
    alignSelf: "flex-start",
    justifyContent: "center",
  },
  phone: {
    padding: 5,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
    width: "100%",
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: Color.white,
    alignSelf: "center",
    alignItems: "center",
  },
  pin: {
    padding: 5,
    borderStyle: "solid",
    borderRadius: Border.br_8xs,
    overflow: "hidden",
    width: "100%",
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: Color.white,
    alignItems: "center",
    marginTop: 12,
  },
  loginButton: {
    paddingHorizontal: Padding.p_75xl,
    paddingVertical: Padding.p_2xs,
    borderRadius: Border.br_8xs,
    marginTop: 12,
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
    alignItems: "center",
    marginTop: 12,
  },
  signupContainer: {
    marginTop: -245,
    marginLeft: -115,
    top: "50%",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_51xl,
    justifyContent: "center",
    left: "50%",
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
