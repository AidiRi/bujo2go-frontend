import React from 'react'
import { TouchableOpacity, StyleSheet, Platform} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

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
            <Ionicons
            style={styles.Icon}
            name={
              Platform.OS === 'ios'
                ? `ios-checkbox-outline`
                : 'md-checkbox-outline'
            }
            size={18}
            color='lightseagreen'
            onPress={() => {
              console.log("pressed open task with id: ", props.id, " and status of: ", props.status);
              props.changeStatus(props.type, props.id, "closed")
             }}
            />
          )
          break;
        // IF TASKS && CLOSED
        case ("closed"):
        return (
          <Ionicons
          style={styles.Icon}
          name={
            Platform.OS === 'ios'
              ? `ios-checkbox`
              : 'md-checkbox'
          }
          size={18}
          color='lightseagreen'
          onPress={() => {
            console.log("pressed closed task with id:", props.id, " and status of: ", props.status);
            props.changeStatus(props.type, props.id, "open")
          }}
          />
        )
        break;
        // IF TASKS DEFAULT
        default:
          return (
            <Ionicons
            style={styles.Icon}
            name={
              Platform.OS === 'ios'
                ? `ios-checkbox-outline`
                : 'md-checkbox-outline'
            }
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
            <Ionicons
            style={styles.Icon}
            name={
              Platform.OS === 'ios'
                ? `ios-radio-button-off`
                : 'md-radio-button-off'
            }
            size={18}
            color='lightseagreen'
            onPress={() => {
              console.log("pressed open event with id: ", props.id, " and status of: ", props.status);
              props.changeStatus(props.type, props.id, "closed")
             }}
            />
          )
          break;
        // IF EVENTS && CLOSED
        case ("closed"):
        return (
          <Ionicons
          style={styles.Icon}
          name={
            Platform.OS === 'ios'
              ? `ios-radio-button-on`
              : 'md-radio-button-on'
          }
          size={18}
          color='lightseagreen'
          onPress={() => {
            console.log("pressed closed event with id: ", props.id, " and status of: ", props.status);
            props.changeStatus(props.type, props.id, "open")
          }}
          />
        )
        break;
        // IF EVENTS DEFAULT
        default:
          return (
            <Ionicons
            style={styles.Icon}
            name={
              Platform.OS === 'ios'
                ? `ios-radio-button-off`
                : 'md-radio-button-off'
            }
            size={18}
            color='lightseagreen'
            />
          )
          break;
      }
      break;


    case  ("notes"):
      // IF NOTES
      return (
        <Ionicons
        style={styles.Icon}
        name={
          Platform.OS === 'ios'
            ? `ios-remove`
            : 'md-remove'
        }
        size={18}
        color='lightseagreen'
        />
      )
      break;

    // ITEM ICON DEFAULT
    default:
      return (
        <Ionicons
        style={styles.Icon}
        name={
          Platform.OS === 'ios'
            ? `ios-paw`
            : 'md-paw'
        }
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
