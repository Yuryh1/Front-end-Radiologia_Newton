import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getMenuItems = async () => {
  try {
    const response = await axios.get(`${API_URL}/getMenu`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}