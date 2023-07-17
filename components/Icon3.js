import * as React from "react";
import { View, StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Color } from "../GlobalStyles";

const Icon3 = ({ style }) => {
  return (
    <View style={[styles.icon3, style]}>
      <Image
        style={styles.mingcutebackLineIcon}
        contentFit="cover"
        source={require("../assets/mingcutebackline1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mingcutebackLineIcon: {
    position: "absolute",
    marginTop: -12,
    marginLeft: -12.33,
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  icon3: {
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: Color.darkslateblue,
    overflow: "hidden",
  },
});

export default Icon3;
