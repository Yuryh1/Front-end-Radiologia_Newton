import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Image } from 'react-native';

export default ({
  title = 'Título não informado',
  subTitle = 'Subtitulo não informado',
  image = 'Imagem',
  onPress
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={ onPress } >
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.texts}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 120,
    width: 350,
    flexDirection: 'row',
    backgroundColor: '#27A4F2',
    elevation: 5,
    margin: 10,
    borderRadius: 5,
  },

  image: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 5,
  },

  texts: {
    padding: 10,
  },

  title: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#193073',
  },

  subTitle: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
  },
});
