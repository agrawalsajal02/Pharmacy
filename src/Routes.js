import React, { Component } from "react";
import { Text, View } from "react-native";
import { Router, Stack, Scene } from "react-native-router-flux";
import Login from "./pages/Login";
import Signup from "./pages/signup/Signup";

export class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="login" component={Login} title="Login" />
          <Scene key="signup" component={Signup} title="Register" />
          
        </Stack>
      </Router>
    );
  }
}

export default Routes;
