import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native'

const DATA = [
  {
    id: '1',
    name: 'all'
  },  
  {
    id: '2',
    name: 'Valentines'
  },  
  {
    id: '3',
    name: 'Resturants'
  },  
  {
    id: '4',
    name: 'Toiletries'
  },  
  {
    id: '5',
    name: 'cafes'
  },  
  {
    id: '1',
    name: 'books'
  },  
]

export default function MapFilter() {

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.MapFilter_container} >
      <View>
        <Text style={styles.MapFilter_text}>{item.name}</Text>
      </View>
    </TouchableOpacity> 
  )

  return (
    <View style={{ marginTop: 10}} >
      <FlatList
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.MapFilter_ScrollView}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  MapFilter_ScrollView: {
    paddingLeft: 10,
    // backgroundColor: "dodgerblue",
  },
  MapFilter_container: {
    backgroundColor: "#fff",
    flexBasis: "auto",
    height: 40,
    borderRadius: 50,
    elevation: 2,
    margin: 2,
    marginRight: 12,
  },
  MapFilter_text: {
    padding: 10,
    paddingHorizontal: 16,
    // fontWeight: "bold",
    fontSize: 16,
    textTransform: "capitalize",
  },
})