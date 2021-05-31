import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Display(props) {
  return (
    <View style={styles.textDisplay}>
      <Text>{props.value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textDisplay: {
    backgroundColor: '#ccc',
    color: 'black',
    width: 175,
    margin: 'auto',
    alignContent: 'center',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    fontSize: '25px'
  }
})
