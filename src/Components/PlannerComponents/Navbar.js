import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { Dropdown } from 'react-native-material-dropdown';

// Props ={
// setPlannerDay()
// todaysDate
// }
class Navbar extends Component {

  constructor(){
    super()
    this.state = {
      chosenItem: 'All'
    }
  }
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  render(){
    return (
      <View style={styles.Navbar}>
        <View style={styles.calendarIcon}>
          <MaterialCommunityIcons
            name='calendar-today'
            size={30}
            color={'black'}

            onPress={() => props.setPlannerDay(props.todaysDate)}
          />
        </View>
        <View style={styles.menuIcon} >
          <Text>{this.state.chosenItem}</Text>
          <Menu
            ref={this.setMenuRef}
            button={<MaterialCommunityIcons
              name='menu-down'
              size={30}
              color={'black'}
              onPress={this.showMenu}
            />}
          >
            <MenuItem onPress={this.hideMenu}>All</MenuItem>
            <MenuItem onPress={this.hideMenu}>Tasks</MenuItem>
            <MenuItem onPress={this.hideMenu}>Events</MenuItem>
            <MenuItem onPress={this.hideMenu}>Notes</MenuItem>
          </Menu>
        </View>


      </View>
    )
  }

}

const styles = StyleSheet.create({
  Navbar: {
    flex: 1,
    maxHeight: 40,
    flexDirection: 'row',
    marginTop: 3,
    justifyContent: 'flex-end',
    backgroundColor: 'steelblue'
  },
  menuIcon: {
    flexDirection: 'row',
    // backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50
  },
  calendarIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    width: 50,
  },
  dropdownText: {


  }
})

export default Navbar;
