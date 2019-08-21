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

// props{
// setItemAdding()
// itemAdding
// create()
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

  render(){
    return(
      <View style={styles.Row}>
        <ItemIcon type={this.props.itemAdding} status={"open"}/>
        <TextInput
          autoFocus={true}
          style={styles.TextInput}
          onChangeText={text=> this.setText(text)}
          onSubmitEditing={() => {
            this.props.create(this.props.itemAdding, this.state.text)
            console.log(this.state.text); this.props.setItemAdding(null)}}
          onBlur={() => this.props.setItemAdding(null)}
          />
        <Ionicons
          style={styles.Icon}
          name={Platform.OS === 'ios'
            ? `ios-add`
            : 'md-add'}
          size={20}
          color={'lightseagreen'}
          onPress={()=> {
            this.props.create(this.props.itemAdding, this.state.text)
            console.log(this.state.text); this.props.setItemAdding(null)}}
          />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  Row: {
    flexDirection: 'row',
    marginBottom: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'gray'
  },
  TextInput: {
    width: '75%'
  },
  Icon: {
    height: '100%',
    width: 30,
    alignItems: 'center',
    // backgroundColor: 'yellow',
    padding: 5,
  }
});

export default AddItemModal;
