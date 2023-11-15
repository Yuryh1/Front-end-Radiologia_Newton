import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {TextInput, Button} from 'react-native-paper'
import * as QuestionApi from './QuestionsApi'

export default ({navigation, route}) => {
  const [enunciado, setEnunciado] = useState('')
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [c, setC] = useState('')
  const [d, setD] = useState('')
  const [resposta, setResposta] = useState('')

  const salvar = async () => {
    const questao = {enunciado, A: a, B: b, C: c, D: d, resposta}

    const novaQuestao = await QuestionApi.insert(questao)
    
    alert('Questão inserida com sucesso!')
    await route.params.buscarQuestoes()
    navigation.goBack()
  }

  return (
    <View>
      <TextInput 
        mode='outlined'
        label='Enunciado'
        value={enunciado}
        onChangeText={(text) => setEnunciado(text)}
      />
      <TextInput 
        mode='outlined'
        label='Alternativa A'
        value={a}
        onChangeText={(text) => setA(text)}
      />
      <TextInput 
        mode='outlined'
        label='Alternativa B'
        value={b}
        onChangeText={(text) => setB(text)}
      />
      <TextInput 
        mode='outlined'
        label='Alternativa C'
        value={c}
        onChangeText={(text) => setC(text)}
      />
      <TextInput 
        mode='outlined'
        label='Alternativa D'
        value={d}
        onChangeText={(text) => setD(text)}
      />
      <TextInput 
        mode='outlined'
        label='Resposta Correta'
        value={resposta}
        onChangeText={(text) => setResposta(text)}
      />
      <Button 
        mode='contained'
        onPress={salvar}
      >
        Salvar
      </Button>
      <Button 
        mode='contained' 
        onPress={() => navigation.goBack()}
      >
        Cancelar
      </Button>
    </View>
  )
}