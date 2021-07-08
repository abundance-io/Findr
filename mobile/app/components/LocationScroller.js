import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Location from './Location'

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

export default function LocationScroller() {
  return (
    <View style={styles.LocationScroller_container}>
      <Text style={styles.LocationScroller_header} >Back to School</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {DATA.map(data => (
          // <View style={styles.Location_container} >
            <Location key={data.id} style={{marginRight: 8,}} url={data.url} location_name={data.location_name} credibility={data.credibility} />
          // </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  LocationScroller_container: {
    marginBottom: 20,
  },
  LocationScroller_header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  // Location_container: {
  //   margin
  // },
})