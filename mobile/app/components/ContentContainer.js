import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ContentContainer({children, heading, marginBottom, style}) {
  return (
    <View style={[styles.contentContainer, {marginBottom: marginBottom}, style]}>
      {heading && 
        <Text style={styles.contentContainer_heading}>
          {heading}
        </Text>
      }
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    marginVertical: 15,
  },
  contentContainer_heading: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
    textTransform: "capitalize",
  }
})
