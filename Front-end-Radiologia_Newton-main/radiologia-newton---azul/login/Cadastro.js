
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
  const [RA, setRA] = useState('');
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
    <View style={styles.container}>
      <View style={styles.img}>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={styles.inputs}>
        <TextInput
          value={name}
          onChangeText={(text) => setname(text)}
          style={styles.name}
          label="Nome"
          mode="flat"
          theme={{
            colors: {
              primary: "black",
            },
          }}
        />
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.email}
          label="E-mail"
          mode="flat"
          theme={{
            colors: {
              primary: "black",
            },
          }}
        />
        <TextInput
          value={RA}
          onChangeText={(text) => setRA(text)}
          style={styles.RA}
          label="RA"
          mode="flat"
          theme={{
            colors: {
              primary: "black",
            },
          }}
        />
        <TextInput
          value={password}
          onChangeText={(text) => setpassword(text)}
          style={styles.password}
          label="password"
          mode="password"
          theme={{
            colors: {
              primary: "black",
            },
          }}
        />

        <Button
          mode="contained"
          buttonColor="#193073"
          textColor="white"
          style={styles.botao}
          onPress={() => {
            login("email");
          }}
        >
          Cadastrar
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#27A4F2",
    height: "100%",
    justifyContent: "center",
  },
  logo: {
    marginTop: 40,
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  inputs: {
    padding: 8,
  },
  
  botao: {
    marginTop: 10,
    width: 200,
    height: 30,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
  }
});
