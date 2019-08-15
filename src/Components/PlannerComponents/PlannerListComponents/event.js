// NOT BEING USED AFTER REFACTOR 

import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

// props={ title, status }
const Event = props => {

  const type = "events"

    return <FlatList
      style={styles.MainContainer}
      data={props.events}
      renderItem={({item}) => {
        if (item.status === "open"){
          return (
            <View style={styles.row}>
              <Text style={styles.row}> o {item.title} </Text>
            </View>
          )
        } else if ( item.status === "closed"){
          return(
            <View style={styles.row}>
              <Text style={styles.row}> @ {item.title} </Text>
            </View>

          )
        }
      }}
      keyExtractor={({ id }) => `${type}${id}` }
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

export default Event;
