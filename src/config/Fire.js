import firebase from "firebase";

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
//import LoadingScreen from "./screens/LoadingScreen"

import Login from "../pages/Login";
import Signup from "../pages/signup/Signup";

const firebaseConfig = {
  apiKey: "AIzaSyA1vMdcEsmkWhHyuSV53yUcYzaxtS55Qig",
  authDomain: "pharmacyapp-289c3.firebaseapp.com",
  databaseURL: "https://pharmacyapp-289c3.firebaseio.com",
  projectId: "pharmacyapp-289c3",
  storageBucket: "pharmacyapp-289c3.appspot.com",
  messagingSenderId: "197428033317",
  appId: "1:197428033317:web:fa83eb699f7dbfc6dbcccc",
  measurementId: "G-MK3TZGP0MY",
};

const Fire = firebase.initializeApp(firebaseConfig);

export default Fire;
