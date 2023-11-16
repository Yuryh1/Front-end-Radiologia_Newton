import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, KeyboardAvoidingView} from 'react-native';
import Constants from 'expo-constants';
import{TextInput, Button} from 'react-native-paper'
import * as WebBrowser from 'expo-web-browser';
import Logo from '../assets/logo_odonto.png'
import LogoGoogle from './loginIcon.js'
import LogoApple from './loginIcon2.js'
import * as AuthApi from './AuthApi'
import * as UserRepository from './UserRepository'
import * as Google from 'expo-auth-session/providers/google';
WebBrowser.maybeCompleteAuthSession();
import AsyncStorage from "@react-native-async-storage/async-storage";
 export default ({navigation, route}) => {
   const [userInfo, setUserInfo] = useState(null);
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [request, response, promptAsync]= Google.useAuthRequest({
     androidClientId:"1015267743443-va9trsi2l7gva44ph1n3murnrik1sui0.apps.googleusercontent.com",
        iosClientId:"1015267743443-4oi2v62a293mgc47bcb3rcv6mldt957p.apps.googleusercontent.com",
        webClientId:"1015267743443-1bn3i0fd3n5kqb2rhdbfco1aeo2bhjt0.apps.googleusercontent.com",
   })
   useEffect(() => {
        handleSigninWithGoogle()
   }, [response]);
async function handleSigninWithGoogle() {
     const userGoogle = await AsyncStorage.getItem('@user');
     if(!userGoogle){
       if(response?.type ==='success'){
await getUserInfo(response.authentication.accessToken)
       }

     }else{
       setUserInfo(JSON.parse(userGoogle))


     }
}
const getUserInfo = async (token) => {
  if (!token) return;
  try {
    const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
    );
    const userInfoResponse = await response.json();
    await AsyncStorage.setItem('@user', JSON.stringify(userInfoResponse))
    setUserInfo(userInfoResponse)
     }catch(error){
    console.log(error)
  }
}
   const login = async (loginType) => {
     const data = {
         email,
         password,
         loginType
     }
     const user = await AuthApi.login(data)

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
           login('email')
         }}
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
          <LogoGoogle
          onPress={()=>{promptAsync()}

          }
          ></LogoGoogle>
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
