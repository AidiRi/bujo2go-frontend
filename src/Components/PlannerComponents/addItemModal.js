import React, { Component } from 'react'
import {
  Text,
  TouchableHighlight,
  View,
  Alert,
  StyleSheet,
  Button,
  TextInput,
  Platform
} from 'react-native'
import ItemIcon from './PlannerListComponents/ListItemComponents/itemIcon'
import { Ionicons } from '@expo/vector-icons';
// add conditonal name with md-create & ios-create
// onPress - will use createItem function, still need to pass it down

// props{
//
// }
class AddItemModal extends Component {

  constructor(){
    super()
    this.state={
      text: "",
    }
  }

  setText = text => {
    this.setState({
      text: text
    })
  }

  dataName = ""

  componentDidMount(){
    if(this.props.itemAdding !== "events"){
      this.dataName="title"
    } else{
      this.dataName="content"
    }
  }

  render(){
    return(
      <View style={styles.Row}>
        <ItemIcon type={this.props.itemAdding}/>
        <TextInput
          autoFocus={true}
          style={styles.TextInput}
          onChangeText={text=> this.setText(text)}
          onSubmitEditing={() => console.log(this.state.text, this.dataName)}/>
        <Ionicons
          style={styles.Icon}
          name={Platform.OS === 'ios'
            ? `ios-add`
            : 'md-add'}
          size={20}
          color={'dodgerblue'}
          onPress={()=> console.log(this.state.text)}
          />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  ModalContainer: {
    flex:1,
    position:'absolute',
    backgroundColor:'gray',
    height: 200,
    width: '100%',
    bottom: 70,
  },
  Row: {
    flexDirection: 'row',
    marginBottom: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 2,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  TextInput: {
    width: '75%'
  },
  Icon: {
    height: '100%',
    width: 30,
    alignItems: 'flex-start',
    // backgroundColor: 'blue',
  }
});

export default AddItemModal;
