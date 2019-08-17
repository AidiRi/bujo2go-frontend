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


// props={ content }
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
      <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
        {/* Rest of the app comes ABOVE the action button component !*/}
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Ionicons name={Platform.OS === 'ios'
              ? `ios-checkbox-outline`
              : 'md-checkbox-outline'} style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="New Event" onPress={() => {}}>
            <Ionicons name={
              Platform.OS === 'ios'
                ? `ios-radio-button-off`
                : 'md-radio-button-off'
            } style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="New Note" onPress={() => {}}>
            <Ionicons name={
              Platform.OS === 'ios'
                ? `ios-remove`
                : 'md-remove'
            } style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
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
