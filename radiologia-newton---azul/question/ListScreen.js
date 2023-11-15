import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import {Button} from 'react-native-paper'

import * as QuestionsApi from './QuestionsApi'
import QuestionCard from './QuestionCard'

export default ({navigation, router}) => {
  const [questoes, setQuestoes] = useState([])

  const buscarQuestoes = async () => {
    try {
      console.log('Executou')
      const questoes = await QuestionsApi.findAll()
      setQuestoes(questoes)
    } catch(err) {
      alert(err.message)
    }
  }

  useEffect(() => {
    buscarQuestoes()
  }, [])

  const removerQuestao = async (id) => {
    await QuestionsApi.removeById(id)
    //await buscarQuestoes()

    setQuestoes(
      questoes.filter(q => q.id != id)
    )

    alert('Questão excluida com sucesso!')
  }
  
  return (
    <View style={styles.view}>
      <FlatList 
        data={questoes}
        renderItem={({item}) => <QuestionCard {...item} onDelete={() => removerQuestao(item.id)} />}
        keyExtractor={(item) => item.id}
      />
      <Button mode='contained' onPress={buscarQuestoes}>Atualizar</Button>
      <Button mode='contained' onPress={() => navigation.navigate('createQuestion', {buscarQuestoes})}>Nova Questão</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 10
  }
})
