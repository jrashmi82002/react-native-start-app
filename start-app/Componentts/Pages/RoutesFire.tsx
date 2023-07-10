import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login.jsx";
import HomePage from "./HomePage.jsx";
import { User, onAuthStateChanged } from "firebase/auth";
import { firebase_auth } from "../../FirebaseConfig";
import Contact from "./Contact.jsx";
const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <NavigationContainer>
      <InsideStack.Navigator>
      <InsideStack.Screen
        name="Home"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <InsideStack.Screen
        name="Conatct"
        component={Contact}
        options={{ headerShown: false }}
      />
    </InsideStack.Navigator>
    </NavigationContainer>
  );
}

const RoutesFire = () => {

  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    onAuthStateChanged(firebase_auth, (user) => {
      
        // alert(user?`Welcome ${user?.email}`:'Hey! Login to explore');
      
      setUser(user);
    });
  }, []);
  return (
      <InsideStack.Navigator>
      {user? <Stack.Screen name="App" component={HomePage} options={{headerShown:false}}/>:
     <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/> }
      </InsideStack.Navigator>
  );
};

export default RoutesFire;

const styles = StyleSheet.create({});
