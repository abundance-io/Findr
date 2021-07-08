import React from 'react'
import { View, Text } from 'react-native'

import Account from '../components/Account'
import Screen from '../components/Screen'
import SecondaryNavigation from '../components/SecondaryNavigation'
import IconButton from '../components/IconButton'
import ContentContainer from '../components/ContentContainer'

export default function AccountScreen() {
  return (
    <Screen>
      <SecondaryNavigation name="account" />
      <Account />
      <ContentContainer heading="info">
        <IconButton icon="office-building" size={28} horizontal >Business</IconButton>
        <IconButton icon="email" size={28} horizontal >Messages</IconButton>
      </ContentContainer>
      <ContentContainer heading="actions" >
        <IconButton icon="file" size={28} horizontal >Post Alerts</IconButton>
      </ContentContainer>
    </Screen>
  )
}
