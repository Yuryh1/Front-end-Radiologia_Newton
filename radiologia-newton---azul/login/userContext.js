import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import { getUsers } from './AuthApi';
import * as UserRepository from "./UserRepository";

export const UserContext = createContext({});

export default function UserContextProvider(props) {
   const [userObject, setUserObject] = useState();

   useEffect(() => {
      const fetchUserData = async () => {
         try {
            const userInfo = await getUsers();
            console.log(userInfo);
            setUserObject(userInfo);
            await UserRepository.save(userObject);
         } catch (error) {
            console.log(error);
         }
      };

      fetchUserData();
   }, []); // Não esqueça de adicionar as dependências do useEffect se necessário

   return <UserContext.Provider value={userObject}>{props.children}</UserContext.Provider>;
}
