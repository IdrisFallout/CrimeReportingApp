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
      <SafeAreaView style={[styles.dashboardChild, styles.dashboardFlexBox]} />
      <SafeAreaView style={[styles.dashboardItem, styles.dashboardFlexBox]} />
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
  dashboardFlexBox: {
    justifyContent: "space-between",
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
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 12,
    paddingVertical: 0,
    alignSelf: "stretch",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  dashboardChild: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
  },
  dashboardItem: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    alignItems: "flex-end",
    justifyContent: "space-between",
    backgroundColor: Color.white,
  },
  dashboard: {
    width: "100%",
    height: 801,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Dashboard;
