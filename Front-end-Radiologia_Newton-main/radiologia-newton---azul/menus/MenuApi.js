const API_URL = 'https://odonto-app-server.onrender.com';

export const getMenuItems = async () => {
  try {
    const response = await fetch(`${API_URL}/getMenu`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
