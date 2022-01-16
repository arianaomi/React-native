import React from 'react'
import { View, Text, TouchableOpacity, TouchableNativeFeedback, StyleSheet, Platform } from 'react-native'

interface Props {
  title: string
  position: 'right' | 'left'
  onPress: () => void
}

export default function Fab({ title, position = 'right', onPress }: Props) {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={onPress}
        style={[styles.fabLocation,
        position === 'right' ? styles.right : styles.left]}
      >
        <View style={styles.fab}>
          <Text style={styles.fabText}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
  const android = () => {
    return (
      <View style={[styles.fabLocation,
      position === 'right' ? styles.right : styles.left]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#8A77B8', false, 30)}
        >
          <View style={styles.fab}>
            <Text style={styles.fabText}>
              {title}
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
  return Platform.OS === 'ios' ? ios() : android()
}

const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 25,
    margin: 10
  },
  right: {
    right: 0
  },
  left: {
    left: 0
  }
  ,
  fab: { //floating active button
    height: 60,
    width: 60,
    backgroundColor: '#5856d6',
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8
  },
  fabText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  }
})
