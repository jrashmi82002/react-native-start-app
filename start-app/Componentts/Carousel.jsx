import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
const Carousel = () => {
  const images = [
    "https://source.unsplash.com/1024x768/?tree",
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
  ];
  return (
    <SafeAreaView>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor="white"
        inactiveDotColor="#FFFFF1"
        ImageComponentStyle={{ margin: "2%" }}
        // onCurrentImagePressed={(index) => console.log(`image ${index} pressed`)}
        // currentImageEmitter={(index) => console.log(`current pos is: ${index}`)}
      />
    </SafeAreaView>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
