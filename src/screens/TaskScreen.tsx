import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function TaskScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
      <View style={styles.cyanBox} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#28425B',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'

  },
  purpleBox: {
    //flex: 1,
    backgroundColor: '#5856D6',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',

  },
  orangeBox: {
    //flex: 1,
    backgroundColor: '#F0A23B',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    top: 50

  },
  cyanBox: {
    //flex: 2,
    backgroundColor: '#28C4D9',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  }
});