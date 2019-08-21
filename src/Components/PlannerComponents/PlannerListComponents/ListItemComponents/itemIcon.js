import React from 'react'
import { TouchableOpacity, StyleSheet, Platform} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

// props = {
// type ,
//  status (conditionally)
// id
// }


const ItemIcon = props => {



  switch (props.type) {

    case  ("tasks"):
      // IF TASKS
      switch (props.status) {
        // IF TASKS && OPEN
        case ("open"):
          return (
            <MaterialCommunityIcons
            style={styles.Icon}
            name={'checkbox-blank-outline'}
            size={18}
            color='lightseagreen'
            onPress={() => {
              console.log("pressed open task with id: ", props.id, " and status of: ", props.status);
              props.changeStatus(props.type, props.id, props.status)
             }}
            />
          )
          break;
        // IF TASKS && CLOSED
        case ("closed"):
        return (
          <MaterialCommunityIcons
          style={styles.Icon}
          name={'checkbox-marked'}
          size={18}
          color='lightseagreen'
          onPress={() => {
            console.log("pressed closed task with id:", props.id, " and status of: ", props.status);
            props.changeStatus(props.type, props.id, props.status)
          }}
          />
        )
        break;
        // IF TASKS && CANCELLED
        case ("canceled"):
        return (
          <MaterialCommunityIcons
          style={styles.Icon}
          name={'minus-box-outline'}
          size={18}
          color='lightseagreen'
          onPress={() => {
            console.log("pressed closed task with id:", props.id, " and status of: ", props.status);
            props.changeStatus(props.type, props.id, props.status)
          }}
          />
        )
        break;
        // IF TASKS DEFAULT
        default:
          return (
            <MaterialCommunityIcons
            style={styles.Icon}
            name={'douban'}
            size={18}
            color='lightseagreen'
            />
          )
          break;
      }
      break;

    case  ("events"):
      // IF EVENTS
      switch (props.status) {
        // IF EVENTS && OPEN
        case ("open"):
          return (
            <MaterialCommunityIcons
            style={styles.Icon}
            name={'circle-outline'}
            size={18}
            color='lightseagreen'
            onPress={() => {
              console.log("pressed open event with id: ", props.id, " and status of: ", props.status);
              props.changeStatus(props.type, props.id, props.status)
             }}
            />
          )
          break;
        // IF EVENTS && CLOSED
        case ("closed"):
        return (
          <MaterialCommunityIcons
          style={styles.Icon}
          name={'circle-slice-8'}
          size={18}
          color='lightseagreen'
          onPress={() => {
            console.log("pressed closed event with id: ", props.id, " and status of: ", props.status);
            props.changeStatus(props.type, props.id, props.status)
          }}
          />
        )
        break;
        case ("canceled"):
        return (
          <MaterialCommunityIcons
          style={styles.Icon}
          name={'minus-circle-outline'}
          size={18}
          color='lightseagreen'
          onPress={() => {
            console.log("pressed canceled event with id: ", props.id, " and status of: ", props.status);
            props.changeStatus(props.type, props.id, props.status)
          }}
          />
        )
        break;
        // IF EVENTS DEFAULT
        default:
          return (
            <MaterialCommunityIcons
            style={styles.Icon}
            name={'douban'}
            size={18}
            color='lightseagreen'
            />
          )
          break;
      }
      break;


    case ("notes"):
      // IF NOTES
      return (
        <MaterialCommunityIcons
        style={styles.Icon}
        name={'minus'}
        size={18}
        color='lightseagreen'
        />
      )
      break;

    // ITEM ICON DEFAULT
    default:
      return (
        <MaterialCommunityIcons
        style={styles.Icon}
        name={'douban'}
        size={18}
        color='lightseagreen'
        />
      )
    break;
  }
}

const styles = StyleSheet.create({
  Icon: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
    marginLeft: 3,
    marginRight: -3,

  }
})

export default ItemIcon;
