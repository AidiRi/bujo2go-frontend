import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

// props={ title, status, important }
const Task = props => {


  const renderItem = ({ item }) => {
    return (
      <Text style={styles.row}>
        {item.text}
      </Text>
    )
  }

    return <FlatList
      style={styles.MainContainer}
      data={props.tasks}
      renderItem={({item}) => {
        if (item.status === "open"){
          return (
            <Text style={styles.row}> O {item.title} </Text>
          )
        } else if ( item.status === "closed"){
          return(
            <Text style={styles.row}> X {item.title} </Text>
          )
        }
      }}
      keyExtractor={({ id }) => id }
    />



}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
});

export default Task;
