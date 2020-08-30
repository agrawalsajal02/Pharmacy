import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import "react-native-gesture-handler";
import Login from "./src/pages/Login";
import Screen2 from "./src/pages/signup/Screen2";
import Signup from "./src/pages/signup/Signup";
import Home from "./src/pages/Home";
import AddPrescription from "./src/AddPrescription/AddPrescription";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerTitleAlign: "center",
              headerStyle: {
                backgroundColor: "#3740FE",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          >
            <Stack.Screen
              name="login"
              options={({ title: "Login" }, { headerLeft: null })}
              component={Login}
            />
            <Stack.Screen
              name="signup"
              options={{ title: "Signup" }}
              component={Signup}
            />
            <Stack.Screen name="Screen2" component={Screen2} />
            <Stack.Screen
              name="Home"
              options={({ title: "Dashboard" }, { headerLeft: null })}
              component={Home}
            />
            <Stack.Screen name="AddPrescription" component={AddPrescription} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#455a64",
  },
});
