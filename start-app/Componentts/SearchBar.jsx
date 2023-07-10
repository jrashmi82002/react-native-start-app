import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const SearchBar = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          // width: 350,
          flexDirection: "row",
          borderWidth: 1,
          margin: 2,
          padding: 2,
          borderRadius: 5,
        }}
      >
        <TextInput style={{ width: 320 }} placeholder="Search from here" />
        <AntDesign name="search1" size={24} color="black" />
      </View>
    </SafeAreaView>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
