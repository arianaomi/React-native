import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function PositionRelativeScreen() {
  return (
    <View style={styles.container}>
      <View style={[styles.greenBox]} />
      <View style={[styles.box, styles.purpleBox]} />
      <View style={[styles.box, styles.orangeBox]} />
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9'
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  greenBox: {
    backgroundColor: 'lightgreen',
    ...StyleSheet.absoluteFillObject // shortcut de : position: 'absolute' top: 0, left: 0, right: 0, bottom: 0
  }
});