import React, { PureComponent } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  
} from 'react-native'
import Event from './event'
import Note from './note'
import Task from './task'
import EmptyList from './EmptyList'
import AddButton from './addButton'
import AddItemModal from './addItemModal'
// Props ={ todaysDate,
// displayDaysItems(),
// daysNotes,
// daysTasks,
// daysEvents,
// addButtonHandler(),
// toggleAddModal(),
// isAddModalOpen }

class PlannerList extends PureComponent {

  displayDaysItems = (notes, tasks, events) => {
    if (events && events.length > 0) {
      return this.createEvents(events)
    } else if (tasks && tasks.length > 0) {
      return this.createTasks(tasks)
    } else if ( notes && notes.length > 0 ){
      return this.createNotes(notes)
    } else if ( notes && events && tasks && notes.length===0 && events.length===0 && tasks.length===0){
      return <EmptyList/>
    }
  }

  createEvents = events => {
    return <Event events={events}/>
  }

  createTasks = tasks => {
    return <Task tasks={tasks}/>
  }

  createNotes = notes => {
    return <Note notes={notes}/>
  }


  render(){
    return (
      <View style={styles.PlannerStyle}>
        <View style={styles.ListStyle}>
        {this.displayDaysItems(this.props.daysNotes, this.props.daysTasks, this.props.daysEvents)}
        </View>

        <AddItemModal

        />

        <AddButton
        toggleAddModal={this.props.toggleAddModal}
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
    margin: 'auto'
  },
  ListStyle: {
    flex: 1,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%'
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
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
});

export default PlannerList;
