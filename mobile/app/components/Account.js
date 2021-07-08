import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import UserIcon from './UserIcon'

export default function Account() {
  return (
    <View style={styles.account} >
      <UserIcon style={{width: 60, height: 60, marginRight: 10,}} />
      <View>
        <View style={styles.username_container}>
          <Text style={styles.username} >olalekan adekanmbi</Text>
          <MaterialCommunityIcons name="chevron-down" color="#000" size={24} />
        </View>
        <Text>Olamilekanadekanmbi@gmail.com</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  account: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    // backgroundColor: "dodgerblue",
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize"
  },
  username_container: {
    flexDirection: "row",
  }
})
