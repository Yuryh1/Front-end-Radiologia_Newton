import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, KeyboardAvoidingView} from 'react-native';
import Constants from 'expo-constants';
import{TextInput, Button} from 'react-native-paper'
import Logo from '../assets/logo_odonto.png'
import LogoGoogle from './loginIcon.js'
import LogoApple from './loginIcon2.js'

import * as AuthApi from './AuthApi'
import * as UserRepository from './UserRepository'

 export default ({navigation, route}) => {

   const [username, setUsername] = useState('112233')
   const [password, setPassword] = useState('233')

   const login = async () => {
     const user = await AuthApi.login(username, password)

     if(user) {
       await UserRepository.save(user)
       navigation.navigate('main')
     } else {
       alert('Usuário ou senha inválido')
     }
   }

  return (
    <View style={styles.container}>
    <View style={styles.img}>
      <Image source={Logo} style = {styles.logo}/>
    </View>
      <View style = {styles.inputs}>
        <TextInput
          value={username}
          onChangeText={(text) => setUsername(text)}
          style = {styles.email} 
          label = "E-mail"
          mode = "flat"
          theme={{
            colors: {
              primary: "black"
            }
          }}
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          style = {styles.senha} 
          label = "Senha"
          mode = "flat"
          theme={{
            colors: {
              primary: "black"
            }
          }}
        />
 
        <Button
         mode= "contained"
         buttonColor= '#193073'
         textColor = "white"
         style = {styles.botao}
         onPress={login}
         >
            ENTRAR
        </Button>
        <Button
          mode="contained"
          buttonColor="#193073"
          textColor="white"
          style={styles.botao}
          onPress={() => navigation.navigate('Cadastro')}>
          CADASTRAR
        </Button>
        <Text style ={styles.cadastre}>Cadastre-se</Text> 
        <Text style={styles.entradas}> ────────  Ou continue com  ────────</Text>
        <View style = {styles.entradasLogin}>
          <LogoGoogle></LogoGoogle>
          <LogoApple></LogoApple>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#27A4F2',
    height: "100%",
    justifyContent: "center"
  },
  logo: {
    marginTop:150,
    width: 200,
    height: 200,
    alignSelf: "center"
  },
  inputs: {
    padding: 8,
  },
  email:{
    marginBottom: 10,
    width: 350,
    height: 60,
    alignSelf: 'center',
  },
  senha:{
    width: 350,
    height: 60,
    marginBottom: 10,
    alignSelf: 'center',
  },
  cadastre: {
    textAlign: 'center',
    color: '#193073',
    marginTop: 26,
    fontSize: 13
  },
  botao: {
    marginTop: 10,
    width: 355,
    height: 60,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center'
  },

  entradas: {
    textAlign: 'center',
    fontSize: 13,
    padding: 10,
    marginTop: 11,
    color: '#193073',
  },
  entradasLogin: {
    alignSelf: 'center',
    flexDirection: 'row',
    color: '#193073',
  }
})
