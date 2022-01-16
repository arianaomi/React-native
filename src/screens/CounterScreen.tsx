import React, { useState } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
//My component
import Fab from '../components/Fab'

export default function CounterScreen() {
  const [counter, setCounter] = useState(0)

  const handleLessButton = () => {
    if (counter === 0) {
      setCounter(0)
    } else {
      setCounter(counter - 1)
    }
  }

  const handleSumButton = () => {
    setCounter(counter + 1)
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'beige',
      }}>
      <Text
        style={{
          fontSize: 40,
          textAlign: 'center',
          //position: 'relative',  Valor por default en react-native and only exist absolute y relative
          top: -10
        }}
      >
        Counter {counter}
      </Text>
      <Fab
        title='-1'
        onPress={handleLessButton}
        position='left'
      />
      <Fab
        title='+1'
        onPress={handleSumButton}
        position='right'
      />
    </View >
  )
}
