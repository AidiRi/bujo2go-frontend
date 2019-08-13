import React, { useState} from 'react'
import { Modal, Text, TouchableHighlight, View, Alert, StyleSheet} from 'react-native'


// props={
// isAddModalDislay,
// toggleAddModal() }
const AddItemModal = props => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return(
    <View style={{marginTop: 22}}>

      {props.isAddModalOpen && <View style={{
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        margin: '4em',
        padding: '1em',
        borderRadius: 5,
      }}>
        <Text>Add an item: </Text>
        <Text onPress={() => props.toggleAddModal(false)}>close</Text>
      </View>}
    </View>
  )
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
});

export default AddItemModal;
