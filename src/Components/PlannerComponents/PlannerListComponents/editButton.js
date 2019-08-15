import React from 'react'
import { TouchableOpacity, Platform, StyleSheet, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// props = {
// edit(),
// type ,
// id
// }
const content = "New Content!"

const EditButton = props => {
  return (
    <View style={styles.EditSpace}>
      <TouchableOpacity
        style={styles.EditButton}
        activeOpacity={0.7}
        onPress={()=> {props.edit(props.id, props.type, content)}}
      >
        <Ionicons
        name={
          Platform.OS === 'ios'
            ? `ios-create`
            : 'md-create'
        }
        size={20}
        color='dodgerblue'
        />
      </TouchableOpacity>
    </View>
  )

}

const styles= StyleSheet.create({
  EditButton: {
    // backgroundColor: 'blue',
    width:20,

    alignItems: 'center',
    padding: 2,
    margin: 4,
    marginTop: 0,
    justifyContent: 'flex-start',
  },
  EditSpace: {
    height: '100%'
  }

})

export default EditButton;
