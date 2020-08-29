import React, { Component } from "react";
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export class Form extends Component {
  
    render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputbox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email"
          placeholderTextColor="#ffffff"
        />

        <TextInput
          style={styles.inputbox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
            secureTextEntry={true}
          placeholderTextColor="#ffffff"
        />

        <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>{this.props.type}</Text>

        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  },button:{
      backgroundColor:'#1c313a',
      width:300,
      borderRadius:25,
      marginVertical:10,
      paddingVertical:13
  },
  buttonText:{
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    }
});

export default Form;
