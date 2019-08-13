import React from 'react'
import { View, Text } from 'react-native'

// props={ title, status }
const Event = props => {
  if (props.status === "open"){
    return (
      <Text> o {props.title} </Text>
    )
  } else if ( propss.status === "closed"){
    return(
      <Text> @ {props.title} </Text>
    )
  }
}

export default Event;
