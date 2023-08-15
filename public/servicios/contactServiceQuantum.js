import axios from 'axios';

const API_URL = 'URL_DEL_BACKEND'; // Reemplaza con la URL real del backend

export const sendContactMessage = async (contactData) => {
  try {
    const response = await axios.post(`${API_URL}/ruta_del_endpoint`, contactData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
