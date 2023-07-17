import React, { useCallback } from "react";
import {
  StyleProp,
  ViewStyle,
  View,
  StyleSheet,
  TouchableHighlight,
  Alert,
} from "react-native";
import { Image } from "expo-image";
import { Color } from "../GlobalStyles";

const FrameComponent = ({ style }) => {
  const onIcon1Click = useCallback(() => {
    Alert.alert("Settings", "");
  }, []);

  const onIcon2Click = useCallback(() => {
    Alert.alert("Home", "");
  }, []);

  const onIcon3Click = useCallback(() => {
    Alert.alert("Back", "");
  }, []);

  return (
    <View style={[styles.icon1Parent, style, styles.icon1FlexBox]}>
      <TouchableHighlight
        style={[styles.icon1, styles.icon1FlexBox]}
        underlayColor="#224092"
        onPress={onIcon1Click}
      >
        <Image
          style={[styles.galasettingsIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/galasettings.png")}
        />
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.icon1, styles.icon1FlexBox]}
        underlayColor="#224092"
        onPress={onIcon2Click}
      >
        <Image
          style={[styles.galasettingsIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/ionhome.png")}
        />
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.icon1, styles.icon1FlexBox]}
        underlayColor="#224092"
        onPress={onIcon3Click}
      >
        <Image
          style={[styles.mingcutebackLineIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/mingcutebackline.png")}
        />
      </TouchableHighlight>
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
    marginLeft: -12,
  },
  icon1: {
    flex: 1,
  },
  mingcutebackLineIcon: {
    marginLeft: -12.67,
  },
  icon1Parent: {
    backgroundColor: Color.whitesmoke,
    height: 60,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
});

export default FrameComponent;
