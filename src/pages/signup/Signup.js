import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Image ,Button,ActivityIndicator,Alert} from "react-native";
import auth from '@react-native-firebase/auth';

import Logo from "../Logo";
import Form from "./Form";

import Fire from "../../config/Fire"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class Signup extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      displayName: '',
      email: '', 
      password: '',
      isLoading: false,
      Gender:"",
      Age:"",
      contactno:"",
      address:""
    }
  }
  
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: true,
   
      })
      Fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName,
          Gender:Gender,
          Age:Age,
          contactno:contactno,
          address:address
        })
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: '',
          Gender:'',
          Age:"",
          contactno:"",
          address:""
        })
        this.props.navigation.navigate('Login')
      })
      .catch(error => this.setState({ errorMessage: error.message }))      
    }
  }

  call=()=>{


    var promise = new Promise(function(resolve, reject) { 
      reject('Promise Rejected') 
  }) 
    
  promise
      .then( this.registerUser())
      .then(this.props.navigation.navigate("Screen2"))  
  

  
  }
  render(){
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    

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
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, 'displayName')}
          placeholderTextColor="#ffffff"
        />
        <TextInput
          style={styles.inputbox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Gender"
          value={this.state.Gender}
          onChangeText={(val) => this.updateInputVal(val, 'Gender')}
          placeholderTextColor="#ffffff"
        />
        <TextInput
          style={styles.inputbox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Age"
          value={this.state.Age}
          onChangeText={(val) => this.updateInputVal(val, 'Age')}
          placeholderTextColor="#ffffff"
        />
        <TextInput
          style={styles.inputbox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Contactno"
          value={this.state.contactno}
          onChangeText={(val) => this.updateInputVal(val, 'contactno')}
          placeholderTextColor="#ffffff"
        />
        <TextInput
          style={styles.inputbox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
          placeholderTextColor="#ffffff"
        />
        <TextInput
          style={styles.inputbox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Address"
          value={this.state.address}
          onChangeText={(val) => this.updateInputVal(val, 'address')}
          placeholderTextColor="#ffffff"
        />
        <TextInput
          style={styles.inputbox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}


          secureTextEntry={true}
          placeholderTextColor="#ffffff"
        />
      <Button
      style={styles.signup}
  onPress={()=> this.call()}
  title="Next"
  color="#1c313a"
  accessibilityLabel="Learn more about this purple button"
/>
      </View>
    );
  }
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
