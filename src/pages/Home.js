import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity,Button } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Fire from "../config/Fire"

class Home extends Component {
constructor(props){
  super(props);
  this.state = { 
    uid: ''
  }
}

signOut = () => {
  Fire.auth().signOut().then(() => {
    this.props.navigation.navigate('login')
  })
  .catch(error => this.setState({ errorMessage: error.message }))
}  

  render(){
    this.state = { 
   //   displayName: Fire.auth().currentUser.displayName,
      uid: Fire.auth().currentUser.uid
    }    
    return (
        <View style={styles.container}>
        <View style={styles.button}>
          <Button title="Add Prescription" 
               onPress={ ()=>this.props.navigation.navigate("AddPrescription")}
          />
     
        </View>
        <View style={styles.button}>
          <Button 
          title="Fetch Prescription" style={styles.button} />
        </View>

        
        <Button
          color="#3740FE"
          title="Logout"
          onPress={() => this.signOut()}
        />
      </View>
    );
  }
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