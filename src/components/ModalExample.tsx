import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import ModalReactNativeModal from 'react-native-modal'

interface Props {
  visible: boolean
  setIsVisible: any

}

export default function ModalExample({ visible = false, setIsVisible }: Props) {
  console.log(visible)
  return (
    <ModalReactNativeModal
      isVisible={visible}
      coverScreen
      hideModalContentWhileAnimating
    >
      <View style={styles.modal}>
        <Text>
          I am the modal content.
        </Text>
        <Button title="cancel" onPress={() => setIsVisible(!visible)} />
      </View>
    </ModalReactNativeModal>
  )
}

const styles = StyleSheet.create({
  modal: {
    flex: 0.45,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center'
  }
});