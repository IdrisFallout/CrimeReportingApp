import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Dashboard = () => {
  return (
    <View style={styles.dashboard}>
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
      <SafeAreaView style={styles.dashboardChild} />
      <SafeAreaView style={[styles.dashboardItem, styles.dashboardItemBg]} />
    </View>
  );
};

const styles = StyleSheet.create({
  handFlexBox: {
    justifyContent: "space-around",
    flexDirection: "row",
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
  dashboardItemBg: {
    backgroundColor: Color.whitesmoke,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  leftHandOptionsChild: {
    width: 44,
    height: 41,
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
    alignItems: "center",
  },
  leftHandOptionsParent: {
    paddingHorizontal: 12,
    paddingVertical: 0,
    backgroundColor: Color.whitesmoke,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  dashboardChild: {
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
  dashboardItem: {
    height: 100,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  dashboard: {
    backgroundColor: Color.white,
    width: "100%",
    height: 801,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default Dashboard;
