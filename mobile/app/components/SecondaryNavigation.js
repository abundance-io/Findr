import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import RoundButton from './RoundButton'

export default function SecondaryNavigation({name, rightIcon, style}) {
  return (
    <View style={[styles.secondaryNavigation_wrapper, style]} >
      <RoundButton icon="arrow-left" size={24} style={styles.SecondaryNavigation_back_button} />
      <Text style={styles.SecondaryNavigation_title} >{name}</Text>
      {rightIcon && rightIcon}
    </View>
  )
}

const styles = StyleSheet.create({
  secondaryNavigation_wrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  SecondaryNavigation_back_button: {
    width: 40,
    height: 40,
    borderRadius: 5,
    elevation: 0,
    position: "absolute",
    left: 0,
    // backgroundColor: "#F3F3F3",
    // marginRight: "auto"
  },
  SecondaryNavigation_title: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
    // marginRight: "auto",
  },
})