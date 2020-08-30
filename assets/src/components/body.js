import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function body() {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="Add Prescription" />
      </View>
      <View style={styles.button}>
        <Button title="Fetch Prescription" style={styles.button} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  button: {
    paddingBottom: 20,
  },
});
