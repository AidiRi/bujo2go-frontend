import React from 'react';
import { TouchableOpacity, Platform, StyleSheet, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// props = {
// delete()
// id
// type
// }
const DeleteButton = props => {

  return (
      <TouchableOpacity
        style={styles.DeleteButton}
        activeOpacity={0.7}
        onPress={()=> props.delete(props.id, props.type)}
        >
        <Ionicons
        name={
          Platform.OS === 'ios'
            ? `ios-close`
            : 'md-close'
        }
        size={18}
        color='#8fe3de'
        />
      </TouchableOpacity>
  )
}


const styles= StyleSheet.create({
  DeleteButton: {
    flex: 1,
    // backgroundColor: 'darkblue',
    alignItems: 'center',
    padding: 5,
    justifyContent: 'center',
  },
})


export default DeleteButton;
