import * as React from "react";
import { View, StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Color } from "../GlobalStyles";

const Icon1 = ({ style }) => {
  return (
    <View style={[styles.icon1, style]}>
      <Image
        style={styles.galasettingsIcon}
        contentFit="cover"
        source={require("../assets/galasettings1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  galasettingsIcon: {
    position: "absolute",
    marginTop: -12,
    marginLeft: -11.67,
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  icon1: {
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Color.darkslateblue,
    overflow: "hidden",
  },
});

export default Icon1;
