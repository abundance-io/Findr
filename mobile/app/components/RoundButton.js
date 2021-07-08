import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function RoundButton({style, icon, size=18 }) {
  return (
    <View style={[styles.roundButton, style]}>
      <MaterialCommunityIcons name={icon} size={size} color="#000" />
    </View>
  )
}

const styles = StyleSheet.create({
  roundButton: {
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#fff",
    elevation: 2,
  }
})