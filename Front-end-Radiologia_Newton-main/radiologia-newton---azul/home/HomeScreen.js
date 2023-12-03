import React, {useState, useEffect, useContext} from 'react';
import ItemMenu from './ItemMenu.js'
import {View, StyleSheet, FlatList} from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5} from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import {UserContext} from "../login/userContext";

import Card from '../menus/Card'

import * as UserRepository from '../login/UserRepository'
import {MenuContext} from "../menus/menuContext";

const menu = [
  {
    id: 1,
    descricao: "Anatomia",
    icone: <Ionicons name="body" size={64} color="#193073" margin={20} />,
    itens: [
      {
        id: 1,
        title: 'Canais nutrientes',
        subTitle: 'Canais nutrientes',
        image: 'https://anatomia.ict.unesp.br/radiologia/mandibula/MAND%2001.jpg',
      },
      {
        id: 2,
        title: 'Câmara pupular e \ncanal radicular',
        subTitle: 'Câmara pupular e canal \nradicular',
        image: 'https://anatomia.ict.unesp.br/radiologia/mandibula/MAND%2001.jpg',
      },
      {
        id: 3,
        title: 'Cemento',
        subTitle: 'Cemento',
        image: 'https://anatomia.ict.unesp.br/radiologia/mandibula/MAND%2001.jpg',
      },
    ]
  },
  {
    id: 2,
    descricao: "Patologia",
    icone: <FontAwesome5 name="virus" size={64} color="#193073" margin={20} />,
    itens: [
        {
          id: 4,
          title: 'Cortival alveolar',
          subTitle: 'Cortival alveolar',
          image: 'https://anatomia.ict.unesp.br/radiologia/mandibula/MAND%2001.jpg',
        },
    ]
  },
  {
    id: 3,
    descricao: "Alterações Dentárias",
    icone: <MaterialCommunityIcons name="tooth" size={64} color="#193073" margin={20} />,
    itens: [
        {
          id: 5,
          title: 'Crista óssea alveolar',
          subTitle: 'Crista óssea alveolar',
          image: 'https://anatomia.ict.unesp.br/radiologia/mandibula/MAND%2001.jpg',
        },
        {
          id: 6,
          title: 'Dentina',
          subTitle: 'Dentina',
          image: 'https://anatomia.ict.unesp.br/radiologia/mandibula/MAND%2001.jpg',
        },
    ]
  },
  {
    id: 4,
    descricao: "Testes",
    icone: <MaterialCommunityIcons name="head-question" size={64} color="#193073" margin={20} />,
    itens: [
        {
          id: 7,
          title: 'Esmalte',
          subTitle: 'Esmalte',
          image: 'https://anatomia.ict.unesp.br/radiologia/mandibula/MAND%2001.jpg',
        },
        {
          id: 8,
          title: 'Espaço do ligamento \nperiodontal',
          subTitle: 'Espaço do ligamento \nperiodontal',
          image: 'https://anatomia.ict.unesp.br/radiologia/mandibula/MAND%2001.jpg',
        },
    ]
  }
]

export default ({navigation, route}) =>{

  //const {user} = route.params
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredList, setFilteredList] = useState([])
  const menuObject = useContext(MenuContext)
  const userObject = useContext(UserContext)

  const findUser = async () => {
    const user = await UserRepository.find()
    navigation.setOptions({ title: user.email })
  }

  useEffect(() => {
    findUser()
    console.log(userObject)
  }, [])

  //alert(user.data.email)

  const onChangeSearch = (query) => {
    setSearchQuery(query);

    if (query.trim().length > 0) {
      // Adaptação para filtrar com base nos dados do contexto
      const list = menuObject.menuData.reduce(
          (accumulator, currentValue) => {
            return accumulator.concat(currentValue.children || []);
          }, []
      ).filter(m => m.name.includes(query));
      console.log(list)
      setFilteredList(list);
    } else {
      setFilteredList([]);
    }

  };

  return(
    <View style = {styles.container}>
      <Searchbar
        style = {styles.pesquisa}
        placeholder = 'Search'
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <View style={{flex: 1}}>
      {
        filteredList.length === 0
          ? <FlatList
              key='flatList01'
              style = {styles.flatList}
              data = {menuObject.menuData}
              renderItem= {(row) =>
                <ItemMenu
                  title  = {row.item.name}
                  icon = {row.item.icone}
                  onPress={() => navigation.navigate('menu', {index: row.index})}
                />
              }
              keyExtractor={(item) => item.id}
            />
          : <FlatList
              key='flatList02'
              data={filteredList}
              renderItem={({ item }) => (
                <Card
                  title={item.name}
                  subTitle={item.name}
                  image={item.image}
                  onPress={() => navigation.navigate('xray')}
                />
              )}
              keyExtractor={(item) => item.id}
              style={styles.flatList}
            />
      }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flatList: {

  },
  pesquisa: {
    marginTop: 20,
  }
})