import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Image, Button } from "react-native";

import Logo from "../../src/pages/Logo";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AddPrescription = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 140, height: 140 }}
        source={require("../../assets/logo.png")}
      />
      <Text>Enter the details of Doctor and Medicine</Text>

      <TextInput
        style={styles.inputbox}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="Doctor's Name"
        placeholderTextColor="#ffffff"
      />
      <TextInput
        style={styles.inputbox}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="Doctor's Contact No"
        placeholderTextColor="#ffffff"
      />
      <TextInput
        style={styles.inputbox}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="Medicine Name"
        placeholderTextColor="#ffffff"
      />
      <TextInput
        style={styles.inputbox}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="Medicine Dose"
        placeholderTextColor="#ffffff"
      />
      <TextInput
        style={styles.inputbox}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="Duration"
        placeholderTextColor="#ffffff"
      />
      <TextInput
        style={styles.inputbox}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="Medicine Strength"
        placeholderTextColor="#ffffff"
      />

      <Button
        style={styles.signup}
        title="Submit"
        color="#1c313a"
        accessibilityLabel="Learn more about this purple button"
      />

      <Button style={styles.signup} title="Add More" color="#1c313a" />
    </View>
  );
};

export default AddPrescription;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#455a64",
    alignItems: "center",
    justifyContent: "center",
  },
  inputbox: {
    width: 300,
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 10,
  },
  signup: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
  },
});
