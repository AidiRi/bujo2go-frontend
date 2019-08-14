import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons';


// props={ content }
const AddButton = props => {

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={()=> props.toggleAddModal(true)}
        style={styles.Button}>
        <Ionicons
        name={
          Platform.OS === 'ios'
            ? `ios-add-circle`
            : 'md-add-circle'
        }
        size={60}
        color='dodgerblue'
        />
      </TouchableOpacity>
    )

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
});

export default AddButton;
