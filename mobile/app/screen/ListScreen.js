import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Screen from '../components/Screen'
import ContentContainer from "../components/ContentContainer"
import TopNavigation from "../components/TopNavigation"
import UserIcon from '../components/UserIcon'
import ProductList from '../components/ProductList'
import RoundButton from '../components/RoundButton'

export default function ListScreen() {
  return (
    <Screen>
      <ContentContainer marginBottom={0}>
        <TopNavigation leftIcon="bars" searchTag="Search Products" rightContent={<UserIcon />} />
      </ContentContainer>
      <View style={styles.text_container}>
        <Text style={styles.header}>
          Summer foods
        </Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue 
          massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, 
          sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. 
          Vivamus a tellus.
        </Text>
      </View>
        <ProductList />
      <RoundButton icon="plus" style={styles.addButton} />
    </Screen>
  )
}

const styles = StyleSheet.create({
  text_container: {
    margin: 10,
    padding: 10,
    backgroundColor: "#E2E8FF",
    borderRadius: 5,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: "capitalize",
  },
  description: {
    fontSize: 14,
  },
  addButton: {
    position: "absolute",
    bottom: 25,
    right: 15,
  }
})
