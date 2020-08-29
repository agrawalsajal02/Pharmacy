import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Logo from "../pages/Logo";
import Form from "../components/Form";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Login = ({ navigation }) =>{
  
    return (
      <View style={styles.container}>
        <Logo />
        <Form type="Login" />
        <View style={styles.signupTextcont}>
          <Text style={styles.signupText}>Don't have an account yet ? </Text>
          <Text onPress={()=>navigation.navigate("signup")} style={styles.signupButton}>Signup</Text>
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#455a64",
    alignItems: "center",
    justifyContent: "center",
  },
  signupTextcont: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingVertical: 16,
    flexDirection: "row",
  },
  signupText: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 16,
  },
  signupButton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Login