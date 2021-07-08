import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

import UserIcon from "./UserIcon"


export default function Comment({noOfReplies=105}) {
  return (
    <View style={styles.Comment} >
      <UserIcon style={{marginHorizontal: 15,}} />
      <View style={styles.Comment_wrapper}>
        <View style={styles.Comment_topContainer} >
          <Text style={styles.Comment_header} >CrazyCube</Text>
          <Text style={styles.Comment_timeData} >3 days ago</Text>
        </View>
        <Text numberOfLines={4} style={styles.Comment_content} >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo </Text>
        <View style={styles.Comment_icons}>
          <View style={styles.Comment_icon_wrapper}>
            <Text style={styles.Comment_icon_value} >15</Text>
            <FontAwesome5 name="thumbs-down" size={20} color="black" />
          </View>
          <View style={styles.Comment_icon_wrapper}>
            <Text style={styles.Comment_icon_value} >2</Text>
            <FontAwesome5 name="thumbs-up" size={20} color="black" />
          </View>
          {/* <FontAwesome5 name="reply" size={18} color="black" /> */}
        </View>
        <View style={{marginTop: 5, flexDirection: "row", alignItems: "center",}}>
          <Text style={styles.Comment_replies} >View Replies({noOfReplies})</Text>
          <FontAwesome5 name="chevron-down" size={16} color="black" style={{marginLeft: 5,}} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Comment: {
    flexDirection: "row",
    padding: 10,
  },
  Comment_wrapper: {
    flex: 1
  },
  Comment_topContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    color: "#dddddd"
  },
  Comment_header: {
    fontSize: 16,
    marginBottom: 2,
    // fontWeight: "700",
  },
  Comment_content: {
    fontSize: 16,
  },
  Comment_icons: {
    flexDirection: "row",
    marginTop: 10,
  },
  Comment_icon_wrapper: {
    flexDirection: "row",
    marginRight: 15,
    alignItems: "center",
  },
  Comment_icon_value: {
    marginRight: 5,
    fontSize: 16,
  },
  Comment_replies: {
    fontSize: 16,
    color: "#888888"
  },
})
