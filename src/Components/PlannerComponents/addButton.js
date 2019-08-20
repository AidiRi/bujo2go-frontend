import React from 'react'
import {
  TouchableOpacity,
  Platform,
  StyleSheet,
  Fragment,
  View
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import ActionButton from 'react-native-action-button';


// props={
// content ,
// setItemAdding()
// }
const AddButton = props => {

    // return (
    //   <TouchableOpacity
    //     activeOpacity={0.7}
    //     onPress={()=> props.toggleAddModal(true)}
    //     style={styles.Button}>
    //     <Ionicons
    //     name={
    //       Platform.OS === 'ios'
    //         ? `ios-add-circle`
    //         : 'md-add-circle'
    //     }
    //     size={60}
    //     color='dodgerblue'
    //     />
    //   </TouchableOpacity>
    // )

    return (
        <ActionButton buttonColor="rgba(52, 152, 219, 1)">
          <ActionButton.Item
            buttonColor='#9b59b6'
            title="New Task"
            onPress={() => props.setItemAdding("tasks")}
          >
            <Ionicons
              name={Platform.OS === 'ios'
                ? `ios-checkbox-outline`
                : 'md-checkbox-outline'}
              style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor='#6d5afc'
            title="New Event"
            onPress={() => props.setItemAdding("events")}
          >
            <Ionicons
              name={Platform.OS === 'ios'
                ? `ios-radio-button-off`
                : 'md-radio-button-off'
              }
              style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor='#1abc9c'
            title="New Note"
            onPress={() => props.setItemAdding("notes")}
          >
            <Ionicons
              name={Platform.OS === 'ios'
                ? `ios-remove`
                : 'md-remove'
              }
              style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>

    );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  ListStyle: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },

  Button: {
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
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

export default AddButton;
