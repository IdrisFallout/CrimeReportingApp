import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color, Padding } from "../GlobalStyles";

const BottomTabsActive = () => {
  return (
    <View style={styles.bottomTabsActive}>
      <View style={styles.icon1} />
      <View style={styles.icon1} />
      <View style={styles.icon1} />
    </View>
  );
};

const styles = StyleSheet.create({
  icon1: {
    width: 113,
    display: "none",
  },
  bottomTabsActive: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.whitesmoke,
    width: 360,
    height: 60,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    alignItems: "flex-end",
    justifyContent: "space-between",
    display: "none",
  },
});

export default BottomTabsActive;
