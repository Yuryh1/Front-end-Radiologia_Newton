import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput } from 'react-native';
import {
  FontAwesome,
  Foundation,
  Ionicons,
  FontAwesome5,
} from '@expo/vector-icons';
import { Button } from 'react-native-paper';

export default () => {
  const [nameContact, setNameContact] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Contatos</Text>
      <View style={styles.card}>
        <View style={styles.row}>
          <FontAwesome
            name="phone"
            size={24}
            color="#193073"
            style={styles.icon}
          />
          <Text style={styles.data}>31 9 9999-9999</Text>
        </View>
        <View style={styles.row}>
          <Foundation
            name="mail"
            size={24}
            color="#193073"
            style={styles.icon}
          />
          <Text style={styles.data}>email@email.com</Text>
        </View>
        <View style={styles.row}>
          <Ionicons
            name="location"
            size={24}
            color="#193073"
            style={styles.icon}
          />
          <Text style={styles.data}>Rua Presidente Carlos Luz, 220</Text>
        </View>
        <Text style={styles.divisor}>
          ───── Ou nos envie uma mensagem ─────
        </Text>
        <View style={styles.inputContainer}>
          <FontAwesome5
            name="user-alt"
            size={24}
            color="#193073"
            style={styles.icon}
          />
          <TextInput
            value={nameContact}
            onChangeText={(text) => setNameContact(text)}
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#193073"
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="mail" size={24} color="#193073" style={styles.icon} />
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#193073"
          />
        </View>
        <View style={styles.inputContainer2}>
          <TextInput
            multiline
            numberOfLines={4}
            style={styles.input2}
            value={message}
            onChangeText={(text) => setMessage(text)}
            placeholder="Mensagem"
            placeholderTextColor="#193073"
          />
        </View>
        <Button
          mode="contained"
          buttonColor="#193073"
          textColor="white"
          style={styles.botaoEnviar}
          onPress={() => navigation}>
          Enviar
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#193073',
    alignSelf: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#27A4F2',
    padding: 20,
    paddingBottom: 20,
    borderRadius: 15,
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    margin: 8,
  },
  data: {
    color: '#193073',
    marginTop: 12,
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  divisor: {
    fontSize: 14,
    marginTop: 20,
    marginBottom: 20,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  inputContainer: {
    backgroundColor: '#EBF7FD',
    marginTop: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  inputContainer2: {
    backgroundColor: '#EBF7FD',
    marginTop: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  input: {
    height: 45,
    width: 270,
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#EBF7FD',
    borderRadius: 7,
  },
  input2: {
    width: 270,
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#EBF7FD',
    borderRadius: 7,
  },
  botaoEnviar: {
    margin: 20,
    width: 200,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 10,
    alignSelf: 'center',
  },
});
