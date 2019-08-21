import React from 'react';
import {
  View,
  StyleSheet,
  Picker
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


Navbar = () => {

  return (
    <View style={styles.Navbar}>
      <View style={styles.calendarIcon}>
        <MaterialCommunityIcons
          name='calendar-today'
          size={30}
          color={'black'}

          onPress={() => console.log("pressed on CALENDAR icon")}
        />
      </View>
      <View style={styles.menuIcon}>
        <MaterialCommunityIcons
          name='menu-down'
          size={30}
          color={'black'}
          onPress={() => console.log("pressed on MENU icon")}
        />
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
  }

})

export default Navbar;
