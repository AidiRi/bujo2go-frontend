import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

// props={ content }
const Note = props => {

  const renderItem = ({ item }) => {
    return (
      <Text style={styles.row}>
        {item.text}
      </Text>
    )
  }

    return <FlatList
      style={styles.MainContainer}
      data={props.notes}
      renderItem={({item}) => {
          return (
            <Text style={styles.row}> -- {item.content} </Text>
          )
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
export default Note;
