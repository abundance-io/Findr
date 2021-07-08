import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function AdveritsementCard({url="https://picsum.photos/200/300.jpg", brand_name="shoprite", style}) {
  return (
    <TouchableOpacity>
      <View style={[styles.AdveritsementCard_container, style]}>
          <Image 
          style={styles.AdveritsementCard_image}
          source={{
            width: 80,
            height: 80,
            uri: url,
          }} />
        <Text numberOfLines={2} style={styles.AdvertisementCard_Brand} >{brand_name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  AdveritsementCard_container: {
    alignItems: 'center',
    width: 100,
  },
  AdveritsementCard_image: {
    borderRadius: 50,
  },
  AdvertisementCard_Brand: {
    fontSize: 12,
    textTransform: "capitalize",
    fontWeight: 'normal',
    textAlign: 'center',
  },
})