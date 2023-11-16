
import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { View, Image, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Logo from '../assets/logo_odonto.png'
import { ImagePicker, TouchableOpacity } from 'react-native';
import * as AuthApi from "./AuthApi";

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [ra, setRa] = useState('');
  const [password, setPassword] = useState('');

  const [image, setImage] = useState(null);

  const handleSubmit = async () => {
      const data = {
          name,
          email,
          ra,
          password,
          image
      }
      const createdUser = await AuthApi.createUser(data)
  }

const pickImage = async () => {
  const result = await ImagePicker.launchImageLibrary();

  if (result.didCancel) {
    return;
  }

  setImage(result.uri);
};

<TouchableOpacity style={styles.profileImageButton} onPress={pickImage}>
  {image && (
    <Image
      source={{ uri: image }}
      style={{ width: 100, height: 100, borderRadius: 50 }}
    />
  )}
</TouchableOpacity>

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <Image
        style={styles.logo}
        source={Logo}
      />
      <TextInput
        label="Nome"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        label="RA"
        value={ra}
        onChangeText={text => setRa(text)}
      />
      <TextInput
        label="Senha"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <Button mode="contained" onPress={() => handleSubmit()}>
        Cadastrar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginTop:150,
    width: 200,
    height: 200,
    alignSelf: "center"
  },
   profileImageButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    marginTop: 10,
  }
});
