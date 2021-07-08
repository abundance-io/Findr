import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Description() {
  return (
    <View style={styles.Description_wrapper} >
      <Text style={styles.Description_header} >Description</Text>
      <Text numberOfLines={5} >
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Description_wrapper: {
    padding: 10,
  },
  Description_header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  }
})
