import React from 'react'
import { View, Text } from 'react-native'

// props={ title, status, important }
const Task = props => {
  if (props.status === "open"){
    return (
      <Text> O {props.title} </Text>
    )
  } else if ( props.status === "closed"){
    return(
      <Text> X {props.title} </Text>
    )
  }
}

export default Task;
