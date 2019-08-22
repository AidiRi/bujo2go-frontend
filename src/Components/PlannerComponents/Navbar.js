import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { Dropdown } from 'react-native-material-dropdown';

// Props ={
// setPlannerDay()
// todaysDate
// filterSelection
// setFilterSelection()
// }
Navbar = props => {

  const _menu = null;

  const setMenuRef = ref => {
    this._menu = ref;
  };

  const hideMenu = () => {
    this._menu.hide();
  };

  const showMenu = () => {
    this._menu.show();
  };

  const setFilterSelection = () => {
    props.setFilterSelection();
  }

  return (
    <View style={styles.Navbar}>
      <View style={styles.calendarIcon}>
        <MaterialCommunityIcons
          name='calendar-today'
          size={23}
          color={'whitesmoke'}

          onPress={() => props.setPlannerDay(props.todaysDate)}
        />
      </View>
      <View style={styles.menu}>

        <Menu
          ref={setMenuRef}
          button={
            <TouchableOpacity onPress={showMenu} style={styles.menuButton}>
            <Text style={styles.menuLabel}>{props.filterSelection}</Text>
            <MaterialCommunityIcons
              name='menu-down'
              size={30}
              color={'whitesmoke'}
            />
            </TouchableOpacity>
          }
        >
          <MenuItem onPress={()=>{this._menu.hide(); props.setFilterSelection("All")}}>All</MenuItem>
          <MenuItem onPress={()=>{this._menu.hide(); props.setFilterSelection("Tasks")}}>Tasks</MenuItem>
          <MenuItem onPress={()=>{this._menu.hide(); props.setFilterSelection("Events")}}>Events</MenuItem>
          <MenuItem onPress={()=>{this._menu.hide(); props.setFilterSelection("Notes")}}>Notes</MenuItem>
        </Menu>
      </View>


    </View>
  )

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
  menu: {
    flexDirection: 'row',
    // backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',

  },
  calendarIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    width: 50,
  },
  menuButton: {
    // backgroundColor: 'whitesmoke',
    width: 70,
    flexDirection: 'row'

  },
  menuLabel: {
    fontSize: 16,
    textAlignVertical: 'center',
    color: 'whitesmoke'
    // lineHeight: 40,
    // color: 'purple'
  }
})

export default Navbar;
