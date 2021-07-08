import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'

export default function ProviderHeader() {
  return (
    <View>
      <Image 
        source={require("../assets/download.jpg")}
        style={styles.ProviderHeader_image}
        resizeMode="cover"
      />
      <View style={styles.ProviderHeader_wrapper}>
      </View>
        <View style={styles.ProviderHeader_content}>
          <View>
            <Text style={styles.ProviderHeader_header} >Domino's Pizza</Text>
            <ScrollView horizontal>
              <Text style={styles.ProviderHeader_extraInfo} >3 Rating</Text>
              <View style={{
                width: 1,
                height: '100%',
                backgroundColor: "#fff",
                marginHorizontal: 8,
              }} />
              <Text style={styles.ProviderHeader_extraInfo} >retailer</Text>
            </ScrollView>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  ProviderHeader_image: {
    height: 200,
    width: "100%",
    backgroundColor: "dodgerblue",
    overflow: "hidden",
    position: "relative",
  },
  ProviderHeader_wrapper: {
    position: "absolute",
    backgroundColor: "#000",
    opacity: .3,
    left: 0,
    top: 0,
    opacity: .3,
    width: '100%',
    height: '100%',
  },
  ProviderHeader_content: {
    position: "absolute",
    // backgroundColor: "#000",
    justifyContent: "flex-end",
    padding: 10,
    width: '100%',
    height: '100%',
  },
  ProviderHeader_header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textTransform: "capitalize",
  },
  ProviderHeader_extraInfo: {
    fontSize: 16,
    color: "white",
    textTransform: "capitalize",
    // marginRight: 10,
  }
})