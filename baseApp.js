import React, { Fragment, Component } from 'react'
import { View, Text } from 'react-native'
import PlannerPage from './Components/PlannerPage'




class BaseApp extends Component  {

  constructor() {
    super()

    let today = new Date()
    today = today.toISOString().split('T')[0]

    this.state = {
      todaysDate: today
    }
  }



  changeDateState = date => {
    //use in calendar component on dateChange
    this.setState({
      todaysDate: date
      //Change to test
    }, console.log("state: ", this.state.todaysDate, "date change: ", date))
  }

  render(){
    return(
      <View>
      <PlannerPage
      todaysDate={this.state.todaysDate}
      changeDateState={this.changeDateState}
      />
      </View>
    )
  }

  componentDidMount(){
    let today = new Date()
    today = today.toISOString().split('T')[0]

    this.changeDateState(today)
  }

  componentDidUpdate(){
    console.log("component updated with: ", this.state.todaysDate)
  }
}

export default BaseApp;
