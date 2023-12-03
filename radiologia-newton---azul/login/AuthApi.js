const API_URL = 'https://odonto-app-server.onrender.com';

export const createUser = async (data) => {
  try {
    const response = await fetch(`${API_URL}/createUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const login = async (data) => {
  try {
    if (data === 'google') {
      const url = 'https://odonto-app-server.onrender.com/auth/google';
      await WebBrowser.openBrowserAsync(url);
    } else {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
      return await response.json();
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateUser = async (data) => {
  try {
    const response = await fetch(`${API_URL}/users/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await fetch(`${API_URL}/users/${id}`, {
      method: 'DELETE'
    });
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/getUser`, {
      method: 'GET',
      credentials: 'include'
    });
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
