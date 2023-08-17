import axios from 'axios';

export async function sendContactForm2Message(formData) {
  try {
    const response = await axios.post('/api/submitContactForm', formData);
    return response.data;
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
    throw error;
  }
}
