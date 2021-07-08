import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';

// components
import Input from "../components/Input"
import Button from "../components/Button"

export default function App() {
  return (
    <View style={styles.body} >
      <Text style={styles.SignIn_Text} >
        Welcome to Findr
      </Text>
      <View style={styles.SignIn_container}>
        <View style={styles.SignIn_input_container}>
          <Input placeholder="Email Address" style={{marginBottom: 15,}} />
          <Input placeholder="Password" style={{marginBottom: 15,}} />
        </View>
        <TouchableOpacity style={styles.Signin_forgotPassword_container}>
          <Text style={styles.Signin_forgotPassword}>forgot password ?</Text>
        </TouchableOpacity>
        <Button type='primary' >Login in</Button>
        <Button type="secondary" style={{marginTop: 10,}} >sign up</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: (StatusBar.currentHeight + 100),
  },
  SignIn_Text: {
    fontSize: 34,
    fontFamily: "sans-serif-medium",
    width: 200,
    textAlign: "center",
    marginBottom: 50,
  },
  SignIn_container: {
    width: 300,
    // backgroundColor: "tomato",
  },
  Signin_forgotPassword_container: {
    alignSelf: "flex-end",
    marginBottom: 15,
  },

  Signin_forgotPassword: {
    color: "#848282"
  }
})