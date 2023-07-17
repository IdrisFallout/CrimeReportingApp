import React, { useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Dashboard = () => {
  const onNotificationClick = useCallback(() => {
    Alert.alert("Notification", "Showing notification");
  }, []);

  const onStatisticsClick = useCallback(() => {
    Alert.alert("Notification", "Showing report");
  }, []);

  const onQrCodeClick = useCallback(() => {
    Alert.alert("Showing QR code", "");
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
          <TouchableHighlight
            style={[styles.notification, styles.statisticsLayout]}
            underlayColor="#224092"
            onPress={onNotificationClick}
          >
            <Image
              style={[
                styles.basilnotificationOutlineIcon,
                styles.statisticsLayout,
              ]}
              contentFit="cover"
              source={require("../assets/notification.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.statistics, styles.statisticsLayout]}
            underlayColor="#224092"
            onPress={onStatisticsClick}
          >
            <Image
              style={[
                styles.basilnotificationOutlineIcon,
                styles.statisticsLayout,
              ]}
              contentFit="cover"
              source={require("../assets/statistics.png")}
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.statistics, styles.statisticsLayout]}
            underlayColor="#4092ff"
            onPress={onQrCodeClick}
          >
            <Image
              style={[
                styles.basilnotificationOutlineIcon,
                styles.statisticsLayout,
              ]}
              contentFit="cover"
              source={require("../assets/qrcode.png")}
            />
          </TouchableHighlight>
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
  statisticsLayout: {
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
  basilnotificationOutlineIcon: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  notification: {
    borderRadius: Border.br_8xs,
    width: 24,
  },
  statistics: {
    marginLeft: 11,
    borderRadius: Border.br_8xs,
    width: 24,
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
