import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import Button from "./Button";
import IconButton from "./IconButton"

const DATA = [
  {
    id: "1",
    quantity: "",
    value: "Dice Eats",
  },
  {
    id: "2",
    quantity: 2.4,
    value: " Rating",
  },
  {
    id: "3",
    quantity: 5,
    value: " Reviews",
  },
];

export default function ProductCard() {
  const ItemSeperator = () => (
    <View style={{
      width: 1,
      height: '100%',
      backgroundColor: "#585858",
      marginHorizontal: 8,
    }} 
    />
  )
  return (
    <>
      <View style={styles.ProductModal_horizontalContent}>
        <View style={styles.ProductModal_imageContainer}>
          <Image source={{
            width: 150,
            height: 225,
            uri: "https://picsum.photos/200/300.jpg" }
          }  style={styles.ProductModal_image} />
        </View>
        <View style={styles.ProductModal_ProductInfo_container}>
          <Text numberOfLines={2} style={styles.ProductModal_header} >
            96 Crayon Piece Colour Set For Kids Of All Ages
          </Text>
          <View>
            <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            >
              <View style={styles.ProductModal_moreInfo_container}>
                <Text style={styles.ProductModal_extraInfo} >
                  {'Dice Eats'}
                </Text>
                <ItemSeperator />
                <Text style={styles.ProductModal_extraInfo} >
                  {`${2.5} Rating`}
                </Text>
                <ItemSeperator />
                <Text style={styles.ProductModal_extraInfo} >
                  {`${5} Reviews`}
                </Text>
              </View>
            </ScrollView>
            <Text numberOfLines={3} style={styles.ProductModal_productInfo} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            </Text>
          </View>
        </View>
      </View>
      
    </>
  )
}

const styles = StyleSheet.create({
  
  ProductModal_horizontalContent: {
    flexDirection: "row",
    width: '100%',
    flex: 1,
  },
  
  ProductModal_imageContainer: {
    flex: .45,
    height: '100%',
  },
  ProductModal_image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    backgroundColor: 'dodgerblue',
  },
  ProductModal_ProductInfo_container: {
    flex: 1,
    paddingLeft: 15,
    // backgroundColor: "dodgerblue",
    overflow: "hidden"
  },
  ProductModal_header: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: "capitalize",
  },
  ProductModal_moreInfo_container: {
    marginVertical: 3,
    flexDirection: "row"
  },
  ProductModal_extraInfo: {
    fontSize: 16,
    color: "#585858"
  },
  ProductModal_productInfo: {
    fontSize: 14,
  },
})