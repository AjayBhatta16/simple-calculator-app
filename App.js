import React, {useState} from 'react'
import { View, StyleSheet } from 'react-native'
import CButton from './components/CButton'
import Display from './components/Display'

/* 
TODO:
1. Fix alignment
*/

const buttonRows = [
  ["1", "2", "3", "+"],
  ["4", "5", "6", "-"],
  ["7", "8", "9", "x"],
  [".", "0", "<", "/"],
  ["CLEAR", "ENTER"]
]

export default function App(props) {
  const [input, setInput] = useState('')
  const handlePress = str => {
    if (str === "CLEAR") {
      setInput('')
    } else if (str === "ENTER") {
      try {
        setInput(eval(input))
      } catch(err) {
        setInput("SYNTAX ERROR")
      }
    } else if (str === "x") {
      setInput(`${input}*`)
    } else if (str === "<") {
      setInput(input.slice(0, input.length - 1))
    } else {
      setInput(input + str)
    }
  }
  return (
    <View style={styles.main}>
      <Display value={input}/>
      {buttonRows.map(buttons => {
        return (
          <View style={styles.inline}>
            {buttons.map(b => {
              return (
                <CButton title={b} handlePress={() => handlePress(b)}/>
              )
            })}
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#222',
    padding: 5
  },
  inline: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 5
  }
})
