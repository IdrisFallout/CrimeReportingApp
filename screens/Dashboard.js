import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Color } from "../GlobalStyles";

const Dashboard = () => {
  return <View style={styles.dashboard} />;
};

const styles = StyleSheet.create({
  dashboard: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Dashboard;
