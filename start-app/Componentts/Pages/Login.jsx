import {
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { firebase_auth, firebase_google_auth } from "../../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = firebase_auth;

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setTimeout(() => {
        alert("SignUp complete");
      }, 1000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const logIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      // alert("Logged In");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, firebase_google_auth);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <KeyboardAvoidingView behavior="padding">
        <Text>Login</Text>
        <TextInput
          value={email}
          autoCapitalize="none"
          placeholder="email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          value={password}
          autoCapitalize="none"
          secureTextEntry={true}
          placeholder="password"
          onChangeText={(text) => setPassword(text)}
        />
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <Button title="LogIn" onPress={logIn} />
            <Button title="SignUp" onPress={signUp} />
            <Button title="Login with Google" onPress={signInWithGoogle} />
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
