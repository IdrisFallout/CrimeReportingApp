import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Dashboard = () => {
  return (
    <SafeAreaView style={[styles.dashboard, styles.dashboardFlexBox1]}>
      <SafeAreaView style={[styles.leftHandOptionsParent, styles.handFlexBox]}>
        <View style={styles.leftHandOptions}>
          <Image
            style={styles.leftHandOptionsChild}
            contentFit="cover"
            source={require("../assets/frame-4.png")}
          />
          <View style={styles.helloParent}>
            <Text style={[styles.hello, styles.helloTypo]}>Hello</Text>
            <Text style={[styles.idrisfallout, styles.helloTypo]}>
              IdrisFallout
            </Text>
          </View>
        </View>
        <View style={[styles.rightHandOptions, styles.handFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/basilnotificationoutline.png")}
          />
          <Image
            style={[styles.wpfstatisticsIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/wpfstatistics.png")}
          />
          <Image
            style={[styles.wpfstatisticsIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/materialsymbolsqrcodescanner.png")}
          />
        </View>
      </SafeAreaView>
      <View style={[styles.dashboardChild, styles.dashboardFlexBox]} />
      <View style={[styles.dashboardItem, styles.dashboardFlexBox]} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dashboardFlexBox1: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  handFlexBox: {
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  helloTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "800",
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  dashboardFlexBox: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  leftHandOptionsChild: {
    width: 44,
    height: 44,
  },
  hello: {
    fontSize: 24,
  },
  idrisfallout: {
    fontSize: FontSize.size_xs,
  },
  helloParent: {
    marginLeft: 10,
  },
  leftHandOptions: {
    flexDirection: "row",
    flex: 1,
  },
  wpfstatisticsIcon: {
    marginLeft: 11,
  },
  rightHandOptions: {
    paddingHorizontal: 7,
    paddingVertical: 9,
    marginLeft: 110,
  },
  leftHandOptionsParent: {
    paddingHorizontal: 12,
    paddingTop: 22,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  dashboardChild: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  dashboardItem: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  dashboard: {
    backgroundColor: Color.white,
    width: "100%",
    height: 801,
    overflow: "hidden",
    alignItems: "center",
    flex: 1,
  },
});

export default Dashboard;
