import React from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'

import ProviderHeader from "../components/ProviderHeader"
import Description from "../components/Description"
import Screen from '../components/Screen'
import IconButton from "../components/IconButton"
import ContentContainer from '../components/ContentContainer'
import InfiniteScroller from "../components/InfiniteScroller"
import RatingDistribution from "../components/RatingDistribution"
import Comment from "../components/Comment"
import ProductCard from "../components/ProductCard"
import LocationBranch from '../components/LocationBranch'
import SecondaryNavigation from '../components/SecondaryNavigation'


const width = Dimensions.get("window").width;

export default function LocationScreen() {
  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <SecondaryNavigation name="Product details" />
        {/* <ProviderHeader /> */}
        <View style={styles.Product} >
          <ProductCard />
        </View>
        <Description />
        <ContentContainer>
          <View style={styles.button_container}>
            <IconButton icon="bookmark" size={30}>bookmark</IconButton>
            <IconButton icon="google-maps" size={30}>locate</IconButton>
          </View>
        </ContentContainer>
        <View style={styles.section_container}>
          <Text style={styles.section_header}>Related</Text>
          <Text style={styles.section_header}>Public</Text>
        </View>
        <View>
          <ScrollView 
            horizontal
            snapToAlignment={'start'}
            decelerationRate={"fast"}
            snapToInterval={width}
            showsHorizontalScrollIndicator={false}
          >
            {/* related products */}
            <InfiniteScroller />
            {/* comments */}
            <View style={styles.section_wrapper}>
              <RatingDistribution style={{marginBottom: 10}} />
              <Comment />
            </View>
          </ScrollView>
        </View>
        <Text>lekan</Text>
      </ScrollView>
    </Screen>
  )
}


const styles = StyleSheet.create({
  Product: {
    padding: 10,
    height: 200,
  },
  button_container: {
    flexDirection: "row"
  },
  section_container: {
    flexDirection: "row",
    justifyContent: "space-around",
    // backgroundColor: "#E2E8FF",
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#000",
    paddingVertical: 20,
    paddingTop: 10,
  },
  section_header: {
    textTransform: "capitalize",
    fontSize: 16,
    fontWeight: "bold",
  },
  section_wrapper: {
    width: width,
    // height: "10%",
    // backgroundColor: "lightpink",
    flexBasis: "auto"
  },
})
