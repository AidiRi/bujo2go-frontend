import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import DeleteButton from './PlannerListComponents/deleteButton'

// props={ title, status, important }
const Task = props => {

  const type = "tasks"

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
            <View style={styles.row}>
            <Text> O {item.title} </Text>
            <DeleteButton delete={props.delete} id={item.id} type={type}/>
            </View>
          )
        } else if ( item.status === "closed"){
          return(
            <View style={styles.row}>
            <Text> X {item.title} </Text>
            <DeleteButton delete={props.delete} id={item.id} type={type}/>
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

export default Task;
