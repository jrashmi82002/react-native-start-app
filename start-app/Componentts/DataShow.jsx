import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const DataShow = () => {
  const datax = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const persons = [
    {
      id: "1",
      name: "Earnest Green",
    },
    {
      id: "2",
      name: "Winston Orn",
    },
    {
      id: "3",
      name: "Carlton Collins",
    },
    {
      id: "4",
      name: "Malcolm Labadie",
    },
    {
      id: "5",
      name: "Michelle Dare",
    },
    {
      id: "6",
      name: "Carlton Zieme",
    },
    {
      id: "7",
      name: "Jessie Dickinson",
    },
    {
      id: "8",
      name: "Julian Gulgowski",
    },
    {
      id: "9",
      name: "Ellen Veum",
    },
    {
      id: "10",
      name: "Lorena Rice",
    },

    {
      id: "11",
      name: "Carlton Zieme",
    },
    {
      id: "12",
      name: "Jessie Dickinson",
    },
    {
      id: "13",
      name: "Julian Gulgowski",
    },
    {
      id: "14",
      name: "Ellen Veum",
    },
    {
      id: "15",
      name: "Lorena Rice",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* map in react native */}
        <ScrollView horizontal>
          {datax.map((item) => {
            return (
              <View>
                <Text
                  key={item}
                  style={{ width: 100, height: 100, marginTop: 10 }}
                >
                  {item}
                </Text>
              </View>
            );
          })}
        </ScrollView>
        {/* map of objects */}
        <ScrollView style={{ height: 50, marginBottom: 20 }}>
          {persons.map((person) => {
            return (
              <View>
                <Text>{person.name}</Text>
              </View>
            );
          })}
        </ScrollView>
        {/* flatlist in react native */}

        <FlatList
          data={datax}
          renderItem={({ item }) => (
            <View>
              <Text>Name: {item} </Text>
              <Image
                style={{ width: "100%", margin: 5 }}
                // source={require("../assets/favicon.png")}
                source={{ uri: "https://source.unsplash.com/1024x768/?tree" }}
              />
            </View>
          )}
          keyExtractor={(item) => item}
          horizontal
        />
      </View>
    </SafeAreaView>
  );
};

export default DataShow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffff",
    justifyContent: "flex-start",
    // justifyContent: "center",
  },
});
