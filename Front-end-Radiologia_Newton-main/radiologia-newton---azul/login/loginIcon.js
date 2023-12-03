import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
// import { AntDesign } from '@expo/vector-icons'; 
import LogoGoogle from '../assets/logoGoogle.png'

const LogoGoogleComponent = ({ onPress }) => {
  return (
      <TouchableOpacity style={styles.main} onPress={onPress}>
        <Image source={LogoGoogle} style={styles.logoGoogle} />
      </TouchableOpacity>
  );
};

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
  },

  logoGoogle:{
    width:17,
    height: 17,
    
  }

})
export default LogoGoogleComponent;
