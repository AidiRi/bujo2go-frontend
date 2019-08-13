import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
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

class PlannerList extends Component {

  displayDaysItems = (notes, tasks, events) => {
    if (events && events.length > 0) {
      return createEvents(events)
    } else if (tasks && tasks.length > 0) {
      return createTasks(tasks)
    } else if ( notes && notes.length > 0 ){
      return createNotes(notes)
    } else if ( notes && events && tasks && notes.length===0 && events.length===0 && tasks.length===0){
      return <EmptyList/>
    }
  }

  createEvents = events => {
    return events.map( (event, idx) => {
      return <Event
      key={idx}
      title={event.title}
      status={event.status}
      // hour={event.hour}
      // duration={event.duration}
      />
    })
  }

  createTasks = tasks => {
    return tasks.map( (task, idx) => {
      return <Task
      key={idx}
      title={task.title}
      status={task.status}
      important={task.important}
      />
    })
  }
  createNotes = notes => {
    return notes.map( (note, idx) => {
      return <Note
      key={idx}
      content={note.content}
      />
    })
  }

  render(){
    return (
      <View style={styles.ListStyle}>
        {this.displayDaysItems(this.props.daysNotes, this.props.daysTasks, this.props.daysEvents)}

        <AddItemModal
        isAddModalOpen={this.props.isAddModalOpen}
        toggleAddModal={this.props.toggleAddModal}
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
  ListStyle: {
    flex: 1,
    backgroundColor: 'whitesmoke',
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
