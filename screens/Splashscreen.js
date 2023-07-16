import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const Splashscreen = () => {
  return (
    <View style={[styles.splashscreen, styles.splashscreenFlexBox]}>
      <View style={[styles.splashcontents, styles.splashscreenFlexBox]}>
        <Image
          style={styles.logoContainerIcon}
          contentFit="cover"
          source={require("../assets/logo-container.png")}
        />
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
  logoContainerIcon: {
    borderRadius: 10,
    width: 118,
    height: 118,
    overflow: "hidden",
  },
  utumishiKwaWote: {
    fontSize: 11,
    fontStyle: "italic",
    fontWeight: "800",
    fontFamily: FontFamily.roboto,
    color: Color.black,
    textAlign: "center",
    display: "flex",
    width: 121,
    height: 22,
  },
  splashcontents: {
    paddingHorizontal: 61,
    paddingVertical: 67,
    overflow: "hidden",
  },
  splashscreen: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Splashscreen;
