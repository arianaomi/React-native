/** segunda entra de la app */
import React from 'react'
import { SafeAreaView } from 'react-native';
//My screens
import HelloWorldScreen from './src/screens/HelloWorldScreen';
//import CounterScreen from './src/screens/CounterScreen';
//import BoxObjectModuleScreen from './src/screens/BoxObjectModuleScreen';
import DimensionsScreen from './src/screens/DimensionsScreen';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HelloWorldScreen />
      {/* <CounterScreen /> */}
      {/* <BoxObjectModuleScreen /> */}
      {/* <DimensionsScreen /> */}
    </SafeAreaView>
  )
}

export default App;
