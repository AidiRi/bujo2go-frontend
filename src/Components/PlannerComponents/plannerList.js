import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import AddButton from './addButton'
import AddItemModal from './addItemModal'
import ListItem from './PlannerListComponents/ListItem'
import EmptyList from './PlannerListComponents/emptyList'
import ItemIcon from './PlannerListComponents/ListItemComponents/itemIcon'

// Props ={ todaysDate
// displayDaysItems()
// daysNotes
// daysTasks
// daysEvents
// addButtonHandler()
// toggleAddModal()
// isAddModalOpen
// userId
// delete()
// edit()
// create()
// }

class PlannerList extends Component {

  constructor(){
    super()
    this.state={
      itemAdding: null

    }
  }

  displayDaysItems = (notes, tasks, events) => {
    let allItems = []
    if (events && events.length > 0) {
      events.forEach(event => {
        allItems.push(event)
      })
      // return this.displayItems(events, "events")
    }
   if (tasks && tasks.length > 0) {
      tasks.forEach(task => {
        allItems.push(task)
      })
      // return this.displayItems(tasks, "tasks")
    }
    if ( notes && notes.length > 0 ){
      notes.forEach(note => {
        allItems.push(note)
      })
      // return this.displayItems(notes, "notes")
    }
    if ( notes && events && tasks && notes.length===0 && events.length===0 && tasks.length===0){
      return <EmptyList/>
    } else {
      return this.displayItems(allItems)
      // console.log("all items:", allItems)
    }
  }

  // NOTE: REFACTORED to account for just one ListItem component
  // inside a displayItems function
  displayItems = items => {
    return <ListItem items={items} delete={this.props.delete} edit={this.props.edit}/>
  }

  displayCreateModal = () => {
    if (this.state.itemAdding){
      return <AddItemModal
        itemAdding={this.state.itemAdding}
        setItemAdding={this.setItemAdding}
        create={this.props.create}
      />
    }
  }

  setItemAdding = type => {
    this.setState({
      itemAdding: type
    })
  }

  render(){
    return (
      <View style={styles.PlannerStyle}>
        <View style={styles.ListStyle}>

          {this.displayCreateModal()}

          {this.displayDaysItems(this.props.daysNotes, this.props.daysTasks, this.props.daysEvents)}

        </View>



        <AddButton
          setItemAdding={this.setItemAdding}
        />

      </View>
    )
  }

}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  PlannerStyle: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  ListStyle: {
    flex: 1,
    marginTop: 20,
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 10,
  },

  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },

});

export default PlannerList;
