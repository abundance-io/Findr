import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native'
import { RadioButton } from 'react-native-paper';

const DATA = [
  "System Default",
  "Light",
  "Dark",
]

export default function PopUpButton() {
  const [checked, setChecked] = React.useState('System Default');
  const [popUp, setPopUp] = useState(false)

  const showPopUp = () => {
    setPopUp(!popUp)
  }

  return (
    <TouchableOpacity style={styles.popUpButton_container} onPress={showPopUp} >
      {/* <MaterialCommunityIcons name="signal" color="#000" size={28} style={{alignSelf: "flex-start"}} /> */}
      <View style={styles.popUpButton_textContainer}>
        <Text style={styles.popUpButton_header} >Set dark mode</Text>
        <Text style={styles.popUpButton_subHeading} >
        {checked}
        </Text>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={popUp}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setPopUp(!popUp);
        }}
        animationType="fade"
        // style={{backgroundColor: "#000", opacity: .5}}
      >
        <TouchableWithoutFeedback style={styles.positioning} onPress={showPopUp} >
          <View style={styles.positioning_view} ></View>
        </TouchableWithoutFeedback>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.header}>Dark Mode</Text>
              {DATA.map(value => (
                <View key={value} style={styles.radioButton} >
                  <RadioButton
                    color="dodgerblue"
                    value={value}
                    status={ checked === value ? 'checked' : 'unchecked' }
                    onPress={() => {
                      setChecked(value);
                      setPopUp(false);
                    }}
                  />
                  <Text style={styles.radioButton_text} >{value}</Text>
                </View>
              ))}
              <TouchableOpacity
                style={styles.cancel_button}
                onPress={showPopUp}
                >
                <Text style={styles.cancel}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
      </Modal>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  popUpButton_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    // backgroundColor: "dodgerblue",
  },
  popUpButton_textContainer: {
    marginRight: "auto",
    marginLeft: 10,
    // backgroundColor: "dodgerblue",
    flex: 1
  },
  popUpButton_header: {
    fontSize: 18,
  },
  popUpButton_subHeading: {
    fontSize: 14,
    color: "#707070"
  },
  positioning: {
    position: "relative",
  },
  positioning_view: {
    flex: 1,
    backgroundColor: "#000",
    opacity: .5,
  },
  centeredView: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#fff",
    padding: 10,
    width: "90%",
    borderRadius: 5,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  radioButton_text: {
    fontSize: 16
  },
  cancel_button: {
    padding: 10,
    backgroundColor: "#e8e8e8",
    marginLeft: "auto",
  },
  cancel: {
    fontWeight: "bold"
  },
})
