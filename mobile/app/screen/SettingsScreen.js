import React from 'react'
import { View, Text } from 'react-native'

import ContentContainer from '../components/ContentContainer'
import PopUpButton from '../components/PopUpButton'
import Screen from '../components/Screen'
import SecondaryNavigation from '../components/SecondaryNavigation'
import SwitchCard from '../components/SwitchCard'
import IconButton from '../components/IconButton'


export default function SettingsScreen() {
  return (
    <Screen>
      <SecondaryNavigation name="settings"/>
      <ContentContainer heading="data usage" style={{marginTop: 0}}>
        <SwitchCard />
        <PopUpButton />
        <IconButton icon="file" rightIcon="exit-to-app" size={28} horizontal >Terms of Service</IconButton>
      </ContentContainer>
    </Screen>
  )
}
