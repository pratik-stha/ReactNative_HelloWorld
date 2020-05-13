import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greeter from './components/Greeter';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi Pratik Shrestha </Text>

      <Greeter greeting="Donnie" ButtonTitle="Tap me !!"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
