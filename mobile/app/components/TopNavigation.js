import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

export default function TopNavigation({ leftIcon, searchTag, rightContent, style }) {
  // ="angle-left"
  return (
    <View style={[styles.TopNavigation_container, style]} >
      <View style={{ flexDirection: 'row', flex: 1, alignItems: "center"}} >
        {leftIcon && <FontAwesome5 name={leftIcon} size={20} color="black" style={styles.TopNavigation_leftIcon} />}
        <TouchableOpacity style={styles.TopNavigaiton_searchTag_container}>
          <Text style={styles.TopNavigation_searchTag} > {searchTag}</Text>
        </TouchableOpacity>
      </View>
      {rightContent}
    </View>
  )
}

const styles = StyleSheet.create({
  TopNavigation_container: {
    flexDirection: "row",
    // justifyContent: "space-between",
    backgroundColor: "#fff",
    elevation: 2,
    padding: 15,
    width: "94.5%",
    alignSelf: 'center',
    height: 60,
    alignItems: 'center',
    borderRadius: 5,
  },
  TopNavigation_leftIcon: {
    padding: 5,
    paddingHorizontal: 10,
    // backgroundColor: "gold"
  },
  TopNavigation_searchTag_container: {
    // top: 6,
    flex: 1,
  },
  TopNavigation_searchTag: {
    // backgroundColor: "tomato",
    fontSize: 16,
    textTransform: "capitalize",
    fontWeight: "700",
  },
})