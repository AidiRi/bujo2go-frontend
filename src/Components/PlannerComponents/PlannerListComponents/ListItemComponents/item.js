import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import DeleteButton from './deleteButton'
import ItemIcon from './itemIcon'
import EditButton from './editButton'

// props={
// item ,
// type ,
// delete() ,
// edit() ,
// }
class Item extends Component {

  // events = { title, status }
  // tasks = { title, status, important }
  // notes = { content }
  constructor(){
    super()
    this.state = {
      isEditing: false,
      itemText: null
    }
  }

  setIsEditing = boolean => {
    this.setState({
      ...this.state,
      isEditing: boolean
    })
    console.log("hit set is editing function")
  }

setItemText = text => {
  this.setState({
    ...this.state,
    itemText: text
  })
}

  // onprops.edit(props.id, props.type, data)

  render(){
    if ( this.props.item.status ){
      if (this.state.isEditing === false ){

        return (
          <View style={styles.Row}>
            <ItemIcon type={this.props.type} status={this.props.item.status}/>
            <Text style={styles.ItemText}>
              {this.props.item.title}
            </Text>
            <EditButton
            id={this.props.item.id}
            type={String(this.props.type)}
            isEditing={this.state.isEditing}
            setIsEditing={this.setIsEditing}
            />
            <DeleteButton delete={this.props.delete} id={this.props.item.id} type={this.props.type}/>
          </View>
        )
      } else {
        return (
          <View style={styles.Row}>
            <ItemIcon type={this.props.type} status={this.props.item.status}/>
            <TextInput
              style={styles.ItemText}
              value={this.props.item.title}
              autoFocus={true}
              onChangeText={text => console.log(text)}
              onSubmitEditing={()=>this.setIsEditing(false)}
            />
            <EditButton
             
            />
            <DeleteButton delete={this.props.delete} id={this.props.item.id} type={this.props.type}/>
          </View>
        )
      }
    } else if ( this.props.item.content ){
      return(
        <View style={styles.Row}>
          <ItemIcon type={this.props.type}/>
          <Text style={styles.ItemText}>{this.props.item.content}</Text>
          <EditButton edit={this.props.edit} id={this.props.item.id} type={String(this.props.type)}/>
          <DeleteButton delete={this.props.delete} id={this.props.item.id} type={String(this.props.type)}/>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
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

export default Item;
