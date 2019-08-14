import React, { PureComponent, useState } from 'react'
import { Text, TouchableHighlight, View, Alert, StyleSheet, Button} from 'react-native'
import Modal from "react-native-modal";


// props={
// isAddModalDislay,
// toggleAddModal() }
const AddItemModal = props => {

const [ isVisible, setIsVisible] = useState(false)
//   constructor(){
//     super()
//     this.state = {
//       isModalVisible: false
//     }
// }
  //
  // toggleModal = () => {
  //   this.setState({ isModalVisible: !this.state.isModalVisible });
  // };

  const toggleModal = () => setIsVisible( isVisible ? false : true )


    return(
      <View style={{ flex: 1 }}>
        <Button title="Show modal" onPress={toggleModal} />
        <Modal isVisible={isVisible}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </Modal>
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
