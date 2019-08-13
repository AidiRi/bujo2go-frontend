import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Calendar from './PlannerComponents/calendar'
import PlannerList from './PlannerComponents/plannerList'


// props = { todaysDate , changeDateState()}
class PlannerPage extends Component {

  constructor(){
    super()
    this.state = {
      plannerDay: this.props.todaysDate,
      daysItems: {
        notes: null,
        tasks: null,
        events: null
      }
    }
  }

  setPlannerDay = date => {
    this.setState({
      ...this.state,
      plannerDay: date
    })
  }

  // fetch all items from user.id =2
  callItems = () => {
    fetch("https://mod5-bullet-journal-api.herokuapp.com/users/2")
    .then(resp=> resp.json())
    .then(data => {this.divideAllItems(data); console.log("calling data")} )
  }
  // console.log(data["tasks"][0].date)

  // get all items for chosen day
  divideAllItems = data => {
    let notes = this.getTodaysSingleItem(data["notes"])
    let tasks = this.getTodaysSingleItem(data["tasks"])
    let events = this.getTodaysSingleItem(data["events"])
    console.log("notes: ", notes)
    console.log("tasks: ", tasks)
    console.log("events: ", events)
    // setState for daysItems for each item
    this.setTodaysItemsState(notes, tasks, events)
  }

    // get item from single itemtype
    getTodaysSingleItem = items => {
      let itemsArray = []
      items.forEach(item =>{
        console.log("getting single items for day:", this.state.plannerDay)
        if (item.date && item.date === this.state.plannerDay){
          itemsArray.push(item)
        } else if ( item.datetime && item.datetime.split('T')[0] === this.state.plannerDay){
          itemsArry.push(item)
        }
      })
      return itemsArray
    }

    setTodaysItemsState = (notes, tasks, events) => {
      this.setState({
        ...this.state,
        daysItems: {
          notes: notes,
          tasks: tasks,
          events: events
        }
      })
    }





  render() {

    return (

      <View>
        <Calendar
        setPlannerDay={this.setPlannerDay}
        todaysDate={this.props.todaysDate}
        plannerDate={this.state.plannerDay}
        />
        <PlannerList

        todaysDate={this.props.todaysDate}
        displayDaysItems={this.displayDaysItems}
        daysEvents={this.state.daysItems.events}
        daysTasks={this.state.daysItems.tasks}
        daysNotes={this.state.daysItems.notes}
        />
        <Text>  </Text>
      </View>
    )
  }

  componentDidMount(){
    this.callItems()
  }

  // componentWillReceiveProps(){
  //   this.callItems()
  // }
}

export default PlannerPage;
