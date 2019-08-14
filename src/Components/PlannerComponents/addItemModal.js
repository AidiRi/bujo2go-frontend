import React, { PureComponent } from 'react'
import { Text, TouchableHighlight, View, Alert, StyleSheet, Button, Modal} from 'react-native'
// import Modal from "react-native-modal";


// props={
// isAddModalDislay,
// toggleAddModal() }
class AddItemModal extends PureComponent{

  state = {
    isModalVisible: false
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    if (!this.props.isAddModalOpen){
    return(
      <View style={{ flex: 1 }}>
        <Button title="Show modal" onPress={this.toggleModal} />
        <Modal visible={this.state.isModalVisible}>
            <Text>Hello!</Text>

        </Modal>
      </View>
    )
  }
  }
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
