import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default ({
  label = 'Descrição não informada',
  icon = 'tooth',
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.main} onPress={onPress}>
      <MaterialCommunityIcons
        name={icon}
        size={45}
        color="white"
        style={styles.icon}
      />
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 180,
    width: 140,
    alignItems: 'center',
    flexDirection: 'row', // Alinha horizontalmente
  },

  icon: {
    backgroundColor: '#1A2D99',
    borderRadius: 100,
    padding: 10,
    marginRight: 10, // Adiciona um espaçamento à direita para separar o ícone do texto
  },

  text: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#193073',
    textAlign: 'center',
  },
});