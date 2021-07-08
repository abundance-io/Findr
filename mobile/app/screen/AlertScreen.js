import React from 'react'
import { View, Text } from 'react-native'

import Alert from '../components/Alert'
import ContentContainer from "../components/ContentContainer"
import Screen from '../components/Screen'
import TopNavigation from '../components/TopNavigation'
import UserIcon from "../components/UserIcon"

export default function AlertScreen() {
  return (
    <Screen>
      <ContentContainer>
        <TopNavigation leftIcon="arrow-left" searchTag="Search Products" rightContent={<UserIcon />} />
      </ContentContainer>
      <Alert />
    </Screen>
  )
}
