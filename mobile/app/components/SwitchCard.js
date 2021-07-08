import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'

export default function SwitchCard() {
  const [enabled, setEnabled] = useState(true);
  const toggleSwitch = () => setEnabled(previousState => !previousState);

  return (
    <View style={styles.switchCard_container}>
      <MaterialCommunityIcons name="signal" color="#000" size={28} style={{alignSelf: "flex-start"}} />
      <View style={styles.switchCard_textContainer}>
        <Text style={styles.switchCard_header} >Stream videos online</Text>
        <Text style={styles.switchCard_subHeading} >
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada 
        {/* Always */}
        </Text>
      </View>
      <Switch
        trackColor={{ false: "#E2E8FF", true: "#8884FF" }}
        thumbColor={enabled ? "#0008FF" : "#A2A2A2"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={enabled}
        style={styles.switchCard_switch}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  switchCard_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    // backgroundColor: "dodgerblue",
  },
  switchCard_textContainer: {
    marginRight: "auto",
    marginLeft: 10,
    // backgroundColor: "dodgerblue",
    flex: 1
  },
  switchCard_header: {
    fontSize: 18,
  },
  switchCard_subHeading: {
    fontSize: 14,
    color: "#707070"
  },
  switchCard_switch: {
    // fontSize: 30,
    // width: 10,
    // flex: 1.5,
    // backgroundColor: "dodgerblue",
  },
})
