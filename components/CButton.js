import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

export default function CButton(props) {
  return (
    <View style={[
      props.title.length > 1 ? styles.wideButton : styles.button, 
      styles.allButtons
    ]}>
      <Button color="#0a9" title={props.title} onPress={props.handlePress}/>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 40,
  },
  wideButton: {
    width: 80,
  },
  allButtons: {
    padding: 5,
    margin: 0
  }
})
