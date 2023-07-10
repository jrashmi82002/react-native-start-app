import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from "react-native";
import SearchBar from "../SearchBar";
// import Carousel from "../Carousel";
import DataShow from "../DataShow";
import Contact from "./Contact";
import { firebase_auth } from "../../FirebaseConfig";

export default function HomePage({ navigation }) {
  return (
    <SafeAreaView>
      {/* Search Bar */}
      <SearchBar />
      {/* Carousel */}
      <View>
        {/* Images in react */}
        <Image
          // source={require("../../assets/favicon.png")}
          source={{ uri: "https://source.unsplash.com/1024x768/?tree" }}
        />
      </View>
      {/* <Carousel /> */}
      {/* Button/ touchables */}
      <ScrollView horizontal>
        <TouchableHighlight>
          <Text
            style={style.txt}
            onPress={() => {
              navigation.navigate("Contact");
            }}
          >
            Contact
          </Text>
        </TouchableHighlight>
        <TouchableOpacity>
          <Text
            style={style.txt}
            onPress={() => {
              navigation.navigate("Datashow");
            }}
          >
            DataShow
          </Text>
        </TouchableOpacity>
        <TouchableNativeFeedback>
          <Text
            style={style.txt}
            onPress={() => {
              navigation.navigate("Details");
            }}
          >
            Details
          </Text>
        </TouchableNativeFeedback>
        <Button onPress={() => firebase_auth.signOut()} title="logout" />
      </ScrollView>
      <TouchableWithoutFeedback>
        <Text>Hiiiii</Text>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  txt: {
    width: 100,
    backgroundColor: "#0000f1",
    padding: 5,
    color: "white",
  },
});
