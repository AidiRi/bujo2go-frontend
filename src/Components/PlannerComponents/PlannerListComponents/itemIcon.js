import React from 'react'
import { TouchableOpacity, StyleSheet, Platform} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

// props = {
// type ,
//  status (conditionally)
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
            size={20}
            color='dodgerblue'
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
          size={20}
          color='dodgerblue'
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
            size={20}
            color='dodgerblue'
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
            size={20}
            color='dodgerblue'
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
          size={20}
          color='dodgerblue'
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
            size={20}
            color='dodgerblue'
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
        size={20}
        color='dodgerblue'
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
        size={20}
        color='dodgerblue'
        />
      )
    break;
  }
}

const styles = StyleSheet.create({
  Icon: {
    height: "100%",
    width: 30,
    alignItems: "flex-start",
    // backgroundColor: "blue",
  }
})

export default ItemIcon;
