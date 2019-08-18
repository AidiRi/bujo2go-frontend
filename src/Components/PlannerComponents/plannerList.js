import React, { PureComponent } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native'
import AddButton from './addButton'
import AddItemModal from './addItemModal'
import ListItem from './PlannerListComponents/ListItem'
import EmptyList from './PlannerListComponents/emptyList'

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

  displayDaysItems = (notes, tasks, events) => {
    if (events && events.length > 0) {
      return this.createItems(events, "events")
    } else if (tasks && tasks.length > 0) {
      return this.createItems(tasks, "tasks")
    } else if ( notes && notes.length > 0 ){
      return this.createItems(notes, "notes")
    } else if ( notes && events && tasks && notes.length===0 && events.length===0 && tasks.length===0){
      return <EmptyList/>
    }
  }

  // NOTE: REFACTORED to account for just one ListItem component
  // inside a createItems function
  createItems = (items, type) => {
    return <ListItem items={items} type={type} delete={this.props.delete} edit={this.props.edit}/>
  }

  render(){
    return (
      <View style={styles.PlannerStyle}>
        <View style={styles.ListStyle}>
        <View style={styles.Row}>
          <TextInput autoFocus={true}/>
        </View>
          {this.displayDaysItems(this.props.daysNotes, this.props.daysTasks, this.props.daysEvents)}


        </View>



        <AddButton

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
  Row: {
    flexDirection: "row",
    marginBottom: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 2,
    alignItems: "center",
    justifyContent: "center"
  },
});

export default PlannerList;
