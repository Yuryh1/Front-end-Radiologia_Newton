import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default ({
                  label = 'Descrição não informada',
                  icon = 'tooth',
                  onPress,
                }) => {
  return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
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
  button: {
    flexDirection: 'row', // Alinha ícone e texto horizontalmente
    alignItems: 'center', // Centraliza verticalmente
    backgroundColor: '#1A2D99', // Cor de fundo do botão
    padding: 10,
    borderRadius: 5,
      width:200,
    height: 60,
    margin: 5,
  },

  icon: {
    marginRight: 10, // Espaço entre o ícone e o texto
  },

  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff', // Cor do texto
  },
});
