const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LoginScreen from "./screens/LoginScreen";
import Splashscreen from "./screens/Splashscreen";
import Dashboard from "./screens/Dashboard";
import SignupScreen from "./screens/SignupScreen";
import SettingsScreen from "./screens/SettingsScreen";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-BlackItalic": require("./assets/fonts/Roboto-BlackItalic.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="LoginScreen"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Splashscreen"
                component={Splashscreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignupScreen"
                component={SignupScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                  name="SettingsScreen"
                  component={SettingsScreen}
                  options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : (
            <Splashscreen />
          )}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
