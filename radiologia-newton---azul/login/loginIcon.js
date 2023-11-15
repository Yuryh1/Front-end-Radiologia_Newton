import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
// import { AntDesign } from '@expo/vector-icons'; 
import LogoGoogle from '../assets/logoGoogle.png'

export default () => {
  return(
    <TouchableOpacity style = {styles.main}>
      <Image source={LogoGoogle} style={styles.logoGoogle} />
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
  },

  logoGoogle:{
    width:34,
    height: 34,
    
  }

})