import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

export default function ProductList() {
  return (
    <View style={styles.ProductList_container} >
      <View style={styles.ProductList_content_container} >
        <Image 
          source={require("../assets/ice-cream.jpg")}
          style={styles.ProductList_image}
        />
        <View style={styles.ProductList_text_container}>
          <Text style={styles.ProductList_productName}>Colgate optical white</Text>
          <View style={styles.ProductList_rating_container}>
            <Text style={styles.ProductList_rating}>lekan</Text>
            <Text style={styles.ProductList_reviews}>is a boss</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  ProductList_container: {
    // backgroundColor: "tomato",
    margin: 10,
  },
  ProductList_content_container: {
    flexDirection: "row",
    alignItems: "center"
  },
  ProductList_image: {
    width: width / 4,
    height: width / 4,
    marginRight: 10,
  },
  ProductList_text_container: {

  },
  ProductList_productName: {
    textTransform: "capitalize",
    fontSize: 16,
    fontWeight: "bold",
  },
  ProductList_rating_container: {
  },
})