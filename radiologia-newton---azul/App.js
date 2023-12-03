import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './login/LoginScreen';
import HomeScreen from './home/HomeScreen';
import MenuScreen from './menus/MenusScreen';
import XRayScreen from './xray/XRayScreen';
import ListScreen from './question/ListScreen';
import Cadastro from './login/Cadastro';
import ProfileScreen from './profile/ProfileScreen';
import ContactScreen from './contact/ContactScreen';
import TermsOfUseScreen from './termsOfUse/TermsOfUseScreen';
 
import CreateScreen from './question/CreateScreen'
import ContextUser, {UserContext} from './login/userContext'
import {MenuContext, MenuProvider} from "./menus/menuContext";

import * as Linking from 'expo-linking';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const prefix = Linking.createURL('/');

const linking = {
    prefixes: [prefix],
    config: {
        screens: {
            login: 'login',
            main: 'main',
            home: 'home',
            questionList: 'questionList',
            menu: 'menu',
            xray: 'xray',
            createQuestion: 'createQuestion',
            Cadastro: 'cadastro',
            // Adicione outros caminhos conforme necessário
        },
    },
};
const MainScreen = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#27A4F2',
        },
        headerTitleStyle: {
          color: 'white',
        },
      }}>
      <Drawer.Screen name="home" component={HomeScreen} options={homeOptions} />
      <Drawer.Screen name="perfil" component={ProfileScreen} options={profileOptions} />
      <Drawer.Screen name="contato" component={ContactScreen} options={contactOptions} />
      <Drawer.Screen
        name="questionList"
        component={ListScreen}
        options={questionListOptions}
      />
    </Drawer.Navigator>
  );
};

export default () => {
    const userObject = useContext(UserContext)
    const menuObject = useContext(MenuContext)
    return (


    <ContextUser>
        <MenuProvider>
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        initialRouteName='login'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#27A4F2',
          },
          headerTitleStyle: {
            color: 'white',
          },
        }}>
        <Stack.Screen
          name="login"
          component={userObject.name? MainScreen: LoginScreen}
          options={loginOptions}
        />
        <Stack.Screen
          name="main"
          component={MainScreen}
          options={mainOptions}
        />
        <Stack.Screen
          name="menu"
          component={MenuScreen}
          options={menuOptions}
        />
        <Stack.Screen
          name="xray"
          component={XRayScreen}
          options={xRayOptions}
        />
        <Stack.Screen
          name="createQuestion"
          component={CreateScreen}
          options={createScreenOptions}
        />
           <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={cadastrOptions}
        />
         <Stack.Screen 
          name="termosDeUso" 
          component={TermsOfUseScreen} 
          options={termsOfUseOptions} 
        />
          <Stack.Screen 
          name="contato" 
          component={ContactScreen} 
          options={contactOptions} 
        />
        

      </Stack.Navigator>
    </NavigationContainer>
        </MenuProvider>
    </ContextUser>
  );
};

const loginOptions = {
  headerShown: false,
};

const mainOptions = {
  headerShown: false,
};

const homeOptions = {
  title: 'Radiologia Newton',
};

const questionListOptions = {
  title: 'Cadastro de Questões',
};

const menuOptions = {
  title: 'Anatomia',
};

const xRayOptions = {
  title: 'Raio X',
};

const createScreenOptions = {
  title: 'Nova Questão'
}
const cadastrOptions = {
  title: 'Cadastro',
};
const profileOptions = {
  title: 'Perfil',
};
 
const termsOfUseOptions = {
  title: 'Termos de Uso',
}; 
const contactOptions = {
  title: 'Contato',
};