import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';

export default ({ navigation, route }) => {
  const [isEditar, setIsEditar] = useState(false);
  const [ra, setRa] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onClickEditar = () => {
    setIsEditar((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerBody}>
        <TouchableOpacity style={styles.editar} onPress={onClickEditar}>
          <FontAwesome name="pencil-square" size={40} color="#193073" />
        </TouchableOpacity>
        <View style={styles.containerTop}>
          <TouchableOpacity style={styles.containerImage}>
          {!isEditar ? (
              <AntDesign name="user" size={140} color="#193073" />
            ) : (
            <>
              <Ionicons name="camera" size={40} color="#193073" />
              <Text style={styles.imageText}> Trocar Imagem</Text>
            </>
          )
          }
          </TouchableOpacity>
          {!isEditar ? (
            <Text style={styles.name}>Nome</Text>
          ) : (
            <TextInput
              value={ra}
              onChangeText={(text) => setRa(text)}
              style={styles.inputName}
              placeholder="Nome"
              placeholderTextColor="#193073"
            />
          )}
        </View>
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.start}>
              <Text style={styles.text}>RA: </Text>
            </View>
            {!isEditar ? (
              <Text style={styles.data}> 12314654</Text>
            ) : (
              <TextInput
                value={ra}
                onChangeText={(text) => setRa(text)}
                style={styles.input}
                placeholder="RA"
                placeholderTextColor="#193073"
              />
            )}
          </View>
          <View style={styles.row}>
            <View style={styles.start}>
              <Text style={styles.text}>E-mail: </Text>
            </View>
            {!isEditar ? (
              <Text style={styles.data}> email@email.com</Text>
            ) : (
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#193073"
              />
            )}
          </View>
          <View style={styles.row}>
            <View style={styles.start}>
              <Text style={styles.text}>Senha: </Text>
            </View>
            {!isEditar ? (
              <Text style={styles.data}> *******</Text>
            ) : (
              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#193073"
              />
            )}
          </View>
        </View>
      </View>
      {isEditar && (
        <View>
          <Button
            mode="contained"
            buttonColor="#193073"
            textColor="white"
            style={styles.botaoAtualizar}
            onPress={() => navigation}>
            SALVAR
          </Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'space-between',
  },
  containerTop: {
    alignItems: 'center',
  },
  containerImage: {
    width: 150,
    height: 150,
    backgroundColor: '#27A4F2',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 20,
  },
  imageText:{
    fontWeight: 'bold',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20,
    color: '#193073',
  },
  card: {
    backgroundColor: '#27A4F2',
    borderRadius: 10,
    padding: 20,
    elevation: 20,
  },
  editar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    margin: 10,
  },
  start: {
    width: 70,
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#193073',
  },
  data: {
    margin: 10,
    fontSize: 18,
    color: '#193073',
  },
  botaoAtualizar: {
    margin: 30,
    width: 300,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    elevation: 10,
    alignSelf: 'center',
  },
  input: {
    height: 45,
    width: 240,
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#EBF7FD',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#193073',
  },
  inputName: {
    height: 60,
    width: 240,
    margin: 20,
    padding: 15,
    backgroundColor: '#EBF7FD',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#193073',
  },
});
