import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';



export default ({title, icon, onPress}) => {
  return(
    <TouchableOpacity style = {styles.main} onPress = {onPress}>
      <Text style = {styles.icon}>{icon}</Text>
      <Text style = {styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  main: {
    height: 130,
    width: 350,
    backgroundColor: '#27A4F2',
    borderRadius: 15,
    margin: 10,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#193073',
  },

  icon:{
    margin: 15
  },

  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
});