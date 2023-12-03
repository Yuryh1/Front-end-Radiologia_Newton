import React, { useState, useContext} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import{TextInput, Button} from 'react-native-paper'
import * as WebBrowser from 'expo-web-browser';
import Logo from '../assets/logo_odonto.png'
import LogoGoogle from './loginIcon.js'
import LogoApple from './loginIcon2.js'
import * as AuthApi from './AuthApi'
import * as UserRepository from './UserRepository'
import {UserContext} from "./userContext";
WebBrowser.maybeCompleteAuthSession();
 export default ({navigation, route}) => {
   const [userInfo, setUserInfo] = useState(null);
   const [email, setEmail] = useState('test@gmail.com')
   const [password, setPassword] = useState('123')
   const userObject = useContext(UserContext)
   const login = async (loginType) => {

     const data = {
         email,
         password,
         loginType
     }
     const user = await AuthApi.login(data)

        if(user){
       navigation.navigate('main')
     } else {
       alert('Usuário ou senha inválido')
     }
   }
   const handleToken = async (token) => {

   }
   const handleLogin = async (loginType) => {
     const userInfo = await UserRepository.find()
     if(loginType === 'google'){
     if(!userObject && !userInfo){
       await AuthApi.login(loginType)
     }
     else{
       console.log(userObject)
       console.log(userInfo)
       await UserRepository.save(userObject)
       navigation.navigate('main')
     }
     }
     else{
   await  login(loginType)
     }

   }

  return (
    <View style={styles.container}>
    <View style={styles.img}>
      <Image source={Logo} style = {styles.logo}/>
    </View>
      <View style = {styles.inputs}>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
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
         onPress={()=> {
           login('email')}}

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
        <Text style={styles.entradas}> ────────  Ou continue com  ────────</Text>
        <View style = {styles.entradasLogin}>
          <LogoGoogle
          onPress={()=>{ handleLogin('google')}

          }
          ></LogoGoogle>
          
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
    marginTop:40,
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
    width: 300,
    height: 60,
    borderRadius: 10,
    alignSelf: 'center',
    fontSize: 14,
    elevation:10,
    justifyContent: 'center'
  },

  entradas: {
    textAlign: 'center',
    fontSize: 13,
    padding: 0,
    marginTop: 11,
    color: '#193073',
  },
  entradasLogin: {
    alignSelf: 'center',
    flexDirection: 'row',
    color: '#193073',
  }
})
