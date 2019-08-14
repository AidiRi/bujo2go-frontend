import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// props={ title, status }
const EmptyList = props => {

    return(
      <Text style={styles.row}> Create a new item... </Text>
    )
}

const styles = StyleSheet.create({
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'white',
  }
});

export default EmptyList;
