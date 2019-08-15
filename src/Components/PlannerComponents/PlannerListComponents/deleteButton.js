import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, Platform, StyleSheet} from 'react-native';

// props = {
// delete()
// id
// type
// }
const DeleteButton = props => {

  return (
    <TouchableOpacity
      style={styles.Delete}
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
  )
}

export default DeleteButton

const styles= StyleSheet.create({
  Delete: {
    // backgroundColor: "blue",
    width:20,
    height:20,
    alignItems: "center",
    justifyContent: "center",

  }
})
