import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

export default () => {
  return(
    <TouchableOpacity style = {styles.main}>
      <FontAwesome name="facebook-f" size={17} color="white" />
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create ({
  main: {
    height: 50,
    width: 50,
    backgroundColor: '#193073',
    borderRadius: 30,
    shadowColor: 'black',
    shadowOffset: {width: 5, height:5},
    shadowOpacity: 0.06,
    margin: 9,
    elevation: 10,

    justifyContent: 'center',
    alignItems: 'center',
  }
})