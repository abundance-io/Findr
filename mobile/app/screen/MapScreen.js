import React from 'react'
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import Screen from '../components/Screen'
import ContentContainer from '../components/ContentContainer'
import TopNavigation from "../components/TopNavigation"
import UserIcon from '../components/UserIcon'
import MapFilter from '../components/MapFilter'
import ExploreModal from '../components/ExploreModal'
import RoundButton from '../components/RoundButton';

export default function MapScreen() {
  return (
    <Screen>
      <MapView style={styles.map} />
      <View style={styles.controls} >
        <ContentContainer marginBottom={0}>
          <TopNavigation searchTag="Search Products" rightContent={<UserIcon />} />
        </ContentContainer>
        <MapFilter />
        <View style={styles.buttomComponents}>
          <RoundButton style={styles.roundButton} icon="google-maps" />
          <ExploreModal />
        </View>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  controls: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  buttomComponents: {
    position: "absolute",
    bottom: 0,
  },
  roundButton: {
    // alignSelf: 'flex-end',
    marginLeft: "auto",
    marginBottom: 10,
    marginRight: 10,
  }
});

