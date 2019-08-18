import React, { PureComponent } from 'react'
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

// Props ={ todaysDate,
// displayDaysItems(),
// daysNotes,
// daysTasks,
// daysEvents,
// addButtonHandler(),
// toggleAddModal(),
// isAddModalOpen ,
// userId
// delete() ,
// edit()
// }

class PlannerList extends PureComponent {

  constructor(){
    super()
    this.state={
      itemAdding: "tasks"
      // TESTING
    }
  }

  displayDaysItems = (notes, tasks, events) => {
    if (events && events.length > 0) {
      return this.displayItems(events, "events")
    } else if (tasks && tasks.length > 0) {
      return this.displayItems(tasks, "tasks")
    } else if ( notes && notes.length > 0 ){
      return this.displayItems(notes, "notes")
    } else if ( notes && events && tasks && notes.length===0 && events.length===0 && tasks.length===0){
      return <EmptyList/>
    }
  }

  // NOTE: REFACTORED to account for just one ListItem component
  // inside a displayItems function
  displayItems = (items, type) => {
    return <ListItem items={items} type={type} delete={this.props.delete} edit={this.props.edit}/>
  }

  displayCreateModal = () => {
    if (this.state.itemAdding){
      return <AddItemModal
      itemAdding={this.state.itemAdding}
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
