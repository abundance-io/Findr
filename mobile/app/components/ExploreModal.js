import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native'

const DATA = [
  {
    id: '0',
    url: 'https://images.unsplash.com/photo-1548861297-c596a8c918e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    location_name: "Domino's pizza",
    credibility: "5",
  },
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1598897607257-2415719243f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    location_name: "Mcdonalds",
    credibility: "2.5",
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1547630134-82994c94845d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80',
    location_name: "KFC",
    credibility: "4",
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1548861297-c596a8c918e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    location_name: "Cold stone",
    credibility: "1.5",
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1598897607257-2415719243f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    location_name: "Tantalizer",
    credibility: "5",
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1547630134-82994c94845d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80',
    location_name: "Aroma",
    credibility: "2",
  },
]

export default function ExploreModal() {
  
  const renderItem = ({item}) => (
    <Location url={item.url} location_name={item.location_name} credibility={item.credibility} />
  );

  return (
    <View style={styles.ExploreModal_container} >
      <View style={styles.modalView_exitButton_container}>
        <View style={styles.modalView_exitButton} />
      </View>
      <Text style={styles.ExploreModal_Heading} >Explore Nearby</Text>
      <FlatList 
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
      {/* <Location url="https://images.unsplash.com/photo-1548861297-c596a8c918e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" location_name="domino's pizza and even more information to check" credibility={2.5} /> */}
    </View>
  )
}

const Location = ({style, url, location_name, credibility,}) => {
  return (
  <TouchableOpacity>
    <View style={[locationStyles.Location_container, style]} >
      <Image source={{
        width: 300,
        height: 200,
        uri: url }
      }  style={locationStyles.Location_image} resizeMode="cover" />
      <View style={locationStyles.LocationDetails_container}>
        <Text numberOfLines={1} style={locationStyles.LocationDetails_header} >{location_name}</Text>
        <Text style={locationStyles.LocationDetails_credibility}>{credibility}</Text>
      </View>
    </View>
  </TouchableOpacity>
  )
}

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const contentHeight = height / 3.2;
const visiblePosition = height - contentHeight;
const nonVisiblePosition = visiblePosition + 200

const styles = StyleSheet.create({
  ExploreModal_container: {
    width: '100%',
    height: contentHeight,
    backgroundColor: "#fff",
    // backgroundColor: "purple",
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal:10,
    // position: 'absolute',
    // top: visiblePosition,
    // top: nonVisiblePosition,
    // alighSelf: "flex-end",
  },
  ExploreModal_Heading: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  modalView_exitButton_container: {
    // backgroundColor: "tomato",
    height: 30,
    justifyContent: "center",
    alignItems: 'center',
  },
  modalView_exitButton: {
    width: 75, 
    height: 5,
    backgroundColor: "#AFAFAF",
    borderRadius: 50,
    // alignSelf: 'center',
  },
})

const locationStyles = StyleSheet.create({
  Location_container: {
    width: width / 3 - 15,
    marginRight: 6,
    height: '100%'
    
    // backgroundColor: "grey",
  },
  Location_image: {
    width: "100%",
    height: height / 6.5,
    borderRadius: 8,
  },
  LocationDetails_container: {
    // backgroundColor: "dodgerblue",
    // marginTop: 5,
    // flex: 1,
    height: 50,
    width: '100%',
    // flexDirection: "row",
    // justifyContent: "space-between",
  },
  LocationDetails_header: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    // backgroundColor: "tomato",
  },
  LocationDetails_credibility: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "red"
  },
})