import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class LinksScreen extends Component {

  render(){

    return (
      <View style={styles.container}>

      </View>
    );
  }
}

LinksScreen.navigationOptions = {
  title: 'Collections',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  }
});
