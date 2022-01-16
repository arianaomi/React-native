import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function BoxObjectModuleScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Box Object Module
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8e66ad'
  },
  title: {

    backgroundColor: 'pink',
    borderWidth: 10,
    fontSize: 20,
    margin: 30,
    paddingHorizontal: 10
  }
});