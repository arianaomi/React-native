import React from 'react'
import { View, Text, Dimensions, StyleSheet, useWindowDimensions } from 'react-native'

//const { width, height } = Dimensions.get('window') -> De esta manera solo toma los tamanos la primera vez y no los va actualizando, por lo tanto si giramos la pantalla no obtendremos las nuevas dimensiones, para solucionar esto necesitamos el hook useWindowDimensions.

export default function DimensionsScreen() {
  const { width, height } = useWindowDimensions() // ahora si obtendremos las nuevas dimensiones
  return (
    <View style={styles.container}>
      <View style={{ ...styles.violetBox, width: width * 0.50 }} />
      <View style={styles.orangeBox} />
      <Text> W: {width} H: {height}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    backgroundColor: 'pink'
  },
  violetBox: {
    backgroundColor: '#5856D6',
    height: '50%',
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
  },
});
