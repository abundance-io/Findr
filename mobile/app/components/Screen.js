import React from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'

export default function Screen({children, style, heading}) {
  return (
    <View style={[styles.screen, style]} >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
})