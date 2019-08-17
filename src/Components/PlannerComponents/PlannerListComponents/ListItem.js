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
  // renderItem = ({item}) => {
  //   if ( item.status ){
  //     // return <Item/> w/ item prop (will use props.item.title)
  //     if (this.state.isEditing === "false"){
  //       return (
  //         <View style={styles.Row}>
  //           <ItemIcon type={this.props.type} status={item.status}/>
  //           <Text style={styles.ItemText}>
  //             {item.title}
  //           </Text>
  //           <EditButton
  //           id={item.id}
  //           type={String(this.props.type)}
  //           isEditing={this.state.isEditing}
  //           setIsEditing={this.setIsEditing}
  //           />
  //           <DeleteButton delete={this.props.delete} id={item.id} type={this.props.type}/>
  //         </View>
  //       )
  //     } else {
  //       return (
  //         <View style={styles.Row}>
  //           <ItemIcon type={this.props.type} status={item.status}/>
  //           <TextInput
  //             style={styles.ItemText}
  //             value={item.title}
  //             onChangeText={text => console.log(text)}
  //             onSubmitEditing={()=>this.setIsEditing(false)}
  //           />
  //           <EditButton edit={this.props.edit} id={item.id} type={String(this.props.type)}/>
  //           <DeleteButton delete={this.props.delete} id={item.id} type={this.props.type}/>
  //         </View>
  //       )
  //     }
  //   } else if ( item.content ){
  //     return(
  //       // return <Item/> w/ item prop (will use props.item.content)
  //       <View style={styles.Row}>
  //         <ItemIcon type={this.props.type}/>
  //         <Text style={styles.ItemText}>{item.content}</Text>
  //         <EditButton edit={this.props.edit} id={item.id} type={String(this.props.type)}/>
  //         <DeleteButton delete={this.props.delete} id={item.id} type={String(this.props.type)}/>
  //       </View>
  //     )
  //   }
  // }

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
