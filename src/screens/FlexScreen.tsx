import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function FlexScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Box 1</Text>
      <Text style={styles.box2}>Box 2</Text>
      <Text style={styles.box3}>Box 3</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23C4D9',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  box1: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  box2: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  box3: {
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  }
});