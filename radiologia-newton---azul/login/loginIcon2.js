import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

export default () => {
  return(
    <TouchableOpacity style = {styles.main}>
      <FontAwesome name="facebook-f" size={34} color="white" />
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create ({
  main: {
    height: 100,
    width: 100,
    backgroundColor: '#193073',
    borderRadius: 30,
    shadowColor: 'black',
    shadowOffset: {width: 10, height:10},
    shadowOpacity: 0.06,
    margin: 18,
    elevation: 10,

    justifyContent: 'center',
    alignItems: 'center',
  }
})