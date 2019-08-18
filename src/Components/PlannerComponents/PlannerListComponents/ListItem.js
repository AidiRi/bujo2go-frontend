import React from 'react'
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native'
import Item from './ListItemComponents/item'

// props={
// items,
// type,
// delete()
// edit()
// }

 ListItem = props =>  {

    return <FlatList
      style={styles.MainContainer}
      data={props.items}
      renderItem={({item}) => <Item item={item} type={props.type} delete={props.delete} edit={props.edit}/> }
      keyExtractor={({ id }) => `${props.type}${id}` }
    />

}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },

});

export default ListItem;
