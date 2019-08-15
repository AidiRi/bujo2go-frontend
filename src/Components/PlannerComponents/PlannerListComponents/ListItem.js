import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import DeleteButton from './deleteButton'
import ItemIcon from './itemIcon'
import EditButton from './editButton'

// props={
// items,
// type,
// delete() }
// PROPS TODO
// EDIT

// events = { title, status }
// tasks = { title, status, important }
// notes = { content }

// TODO: create ItemIcon component, account for status/!status
// <ItemIcon type={props.type} status={item.status}/>
// <ItemIcon type={props.type}/>

const ListItem = props => {

  // NOTE: REFACTORED to account for just one ListItem
  //      component instead of multiple components for each type
  //      of item

  const renderItem = ({item}) => {
    if ( item.status ){
      return (
        <View style={styles.Row}>
          <ItemIcon type={props.type} status={item.status}/>
          <Text style={styles.ItemText}>{item.title}</Text>
          <EditButton edit={props.edit} id={item.id}/>
          <DeleteButton delete={props.delete} id={item.id} type={props.type}/>
        </View>
      )
    } else if ( item.content ){
      return(
        <View style={styles.Row}>
          <ItemIcon type={props.type}/>
          <Text style={styles.ItemText}>{item.content}</Text>
          <EditButton edit={props.edit} id={item.id}/>
          <DeleteButton delete={props.delete} id={item.id} type={String(props.type)}/>
        </View>
      )
    }
  }

  return <FlatList
    style={styles.MainContainer}
    data={props.items}
    renderItem={renderItem}
    keyExtractor={({ id }) => `${props.type}${id}` }
  />

}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  Row: {
    flexDirection: "row",
    marginBottom: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  ItemText: {
    width: "75%",
    // backgroundColor: "skyblue"
    // backgroundColor: "gray",

  },


});

export default ListItem;
