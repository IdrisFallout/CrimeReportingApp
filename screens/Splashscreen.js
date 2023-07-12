import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily } from "../GlobalStyles";

const Splashscreen = () => {
  return (
    <View style={[styles.splashscreen, styles.splashscreenFlexBox]}>
      <View style={[styles.splashcontents, styles.splashscreenFlexBox]}>
        <View style={[styles.logoContainer, styles.splashscreenFlexBox]}>
          <Image
            style={styles.logoIcon}
            contentFit="cover"
            source={require("../assets/logo.png")}
          />
        </View>
        <Text style={[styles.utumishiKwaWote, styles.splashscreenFlexBox]}>
          UTUMISHI KWA WOTE
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  splashscreenFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoIcon: {
    width: 91,
    height: 91,
  },
  logoContainer: {
    borderRadius: 10,
    backgroundColor: "#224092",
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
  utumishiKwaWote: {
    fontSize: 11,
    fontStyle: "italic",
    fontWeight: "800",
    fontFamily: FontFamily.inter,
    color: "#000",
    textAlign: "center",
    display: "flex",
    width: 121,
    height: 22,
  },
  splashcontents: {
    paddingHorizontal: 61,
    paddingVertical: 67,
    overflow: "hidden",
    alignItems: "center",
  },
  splashscreen: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    alignItems: "center",
  },
});

export default Splashscreen;
