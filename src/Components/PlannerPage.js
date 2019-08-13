import React, { PureComponent } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Platform
  } from 'react-native'
import Calendar from './PlannerComponents/calendar'
import PlannerList from './PlannerComponents/plannerList'


// props = { todaysDate , changeDateState()}
class PlannerPage extends PureComponent {

  constructor(){
    super()
    this.state = {
      addIsVisible: false,
      plannerDay: null,
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
    }, console.log("plannerDay change"))
  }

  // ***********************
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


  // *******************
  // addItem Button handleClick function
  addButtonHandler = () => {
    Alert.alert('added Item to ', this.state.plannerDay)

  }




  render() {

    return (

      <View
        style={styles.MainContainer}
      >
        <Calendar
          setPlannerDay={this.setPlannerDay}
          todaysDate={this.props.todaysDate}
          plannerDate={this.state.plannerDay}
          reCallItems={this.callItems}
        />
        <View
          style={styles.ListStyle}
        >
        <PlannerList
          todaysDate={this.props.todaysDate}
          displayDaysItems={this.displayDaysItems}
          daysEvents={this.state.daysItems.events}
          daysTasks={this.state.daysItems.tasks}
          daysNotes={this.state.daysItems.notes}
          addButtonHandler={this.addButtonHandler}
        />
        </View>


      </View>
    )
  }

  componentDidMount(){

    this.setPlannerDay(this.props.todaysDate)
    this.callItems()
  }

  // shouldComponentUpdate(nextProp, nextState){
  //
  // }

  // componentDidUpdate(prevProps, prevState){
  //   if ( this.state.plannerDay !== null && prevState.plannerDay !== this.state.plannerDay ){
  //     console.log("plannerDay: ", prevSate.plannerDay, this.state.plannerDay)
  //     // this.callItems()
  //   } else if (this.state.daysItem !== null && prevState.daysItems !== this.state.daysItems) {
  //     console.log("daysItems: ", prevState.daysItems, this.state.daysItems)
  //     // this.callItems()
  //   }
  // }
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


export default PlannerPage;
