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

export default function LocationCard() {
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
    <View style={styles.modalView}>
      <View style={styles.modalView_exitButton_container}>
        <View style={styles.modalView_exitButton} />
      </View>
      <View style={styles.LocationModal_horizontalContent}>
        <View style={styles.LocationModal_imageContainer}>
          <Image source={{
            width: 150,
            height: 225,
            uri: "https://images.unsplash.com/photo-1547630134-82994c94845d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80" }
          }  style={styles.LocationModal_image} />
        </View>
        <View style={styles.LocationModal_locationInfo_container}>
          <Text numberOfLines={1} style={styles.LocationModal_header} >
            Domino's pizza
          </Text>
          <View>
            <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            >
              <View style={styles.LocationModal_moreInfo_container}>
                {/* <Text style={styles.LocationModal_extraInfo} >
                  {'Dice Eats'}
                </Text>
                <ItemSeperator /> */}
                <Text style={styles.LocationModal_extraInfo} >
                  {`${2.5} Credibility`}
                </Text>
                <ItemSeperator />
                <Text style={styles.LocationModal_extraInfo} >
                  {`${5} Rating`}
                </Text>
              </View>
            </ScrollView>
            <Text numberOfLines={3} style={styles.LocationModal_locationInfo} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.LocationModal_buttonContainer}>
          <Button style={{flex: -0.3}} icon="location-arrow">locate</Button>
          {/* <IconButton style={{marginLeft: 5,}} icon="bookmark">bookmark</IconButton> */}
          <IconButton style={{marginLeft: 5,}} icon="eye">view</IconButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: "tomato",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    // position: "absolute",
    // bottom: 0,
    backgroundColor: 'tomato',
    // margin: 20,
    height: 250,
    width: "100%",
    // flex: 0.3,
    backgroundColor: "white",
    borderRadius: 20,
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
    paddingHorizontal: 15,
    paddingTop: 0,
    // paddingBottom: 50,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalView_exitButton_container: {
    // backgroundColor: "tomato",
    height: 40,
    justifyContent: "center",
    alignItems: 'center',
  },
  modalView_exitButton: {
    width: 45, 
    height: 5,
    backgroundColor: "#AFAFAF",
    borderRadius: 50,
    // alignSelf: 'center',
  },
  LocationModal_horizontalContent: {
    flexDirection: "row",
    width: '100%',
    flex: .8,
  },
  LocationModal_buttonContainer: {
    flexDirection: "row",
    width: '100%',
    flex: .5, 
    alignItems: "center", 
    // backgroundColor: "tomato"
  },
  LocationModal_imageContainer: {
    flex: 1,
    height: '100%',
    borderRadius: 4,
    overflow: "hidden",
  },
  LocationModal_image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    backgroundColor: 'dodgerblue',
  },
  LocationModal_locationInfo_container: {
    flex: 1,
    paddingLeft: 15,
    // backgroundColor: "dodgerblue",
    overflow: "hidden"
  },
  LocationModal_header: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: "capitalize",
  },
  LocationModal_moreInfo_container: {
    marginVertical: 3,
    flexDirection: "row"
  },
  LocationModal_extraInfo: {
    fontSize: 16,
    color: "#585858"
  },
  LocationModal_locationInfo: {
    fontSize: 14,
  },
})
