import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Button } from "@rneui/themed";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Dashboard = () => {
  return (
    <View style={[styles.dashboard, styles.dashboardFlexBox1]}>
      <View style={[styles.leftHandOptionsParent, styles.dashboardFlexBox]}>
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
        <View style={[styles.rightHandOptions, styles.dashboardFlexBox1]}>
          <Image
            radius="5"
            iconPosition="left"
            type="clear"
            color="#fff"
            contentFit="cover"
            source={require("../assets/basilnotificationoutline.png")}
            containerStyle={styles.basilnotificationOutlineIconBtn}
            buttonStyle={styles.basilnotificationOutlineIconBtn1}
          />
          <Image
            style={styles.wpfstatisticsIcon}
            contentFit="cover"
            source={require("../assets/wpfstatistics.png")}
          />
          <Image
            radius="5"
            iconPosition="left"
            type="clear"
            color="#fff"
            contentFit="cover"
            source={require("../assets/materialsymbolsqrcodescanner.png")}
            containerStyle={styles.materialSymbolsqrCodeScannIconBtn}
            buttonStyle={styles.materialSymbolsqrCodeScannIconBtn1}
          />
        </View>
      </View>
      <View style={[styles.dashboardChild, styles.dashboardFlexBox]} />
      <View style={[styles.dashboardItem, styles.dashboardFlexBox]} />
    </View>
  );
};

const styles = StyleSheet.create({
  basilnotificationOutlineIconBtn: {
    position: "relative",
  },
  basilnotificationOutlineIconBtn1: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  materialSymbolsqrCodeScannIconBtn: {
    position: "relative",
  },
  materialSymbolsqrCodeScannIconBtn1: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  dashboardFlexBox1: {
    alignItems: "center",
    flex: 1,
  },
  dashboardFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  helloTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.roboto,
    fontWeight: "800",
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
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  rightHandOptions: {
    paddingHorizontal: 7,
    paddingVertical: 9,
    justifyContent: "space-between",
    marginLeft: 124,
    flexDirection: "row",
  },
  leftHandOptionsParent: {
    paddingHorizontal: 12,
    paddingTop: 22,
    justifyContent: "center",
    flexDirection: "row",
  },
  dashboardChild: {
    justifyContent: "flex-end",
    flex: 1,
  },
  dashboardItem: {
    justifyContent: "flex-end",
  },
  dashboard: {
    backgroundColor: Color.white,
    width: "100%",
    height: 801,
    justifyContent: "flex-end",
    overflow: "hidden",
  },
});

export default Dashboard;
