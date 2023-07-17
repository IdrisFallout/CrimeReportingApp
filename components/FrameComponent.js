import * as React from "react";
import { StyleProp, ViewStyle, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Border, Color, Padding } from "../GlobalStyles";

const FrameComponent = ({ style }) => {
  return (
    <View style={[styles.icon1Parent, style, styles.icon1FlexBox]}>
      <View style={[styles.icon1, styles.icon1FlexBox]}>
        <Image
          style={[styles.galasettingsIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/galasettings.png")}
        />
      </View>
      <View style={[styles.icon1, styles.icon1FlexBox]}>
        <Image
          style={[styles.galasettingsIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/ionhome.png")}
        />
      </View>
      <View style={[styles.icon1, styles.icon1FlexBox]}>
        <Image
          style={[styles.mingcutebackLineIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/mingcutebackline.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon1FlexBox: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  iconPosition: {
    height: 24,
    width: 24,
    left: "50%",
    top: "50%",
    marginTop: -12,
    position: "absolute",
    overflow: "hidden",
  },
  galasettingsIcon: {
    marginLeft: -11.67,
  },
  icon1: {
    flex: 1,
  },
  mingcutebackLineIcon: {
    marginLeft: -12.33,
  },
  icon1Parent: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whitesmoke,
    height: 60,
    flexDirection: "row",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
});

export default FrameComponent;
