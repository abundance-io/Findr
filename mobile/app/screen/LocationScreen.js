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
import LocationBranch from '../components/LocationBranch'
import SecondaryNavigation from '../components/SecondaryNavigation'


const width = Dimensions.get("window").width;

export default function LocationScreen() {
  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <SecondaryNavigation name="business" />
        <ProviderHeader />
        <Description />
        <ContentContainer>
          <View style={styles.button_container}>
            <IconButton icon="web" size={30}>internet</IconButton>
            <IconButton icon="google-maps" size={30}>locate</IconButton>
          </View>
        </ContentContainer>
        <View style={styles.section_container}>
          <Text style={styles.section_header}>Products</Text>
          <Text style={styles.section_header}>Branches</Text>
          <Text style={styles.section_header}>Public</Text>
          <Text style={styles.section_header}>Related</Text>
        </View>
        <View>
          <ScrollView 
            horizontal
            snapToAlignment={'start'}
            decelerationRate={"fast"}
            snapToInterval={width}
            showsHorizontalScrollIndicator={false}
          >
            {/* products */}
            <InfiniteScroller />
            {/* // branches */}
            <View style={styles.section_wrapper}>
              <LocationBranch
                url="https://images.unsplash.com/photo-1485199692108-c3b5069de6a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                credibility={2.5}
                // style={{backgroundColor: "dodgerblue"}}
              />
            </View>
            {/* comments */}
            <View style={styles.section_wrapper}>
              <RatingDistribution style={{marginBottom: 10}} />
              <Comment />
            </View>
            <View style={styles.section_wrapper}>
              <LocationBranch
                url="https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                credibility={2.5}
                // style={{backgroundColor: "dodgerblue"}}
              />
              <LocationBranch
                url="https://images.unsplash.com/photo-1534008757030-27299c4371b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                credibility={2.5}
                // style={{backgroundColor: "dodgerblue"}}
              />
              <LocationBranch
                url="https://images.unsplash.com/photo-1485199692108-c3b5069de6a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                credibility={2.5}
                // style={{backgroundColor: "dodgerblue"}}
              />
            </View>
          </ScrollView>
        </View>
        <Text>lekan</Text>
      </ScrollView>
    </Screen>
  )
}


const styles = StyleSheet.create({
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
