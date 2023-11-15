import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const createUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/users`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const login = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/login`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateUser = async (data) => {
  try {
    const response = await axios.put(`${API_URL}/users/${data.id}`, data);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};