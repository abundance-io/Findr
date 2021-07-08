import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

export default function CarouselCard() {
  return (
      <ImageBackground style={styles.CarouselCard_image} source={require("../assets/ice-cream.jpg")} resizeMode="cover" >
        <View style={styles.CarouselCard_text_container} >
          <Text style={styles.CarouselCard_header} >New Ice Cream Flavour</Text>
          <Text style={styles.CarouselCard_subText} >Cold Stone</Text>
        </View>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
  
  CarouselCard_container: {
    flex: 1,
    backgroundColor: "tomato",
    alignItems: "center",
    paddingTop: 50,
  },
  CarouselCard_image: {
    // flex: 1,
    backgroundColor: "dodgerblue",
    width: 310,
    height: 200,
    justifyContent: "flex-end",
    // marginRight: 15,
  },
  CarouselCard_text_container: {
    backgroundColor: "#f3f3f3",
    padding: 10,
  },
  CarouselCard_header: {
    fontWeight: "700",
    fontSize: 18,
  }
})