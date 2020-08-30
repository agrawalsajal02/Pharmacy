import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity ,TextInput,ActivityIndicator} from "react-native";
import Logo from "../pages/Logo";
import Form from "../components/Form";
import Fire from "../config/Fire"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./Home"

class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      
      email: '', 
      
      password: '',
      
      isLoading: false,
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      this.setState({
        isLoading: true,
      })
      Fire.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Home')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }


  componentDidMount(){
    this.authListener();
  }
  authListener(){
    Fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    })
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
      

        <View>
        <Logo />
    {/*  */}
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
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}

            secureTextEntry={true}
          placeholderTextColor="#ffffff"
        />

        <TouchableOpacity style={styles.button}>
    <Text onPress={() => this.userLogin()} style={styles.buttonText}>Login</Text>

        </TouchableOpacity>
        {/*  */}
        <View style={styles.signupTextcont}>
          <Text style={styles.signupText}>Don't have an account yet ? </Text>
          <Text onPress={()=>this.props.navigation.navigate("signup")} style={styles.signupButton}>Signup</Text>
        </View>
        </View>

      </View>
    );
  }
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

export default Login