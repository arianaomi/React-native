import React, { useState } from 'react'
import { Text, View, Button } from 'react-native'
//My components
import ModalExample from '../components/ModalExample'

export default function HelloWorldScreen() {
  const [isVisible, setIsVisible] = useState(false)
  const handleOnPress = () => {
    setIsVisible(true)
  }
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
      <Button title='show' onPress={handleOnPress} />
      <ModalExample
        visible={isVisible}
        setIsVisible={setIsVisible}
      />
    </View>
  )
}
