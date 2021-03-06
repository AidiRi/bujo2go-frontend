// TODO: refactor attributes; passing items to edit() is ridonculous
import React, { PureComponent } from 'react'
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
class Item extends PureComponent {

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

  // type = "";

  setIsEditing = boolean => {
    this.setState({
      isEditing: boolean
    })
    console.log("isEditing change")
  }

  setItemText = text => {
    this.setState({
      itemText: text
    })
  }

  componentDidMount(){
    this.props.item.status ?
    this.setItemText(this.props.item.title) : this.setItemText(this.props.item.content);
    // this.props.isOpen ? this.setIsEditing(true) : null;

    // this.setType()
  }

  // setType = () => {
  //   if ( this.props.item.important ) {
  //     type = "tasks"
  //   } else if ( this.props.item.duration ) {
  //     type = "events"
  //   } else if ( this.props.item.content ) {
  //     type = "notes"
  //   }
  // }

  render(){
    if ( this.props.item.status ){
      if (this.state.isEditing === false ){
        return (
          <View style={styles.Row}>
            <ItemIcon
              type={this.props.type}
              status={this.props.item.status}
              id={this.props.item.id}
              changeStatus={this.props.changeStatus}
            />
            <Text style={this.props.item.status === 'canceled' ? styles.CanceledText : styles.ItemText}>
              {this.state.itemText}
            </Text>
            <EditButton
              isEditing={this.state.isEditing}
              setIsEditing={this.setIsEditing}
            />
            <DeleteButton
              delete={this.props.delete}
              id={this.props.item.id}
              type={this.props.type}/>
          </View>
        )
      } else {
        return (
          <View style={styles.Row}>
            <ItemIcon
              type={this.props.type}  status={this.props.item.status}/>
            <TextInput
              style={styles.ItemText}
              value={this.state.itemText}
              id={this.props.item.id} type={String(this.props.type)}
              itemText={this.state.itemText}
              autoFocus={true}
              onChangeText={text => {
                this.setItemText(text);
                console.log(text)
              }}
              onSubmitEditing={()=>{
                this.setIsEditing(false);
                this.props.edit(this.props.item.id, this.props.type, this.state.itemText)
              }}
              onBlur={()=> {
                console.log("blurring during edit");
                this.setIsEditing(false);
                this.props.edit(this.props.item.id, this.props.type, this.state.itemText)
              }}
            />
            <EditButton
            setIsEditing={this.setIsEditing}
            itemText={this.state.itemText}
            type={this.props.type}
            id={this.props.item.id}
            edit={this.props.edit}
            />
            <DeleteButton delete={this.props.delete} id={this.props.item.id} type={this.props.type}/>
          </View>
        )
      }
    } else if ( this.props.item.content ){
        if (this.state.isEditing === false ){
        return(
          <View style={styles.Row}>
            <ItemIcon
              type={this.props.type}
            />
            <Text style={styles.ItemText}> {this.state.itemText}</Text>
            <EditButton
              isEditing={this.state.isEditing}
              setIsEditing={this.setIsEditing}
              />
            <DeleteButton
              delete={this.props.delete}
              id={this.props.item.id}
              type={this.props.type}/>
          </View>
        )
      } else {
        return(
          <View style={styles.Row}>
            <ItemIcon type={this.props.type}/>
            <TextInput
              style={styles.ItemText}
              value={this.state.itemText}
              id={this.props.item.id} type={String(this.props.type)}
              itemText={this.state.itemText}
              autoFocus={true}
              onChangeText={text => {this.setItemText(text); console.log(text)}}
              onSubmitEditing={()=>{
                this.setIsEditing(false); this.props.edit(this.props.item.id, this.props.type, this.state.itemText); console.log("Submitting edit with", this.state.itemText)
              }}
              onBlur={()=> {
                console.log("blurring during edit");
                this.setIsEditing(false);
                this.props.edit(this.props.item.id, this.props.type, this.state.itemText)
              }}
              setItemText={this.setItemText}
            />
            <EditButton
             setIsEditing={this.setIsEditing}
             itemText={this.state.itemText}
             type={this.props.type}
             id={this.props.item.id}
             edit={this.props.edit}
            />
            <DeleteButton delete={this.props.delete} id={this.props.item.id} type={String(this.props.type)}/>
          </View>
        )
      }
    }
  }
}

const styles = StyleSheet.create({
  Row: {
    flexDirection: 'row',
    marginBottom: 5,
    backgroundColor: 'white',
    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'skyblue'
  },
  ItemText: {
    flex: 8,
    // backgroundColor: "skyblue"
    // backgroundColor: "gray",
  },
  CanceledText: {
    flex: 8,
    textDecorationLine: 'line-through',
    // color: 'gray',
  }
});

export default Item;
