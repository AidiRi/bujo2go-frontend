import React from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import DeleteButton from './PlannerListComponents/deleteButton'
// props={ content ,
// delete()
// }
const Note = props => {

  const type = "notes"

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
            <View style={styles.row}>
              <Text > -- {item.content} </Text>
              <DeleteButton delete={props.delete} id={item.id} type={type}/>
            </View>
          )
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
export default Note;
