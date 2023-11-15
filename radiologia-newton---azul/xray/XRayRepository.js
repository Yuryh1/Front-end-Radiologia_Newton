import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

const findAll = async () => {
  const jsonValue = await AsyncStorage.getItem('@xray')
  return jsonValue ? JSON.parse(jsonValue) : []
}

const insert = async (xray) => {
  xray.id = uuid.v4()

  const list = await findAll()
  list.push(xray)

  const jsonValue = JSON.stringify(list)
  await AsyncStorage.setItem('@xray', jsonValue)
}

const update = async (xray) => {
  const list = await findAll()

  const oldXray = list.find(x => x.id === xray.id)

  if(oldXray) {
    oldXray.title = xray.title
    oldXray.description = xray.description

    const jsonValue = JSON.stringify(list)
    await AsyncStorage.setItem('@xray', jsonValue)
  }

}

const removeById = async (id) => {
  const list = await findAll()
  const listFiltered = list.filter(x => x.id != id)

  const jsonValue = JSON.stringify(listFiltered)
  await AsyncStorage.setItem('@xray', jsonValue)
}