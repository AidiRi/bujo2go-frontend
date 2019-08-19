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
import PlannerList from './PlannerComponents/PlannerList'


// props = { todaysDate , changeDateState()}
class PlannerPage extends PureComponent {

  constructor(){
    super()
    this.state = {
      userId: 2,
      isAddModalOpen: false,
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
      plannerDay:
      date
      // '2019-08-31'
      // '2019-08-08'
      // TESTING
    }, console.log("plannerDay change"))
  }

  // ***********************
  // fetch all items from user.id =2
  callItems = () => {
    fetch(`https://mod5-bullet-journal-api.herokuapp.com/users/${this.state.userId}`)
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
          itemsArray.push(item)
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

  toggleAddModal = boolean => {
    this.setState({
      ...this.state,
      isAddModalOpen: boolean
    })
  }

// ***********************

// deleting items from plannerList
  deleteItem = (id, type ) => {
    console.log(type, " item deleting with id of ", id)

    // fetch(`https://mod5-bullet-journal-api.herokuapp.com/users/${this.props.userId}/${type}/${id}`, {
    //   method: 'DELETE'
    // }).then(resp => resp.json())

    this.deleteItemFromState(id, type)
  }

  deleteItemFromState = (id, type)=> {
    const newItems = this.state.daysItems[type].filter( item => item.id !== id);


    this.setState({
      ...this.state,
      daysItems: {
        ...this.state.daysItems,
        [type]: newItems
      }
    })
    console.log("ITEM ID:", id, "ARRAY:", this.state.daysItems[type], "NEW ARRAY:", newItems)
  }

  // **********************

  // TODO: figure out whether adding multiple addons would be crazyTalk code
  // Editing Items in plannerList
  editItem = (id, type, data) => {
    console.log(type, " item SWITHING with id of:", id, "and data of:", data)
    // conditional fetching based on item type
    switch (type) {
      case "notes":
        let dataName = "content"
        this.patchItemData(id, type, data, dataName)
        break;
      case "tasks":
        dataName = "title"
        this.patchItemData(id, type, data, dataName)
        break;
      case "events":
        dataName = "title"
        this.patchItemData(id, type, data, dataName)
        break;
      default:console.log("ERROR AT TYPE SWITCH")

    }
  }

  patchItemData = (id, type, content, dataName) => {
    console.log(type, " item PATCHING with id of ", id, "and content of", content)
    fetch(`https://mod5-bullet-journal-api.herokuapp.com/users/${this.props.userId}/${type}/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify({
        [dataName]: content
      })
    }).then(resp => resp.json())
    .then(data => this.editItemInState(type, data))
  }


  editItemInState = (type, patchedItem) => {
    console.log(type, " STATE EDITING with id of ", patchedItem.id, "and data of", patchedItem)

    let newItems = this.state.daysItems[type].map(item => {
      if (item.id === patchedItem.id) {
        return patchedItem
      }
      return item
    })

    this.setState({
      ...this.state,
      daysItems: {
        ...this.state.daysItems,
        [type]: newItems
      }
    })
  }


  // **********************

    // Create new item

    // attrs to include later: collection_id, hour,
    createItem = (type, content, important, time) => {
      switch (type) {
        case "events":
          console.log("creating event")
          this.postItem(type, content, null, time)
          break;
        case "tasks":
        console.log("creating task")
          this.postItem(type, content, important)
          break;
        case "notes":
        console.log("creating note")
          this.postItem(type, content)
          break;
        default:
          console.log("Error at createItem switch")
      }

    }

    postItem = (type, content, important, time) => {

      const  itemBody = this.itemBody(type, content, important, time)

      fetch(`https://mod5-bullet-journal-api.herokuapp.com/users/${this.props.userId}/${type}/`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(itemBody)
      })
      .then(resp => resp.json())
      .then(data => this.displayNewItem(type, data))
    }


    itemBody = (type, content, important, time)=> {
      switch (type) {
        case "tasks":
        return {
          title: content,
          status: "open",
          important: false,
          date: `${this.state.plannerDay}`,
          collection_id: null,
          user_id: this.state.userId
        }
          break;
        case "events":
        return {
          title: content,
          status: "open",
          datetime: `${this.state.plannerDay} 00:00`,
          duration: null,
          hour: null,
          user_id: this.state.userId
        }
          break;
        case "notes":
        return {
          content: content,
          status: "open",
          date: `${this.state.plannerDay}`,
          collection_id: null,
          user_id: this.state.userId
        }
          break;
        default:
      }
    }

    displayNewItem = (type, data) => {
      this.setState({
        ...this.state,
        daysItems: {
          ...this.state.daysItems,
          [type]: {
            ...this.state.daysItems[type],
            data
          }
        }
      })
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

          daysEvents={this.state.daysItems.events}
          daysTasks={this.state.daysItems.tasks}
          daysNotes={this.state.daysItems.notes}
          toggleAddModal={this.toggleAddModal}
          isAddModalOpen={this.state.isAddModalOpen}
          userId={this.state.userId}
          delete={this.deleteItem}
          edit={this.editItem}
          create={this.createItem}
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
  //   console.log("todays state:", this.state.daysItems)
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
