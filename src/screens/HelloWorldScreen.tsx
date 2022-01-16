import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class HelloWorldScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'pink',
        }}>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
          }}>
          Hello World 🌎
        </Text>
      </View>
    )
  }
}
