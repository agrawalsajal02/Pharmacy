import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Image ,Button} from "react-native";

import Logo from "../Logo";
import Form from "./Form";



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Signup = ({ navigation }) =>{
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 140, height: 140 }}
          source={require("../../../assets/logo.png")}
        />
        <Text>Enter the user Information to Register</Text>

        <TextInput
          style={styles.inputbox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Name"
          placeholderTextColor="#ffffff"
        />
        <TextInput
          style={styles.inputbox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Gender"
          placeholderTextColor="#ffffff"
        />
        <TextInput
          style={styles.inputbox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Age"
          placeholderTextColor="#ffffff"
        />
        <TextInput
          style={styles.inputbox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Contactno"
          placeholderTextColor="#ffffff"
        />
        <TextInput
          style={styles.inputbox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email"
          placeholderTextColor="#ffffff"
        />
        <TextInput
          style={styles.inputbox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Address"
          placeholderTextColor="#ffffff"
        />
        <TextInput
          style={styles.inputbox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
        />
      <Button
      style={styles.signup}
  onPress={ ()=>navigation.navigate("Screen2")}
  title="Next"
  color="#1c313a"
  accessibilityLabel="Learn more about this purple button"
/>
      </View>
    );
  }

  
export default Signup
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#455a64",
    alignItems: "center",
    justifyContent: "center",
  },
  inputbox:{
    width: 300,
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#ffffff",
    
    marginVertical: 10}
    ,
    signup:{
      color: "#ffffff",
      fontSize: 16,
      fontWeight: "500",
    }

    

  });
