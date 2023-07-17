import * as React from "react";
import { View, StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Color } from "../GlobalStyles";

const Icon2 = ({ style }) => {
  return (
    <View style={[styles.icon2, style]}>
      <Image
        style={styles.ionhomeIcon}
        contentFit="cover"
        source={require("../assets/ionhome1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ionhomeIcon: {
    position: "absolute",
    marginTop: -12,
    marginLeft: -12,
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  icon2: {
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Color.darkslateblue,
    overflow: "hidden",
  },
});

export default Icon2;
