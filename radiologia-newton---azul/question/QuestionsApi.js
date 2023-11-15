const URL = 'https://questions-api.tarleylana.repl.co/questions'

const findAll = async () => {
  const init = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: '112233'
    }
  }

  const responseHttp = await fetch(URL, init)

  if(responseHttp.ok) {
    const responseBody = await responseHttp.json()
    return responseBody.data
  } else {
    throw new Error('Falha ao solicitar questões')
  }
}

const findById = (id) => {

}

const insert = async (question) => {
  const init = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      Authorization: '112233',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(question)
  }

  const responseHttp = await fetch(URL, init)

  if(responseHttp.ok) {
    const responseBody = await responseHttp.json()
    return responseBody.data
  } else {
    throw new Error('Falha ao solicitar questões')
  }
}

const removeById = async (id) => {
  const init = {
    method: 'DELETE',
    headers: {
      accept: 'application/json',
      Authorization: '112233'
    }
  }

  const responseHttp = await fetch(`${URL}/${id}`, init)

  if(responseHttp.ok) {
    const responseBody = await responseHttp.json()
    return responseBody.data
  } else {
    throw new Error('Falha ao excluir questão')
  }
}

const update = (id, question) => {

}

export {
  findAll,
  findById,
  insert,
  removeById,
  update
}