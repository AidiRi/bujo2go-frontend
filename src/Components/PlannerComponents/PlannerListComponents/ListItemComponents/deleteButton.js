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
    <View style={styles.DeleteSpace}>
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
        size={20}
        color='dodgerblue'
        />
      </TouchableOpacity>
    </View>
  )
}


const styles= StyleSheet.create({
  DeleteButton: {
    // backgroundColor: 'darkblue',
    width:20,

    alignItems: 'center',
    padding: 2,
    margin: 4,
    marginTop: 0,
    justifyContent: 'flex-end',

  },
  DeleteSpace: {
    height: '100%'
  }
})


export default DeleteButton;
