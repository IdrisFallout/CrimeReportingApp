import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Splashscreen = () => {
  return (
    <LinearGradient
      style={[styles.splashscreen, styles.splashscreenFlexBox]}
      locations={[0, 1]}
      colors={["#f5f5f5", "rgba(0, 0, 0, 0)"]}
    >
      <View style={[styles.logoContainer, styles.splashscreenFlexBox]}>
        <Image
          style={styles.logoIcon}
          contentFit="cover"
          source={require("../assets/logo.png")}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  splashscreenFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
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
  },
  splashscreen: {
    flex: 1,
    width: "100%",
    height: 800,
    backgroundColor: "transparent",
  },
});

export default Splashscreen;
