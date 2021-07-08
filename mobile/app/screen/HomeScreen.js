import React from 'react'
import { View, Text } from 'react-native'
// components
import Carousel from "../components/Carousel"
import ContentContainer from '../components/ContentContainer'
import Screen from "../components/Screen"
import TopNavigation from "../components/TopNavigation"
import UserIcon from '../components/UserIcon'
import AdvertisementScroller from '../components/AdvertisementScroller'

export default function HomeScreen() {
  return (
    <Screen  >
      <ContentContainer>
        <TopNavigation searchTag="Search Products" rightContent={<UserIcon />} />
      </ContentContainer>
      <Carousel />
      <ContentContainer heading="Advertisements" >
        <AdvertisementScroller />
      </ContentContainer>
    </Screen>
  )
}
