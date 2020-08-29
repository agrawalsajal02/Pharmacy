import React, { Component } from "react";
import { Text, View, Image ,StyleSheet} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();



export class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 140, height: 140 }}
          source={require("../../assets/logo.png")}
        />
        <Text style={styles.logoText}>Welcome to Pharmacy App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:"center"
     },
     logoText:{
         fontSize:18,
         color:'rgba(255,255,255,0.7)'
     }
  });
  

export default Logo;
