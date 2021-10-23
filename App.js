import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navbar } from './src/Navbar.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
