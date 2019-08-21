import React from 'react'
import { TouchableOpacity, Platform, StyleSheet, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// props = {
// setIsEditing(),
// type ,
// id
// }

const EditButton = props => {
  return (
      <TouchableOpacity
        style={styles.EditButton}
        activeOpacity={0.7}
        onPress={()=> { props.isEditing === false ? props.setIsEditing(true) : null }}
      >
        <Ionicons
        name={
          (Platform.OS === 'ios'
            ? `ios-create`
            : 'md-create')
        }
        size={18}
        color={props.isEditing === false ? '#8fe3de' : 'gray'}
        />
      </TouchableOpacity>
  )

}

const styles= StyleSheet.create({
  EditButton: {
    flex: 1,
    // backgroundColor: 'blue',
    alignItems: 'center',
    padding: 5,
    justifyContent: 'center',
  },


})

export default EditButton;
