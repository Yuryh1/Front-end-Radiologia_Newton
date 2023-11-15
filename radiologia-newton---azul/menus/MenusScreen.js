import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Card from './Card';
import ItemMenu from './ItemMenu';

const previousMenu = [
  { id: 10, label: 'Dente e Estruturas Anexas' },
  { id: 11, label: 'Maxila' },
  { id: 12, label: 'Mandibula' },
  { id: 13, label: 'Panorâmica' },
];

const menus = [
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
  {
    id: 4,
    title: 'Cortival alveolar',
    subTitle: 'Cortival alveolar',
    image: 'https://anatomia.ict.unesp.br/radiologia/mandibula/MAND%2001.jpg',
  },
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
];

export default ({ navigation, route }) => {
  return (
    <View style={styles.main}>
      <FlatList
        horizontal={true}
        data={previousMenu}
        renderItem={({ item }) => (
          <ItemMenu
            label={item.label}
            onPress={() => alert('Menu ' + item.label)}
          />
        )}
        keyExtractor={(item) => item.id}
        style={styles.previousMenu}
      />
      <FlatList
        data={menus}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => navigation.navigate('xray')}
          />
        )}
        keyExtractor={(item) => item.id}
        style={styles.menuList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#EBF7FD',
  },

  previousMenu: {
    paddingTop: 20,
    paddingLeft: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#1A2D99',
  },

  menuList: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 200,
  },
});
