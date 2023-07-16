import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Color } from "../GlobalStyles";

const Dashboard = () => {
  return (
    <View style={styles.dashboard}>
      <View style={[styles.leftHandOptionsParent, styles.dashboardFlexBox]}>
        <View style={styles.leftHandOptions} />
        <View style={styles.leftHandOptions} />
      </View>
      <View style={[styles.dashboardChild, styles.dashboardFlexBox]} />
      <View style={[styles.dashboardItem, styles.dashboardFlexBox]} />
    </View>
  );
};

const styles = StyleSheet.create({
  dashboardFlexBox: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  leftHandOptions: {
    width: 108,
    display: "none",
  },
  leftHandOptionsParent: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingTop: 22,
    justifyContent: "space-between",
  },
  dashboardChild: {
    flex: 1,
    alignSelf: "stretch",
  },
  dashboardItem: {
    height: 68,
  },
  dashboard: {
    backgroundColor: Color.white,
    width: "100%",
    height: 801,
    overflow: "hidden",
    flex: 1,
  },
});

export default Dashboard;
