import React, { useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Button } from "@rneui/themed";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const Dashboard = () => {
  const onNotificationIconClick = useCallback(() => {
    Alert.alert("Notification", "Show all notifications");
  }, []);

  const onStatisticsIconClick = useCallback(() => {
    Alert.alert("Notification", "Showing previous records");
  }, []);

  const onQrCodeIconClick = useCallback(() => {
    Alert.alert("Notification", "Showing QR code scanner");
  }, []);

  const onMaterialSymbolsqrCodeScannClick = useCallback(() => {
    Alert.alert("Notification", "QR Scanner 2.0");
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
          <Image
            radius="5"
            iconPosition="left"
            type="clear"
            contentFit="cover"
            source={require("../assets/notification.png")}
            onPress={onNotificationIconClick}
            containerStyle={styles.notificationIconBtn}
            buttonStyle={styles.notificationIconBtn1}
          />
          <Image
            style={styles.statisticsIcon}
            radius="5"
            iconPosition="left"
            type="clear"
            contentFit="cover"
            source={require("../assets/statistics.png")}
            onPress={onStatisticsIconClick}
            containerStyle={styles.statisticsIconBtn}
            buttonStyle={styles.statisticsIconBtn1}
          />
          <Image
            style={styles.statisticsIcon}
            radius="5"
            iconPosition="left"
            type="clear"
            contentFit="cover"
            source={require("../assets/qrcode.png")}
            onPress={onQrCodeIconClick}
            containerStyle={styles.qrCodeIconBtn}
            buttonStyle={styles.qrCodeIconBtn1}
          />
        </View>
      </SafeAreaView>
      <ScrollView
        style={styles.materialSymbolsqrCodeScannWrapper}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <Pressable
          style={styles.materialSymbolsqrCodeScann}
          onPress={onMaterialSymbolsqrCodeScannClick}
        >
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
      </ScrollView>
      <SafeAreaView style={[styles.dashboardChild, styles.dashboardChildBg]} />
    </View>
  );
};

const styles = StyleSheet.create({
  notificationIconBtn: {
    position: "relative",
  },
  notificationIconBtn1: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  statisticsIconBtn: {
    position: "relative",
  },
  statisticsIconBtn1: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  qrCodeIconBtn: {
    position: "relative",
  },
  qrCodeIconBtn1: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  frameScrollViewContent: {
    flexDirection: "column",
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
  dashboardChildBg: {
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
  statisticsIcon: {
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
  vectorIcon: {
    position: "absolute",
    height: "83.33%",
    width: "83.33%",
    top: "8.33%",
    right: "8.33%",
    bottom: "8.33%",
    left: "8.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  materialSymbolsqrCodeScann: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  materialSymbolsqrCodeScannWrapper: {
    padding: 10,
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
  },
  dashboardChild: {
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
