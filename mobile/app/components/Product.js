import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'

export default function Product({url, product_name="colgate toothpaste", price="#500", style}) {
  return (
    <View style={[styles.ProductDetails_container, style]} >
      <Image source={{
        width: 150,
        height: 225,
        uri: url }
      }  style={styles.Product_image} />
      <View style={styles.ProductDetails_container}>
        <Text numberOfLines={2} style={styles.ProductDetails_header} >{product_name}</Text>
        <Text style={styles.ProductDetails_price}>{price}</Text>
      </View>
    </View>
  )
}

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  ProductDetails_container: {

  },
  Product_image: {
    width: '100%',
    height: 180,
    backgroundColor: "dodgerblue",
  },
  ProductDetails_container: {
    width: width / 3.3,
  },
  ProductDetails_header: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  ProductDetails_price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: "red"
  },
})
