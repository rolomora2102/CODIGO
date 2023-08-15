import { sendContactMessage } from './servicios/contactServiceQuantum.js';
import { sendContactForm2Message } from '../servicios/contactForm2ServiceQuantum.js';


$(document).ready(function() {
    $('.hamburger').click(function() {
      $(this).toggleClass('active');
      $('.menu').slideToggle();
    });
  });
  

  const successNotification = document.getElementById('successNotification');

  const contactForm = document.querySelector('.contact-form form');
  

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
  

    const response = await sendContactMessage();
  
    if (response.status === 'success') {

      successNotification.classList.remove('hidden');
  

      setTimeout(() => {
        successNotification.classList.add('hidden');
      }, 3000);
  

      contactForm.reset();
    } else {

      console.error('Ocurrió un error al enviar el mensaje:', response.error);
    }
  });






  const contactForm2 = document.getElementById('contactForm2');

contactForm2.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name2').value;
  const apellidos = document.querySelector('#apellidos2').value;
  const email = document.querySelector('#email2').value;
  const phoneNumber = document.querySelector('#phoneNumber2').value;
  const mensaje = document.querySelector('#mensaje').value;

  const formData = {
    name,
    apellidos,
    email,
    phoneNumber,
    mensaje,
  };

  try {
    const response = await sendContactForm2Message(formData);
    
    if (response.status === 'success') {
      alert('¡Información enviada con éxito!');
      // Realizar más acciones si el formulario se envió con éxito
    } else {
      alert('Ocurrió un error al enviar el formulario. Por favor, inténtalo nuevamente.');
    }
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
    alert('Ocurrió un error al enviar el formulario. Por favor, inténtalo nuevamente.');
  }
});