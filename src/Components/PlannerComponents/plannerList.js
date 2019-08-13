import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Event from './event'
import Note from './note'
import Task from './task'
import EmptyList from './emptyList'

// Props ={ todaysDate, displayDaysItems(), daysNotes, daysTasks, daysEvents}
const PlannerList = (props) => {

  const displayDaysItems = (notes, tasks, events) => {
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

  const createEvents = events => {
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

  const createTasks = tasks => {
    return tasks.map( (task, idx) => {
      return <Task
      key={idx}
      title={task.title}
      status={task.status}
      important={task.important}
      />
    })
  }
  const createNotes = notes => {
    return notes.map( (note, idx) => {
      return <Note
      key={idx}
      content={note.content}
      />
    })
  }

  return (
    <View>
      {displayDaysItems(props.daysNotes, props.daysTasks, props.daysEvents)}
    </View>
  )

}

export default PlannerList;
