import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity,Button } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Home = ({ navigation }) =>{
  
    return (
        <View style={styles.container}>
        <View style={styles.button}>
          <Button title="Add Prescription" />
        </View>
        <View style={styles.button}>
          <Button 
          onPress={ ()=>this.props.navigation.navigate("Home")}
          title="Fetch Prescription" style={styles.button} />
        </View>
      </View>
    );
  }



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    button: {
      paddingBottom: 20,
    },
  });
  
export default Home