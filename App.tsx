/** segunda entra de la app */
import React from 'react'
import { SafeAreaView } from 'react-native';
//My screens
//import HelloWorldScreen from './src/screens/HelloWorldScreen';
//import CounterScreen from './src/screens/CounterScreen';
//import BoxObjectModuleScreen from './src/screens/BoxObjectModuleScreen';
import DimensionsScreen from './src/screens/DimensionsScreen';
import PositionRelativeScreen from './src/screens/PositionRelativeScreen';
import FlexboxScreen from './src/screens/FlexScreen'
import TaskScreen from './src/screens/TaskScreen'

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#28425B' }}>
      {/* <HelloWorldScreen /> */}
      {/* <CounterScreen /> */}
      {/* <BoxObjectModuleScreen /> */}
      {/* <DimensionsScreen /> */}
      {/* <PositionRelativeScreen /> */}
      {/* <FlexboxScreen /> */}
      <TaskScreen />
    </SafeAreaView>
  )
}

export default App;
