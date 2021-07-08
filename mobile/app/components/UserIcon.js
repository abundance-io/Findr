import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'

export default function UserIcon({style}) {
  return (
    <Image source={require("../assets/ice-cream.jpg")} style={[styles.UserIcon, style]} />
  )
}

const width = Dimensions.get("window").width / 10 ;

const styles = StyleSheet.create({
  UserIcon: {
    width: width,
    height: width,
    borderRadius: 50,
  }
})