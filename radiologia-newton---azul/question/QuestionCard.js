import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default ({enunciado, A, B, C, D, onDelete}) => {
  return (
    <View style={styles.view}>
      <View style={styles.conteudo}>
        <Text style={styles.enunciado}>{enunciado}</Text>
        <Text style={styles.alternativa}>A) {A}</Text>
        <Text style={styles.alternativa}>B) {B}</Text>
        <Text style={styles.alternativa}>C) {C}</Text>
        <Text style={styles.alternativa}>D) {D}</Text>
      </View>
      <View style={styles.botoes}>
        <TouchableOpacity onPress={onDelete}>
          <FontAwesome name="remove" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    padding: 10,
    //borderBottomWidth: 2,
    //elevation: 10,
    backgroundColor: '#d5d5d5',
    borderRadius: 15,
    marginBottom: 10,
    flexDirection: 'row'
  }, 
  conteudo: {
    flex: 1
  },  
  enunciado: {
    fontFamily: 'Roboto',
    fontSize: 14,
    textAlign: 'justify',
    marginBottom: 5
  },
  alternativa: {
    fontFamily: 'Roboto',
    fontSize: 12,
    textAlign: 'justify'
  }
})