import AsyncStorage from '@react-native-async-storage/async-storage';

const save = async (user) => {
  const jsonValue = JSON.stringify(user)
  await AsyncStorage.setItem('@user', jsonValue)
}

const find = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@user');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Erro ao ler dados do AsyncStorage:', e);
    return null; // ou manipule o erro como achar melhor
  }
}


const remove = async () => {
  await AsyncStorage.removeItem('@user')
}

export {
  save, 
  find,
  remove
}
