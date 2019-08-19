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
      renderItem={({item}) => <Item item={item} delete={props.delete} edit={props.edit} type={item.item_type}/> }
      keyExtractor={( item ) => `${item.item_type}${item.id}` }
    />

}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },

});

export default ListItem;
