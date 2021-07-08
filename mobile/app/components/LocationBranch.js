import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'

export default function Location({url, location_name="colgate toothpaste", credibility, style}) {
  return (
    <TouchableOpacity>
      <View style={[styles.Location_container, style]} >
        <Image source={{
          width: 300,
          height: 200,
          uri: url }
        }  style={styles.Location_image} resizeMode="cover" />
        <View style={styles.LocationDetails_container}>
          <Text numberOfLines={2} style={styles.LocationDetails_header} >{location_name}</Text>
          <Text style={styles.LocationDetails_credibility}>{credibility}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const width = Dimensions.get("window").width

const styles = StyleSheet.create({
  Location_container: {
    // flex: 1,
    // backgroundColor: "dodgerblue",
    margin: 10,
  },
  Location_image: {
    width: "100%",
    height: width / 2.2,
    borderRadius: 6,
  },
  LocationDetails_container: {
    // backgroundColor: "tomato",
    marginTop: 5,
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
  },
  LocationDetails_header: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    // backgroundColor: "tomato",
    flex: 1,
  },
  LocationDetails_credibility: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "red"
  },
})
