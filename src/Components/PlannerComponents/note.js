import React from 'react'
import { View, Text } from 'react-native'

// props={ content }
const Note = props => {

    return (
      <Text> -- {props.content} </Text>
    )

}

export default Note;
