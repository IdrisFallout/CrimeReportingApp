import React, { useCallback } from "react";
import { View, StyleSheet, Text, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Button } from "@rneui/themed";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Dashboard = () => {
  const onNotificationClick = useCallback(() => {
    Alert.alert("Notification", "Show all notifications");
  }, []);

  const onQrCodeClick = useCallback(() => {
    Alert.alert("Notification", "Showing QR code scanner");
  }, []);

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
            <Text style={[styles.hello, styles.helloTypo]}>Hello,</Text>
            <Text style={[styles.idrisfallout, styles.helloTypo]}>
              IdrisFallout
            </Text>
          </View>
        </View>
        <View style={[styles.rightHandOptions, styles.handFlexBox]}>
          <Button
            radius="5"
            iconPosition="left"
            type="clear"
            icon={{ name: "bell-outline", type: "material-community" }}
            onPress={onNotificationClick}
            containerStyle={styles.notificationBtn}
            buttonStyle={styles.notificationBtn1}
          />
          <Button
            style={styles.statistics}
            radius="5"
            iconPosition="left"
            type="clear"
            icon={{ name: "chart-line", type: "material-community" }}
            onPress={() => {}}
            containerStyle={styles.statisticsBtn}
            buttonStyle={styles.statisticsBtn1}
          />
          <Button
            style={styles.statistics}
            radius="5"
            iconPosition="left"
            type="clear"
            icon={{ name: "qrcode-scan", type: "material-community" }}
            onPress={onQrCodeClick}
            containerStyle={styles.qrCodeBtn}
            buttonStyle={styles.qrCodeBtn1}
          />
        </View>
      </SafeAreaView>
      <ScrollView
        style={styles.dashboardChild}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      />
      <SafeAreaView style={[styles.dashboardItem, styles.dashboardItemBg]} />
    </View>
  );
};

const styles = StyleSheet.create({
  notificationBtn: {
    position: "relative",
  },
  notificationBtn1: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  statisticsBtn: {
    position: "relative",
  },
  statisticsBtn1: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  qrCodeBtn: {
    position: "relative",
  },
  qrCodeBtn1: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  frameScrollViewContent: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
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
  dashboardItemBg: {
    backgroundColor: Color.whitesmoke,
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
  statistics: {
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
    paddingVertical: 5,
    backgroundColor: Color.whitesmoke,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  dashboardChild: {
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
  },
  dashboardItem: {
    height: 60,
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
