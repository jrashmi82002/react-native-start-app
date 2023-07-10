import { StatusBar, setStatusBarStyle } from "expo-status-bar";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import HomePage from "./Componentts/Pages/HomePage.jsx";
import RoutesFire from "./Componentts/Pages/RoutesFire.tsx";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Componentts/Pages/Login.jsx";
import Contact from "./Componentts/Pages/Contact.jsx";
import DataShow from "./Componentts/DataShow.jsx";
import Details from "./Componentts/Pages/Details.jsx";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    //   {/* status bar */}
    //   <StatusBar
    //     animated={true}
    //     backgroundColor="#61dafb"
    //     barStyle={setStatusBarStyle}
    //     hidden={true}
    //   />
    //   <View>
    //     <Text
    //       style={{
    //         textAlign: "center",
    //         backgroundColor: "black",
    //         color: "white",
    //       }}
    //     >
    //       {" "}
    //       Welcome to the Start App
    //     </Text>
    //   </View>
    //   <ScrollView>
    //     <RoutesFire />
    //   </ScrollView>
    // </SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="App" component={HomePage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Start" component={RoutesFire} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Datashow" component={DataShow} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
    rowGap: 2,
    // justifyContent: "center",

    //  ...Platform.select({
    //   ios: {
    //     backgroundColor: 'red',
    //   },
    //   android: {
    //     backgroundColor: 'green',
    //   },
    //   default: {
    //     // other platforms, web for example
    //     backgroundColor: 'blue',
    //   }
    // })
  },
});
