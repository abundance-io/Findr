import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View, Image, ScrollView } from "react-native";
import Button from "./Button";
import IconButton from "./IconButton"
import ProductCard from "./ProductCard";



export default function ProductModal() {
  const [modalVisible, setModalVisible] = useState(true);

  

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
      </Modal>
        <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalView_exitButton_container}>
            <View style={styles.modalView_exitButton} />
          </View>
            <ProductCard />
            <View style={styles.ProductModal_buttonContainer}>
              <Button style={{flex: -0.7}} icon="location-arrow">locate</Button>
              <IconButton style={{marginLeft: 5,}} icon="bookmark">bookmark</IconButton>
              <IconButton style={{marginLeft: 5,}} icon="eye">view</IconButton>
          </View>
          </View>
        </View>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // backgroundColor: "tomato",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    backgroundColor: 'tomato',
    // margin: 20,
    width: "100%",
    flex: 0.35,
    backgroundColor: "white",
    borderRadius: 20,
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
    paddingHorizontal: 15,
    paddingTop: 0,
    // paddingBottom: 50,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalView_exitButton_container: {
    // backgroundColor: "tomato",
    height: 30,
    justifyContent: "center",
    alignItems: 'center',
  },
  modalView_exitButton: {
    width: 75, 
    height: 5,
    backgroundColor: "#AFAFAF",
    borderRadius: 50,
    // alignSelf: 'center',
  },
  ProductModal_buttonContainer: {
    flexDirection: "row",
    width: '100%',
    flex: .4, 
    alignItems: "center", 
    // backgroundColor: "tomato"
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});