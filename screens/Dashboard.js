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
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

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

  const onIcon1Click = useCallback(() => {
    Alert.alert("Settings", "");
  }, []);

  const onIcon2Click = useCallback(() => {
    Alert.alert("Home", "");
  }, []);

  const onIcon3Click = useCallback(() => {
    Alert.alert("Back", "");
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
            style={styles.statisticsLayout}
            underlayColor="#224092"
            onPress={onNotificationClick}
          >
            <Image
              style={styles.basilnotificationOutlineIcon}
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
              style={styles.basilnotificationOutlineIcon}
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
              style={styles.basilnotificationOutlineIcon}
              contentFit="cover"
              source={require("../assets/qrcode.png")}
            />
          </TouchableHighlight>
        </View>
      </SafeAreaView>
      <ScrollView
        style={[styles.dashboardChild, styles.icon1FlexBox]}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      />
      <View style={[styles.icon1Parent, styles.parentBg]}>
        <TouchableHighlight
          style={styles.icon1FlexBox}
          underlayColor="#224092"
          onPress={onIcon1Click}
        >
          <Image
            style={[styles.galasettingsIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/galasettings.png")}
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.icon1FlexBox}
          underlayColor="#224092"
          onPress={onIcon2Click}
        >
          <Image
            style={[styles.galasettingsIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/ionhome.png")}
          />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.icon1FlexBox}
          underlayColor="#224092"
          onPress={onIcon3Click}
        >
          <Image
            style={[styles.mingcutebackLineIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/mingcutebackline.png")}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    alignItems: "center",
    justifyContent: "center",
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
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  icon1FlexBox: {
    alignSelf: "stretch",
    overflow: "hidden",
    flex: 1,
  },
  parentBg: {
    backgroundColor: Color.whitesmoke,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  iconPosition: {
    left: "50%",
    top: "50%",
    marginTop: -12,
    position: "absolute",
    height: 24,
    width: 24,
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
    top: 0,
    left: 0,
    position: "absolute",
    height: 24,
    width: 24,
    overflow: "hidden",
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
    borderRadius: Border.br_3xs,
  },
  dashboardChild: {
    borderRadius: Border.br_3xs,
  },
  galasettingsIcon: {
    marginLeft: -12,
  },
  mingcutebackLineIcon: {
    marginLeft: -12.67,
  },
  icon1Parent: {
    height: 60,
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
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
