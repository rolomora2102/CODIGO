document.addEventListener('DOMContentLoaded', function() {
    var nextBtn = document.getElementById('nextBtn');
  
    nextBtn.addEventListener('click', async function(event) {
      event.preventDefault(); // Evita la acción por defecto del botón
  
      var fields = document.querySelectorAll('#form1 [required]');
      var allFields = true;
  
      fields.forEach(function(field) {
        if (field.value.trim() === '') {
          allFields = false;
          field.style.borderColor = 'red';
        } else {
          field.style.borderColor = '';
        }
      });
  
  
      if (!allFields) {
        Swal.fire({
          icon: 'warning',
          title: '¡Advertencia!',
          text: 'Por favor, completa todos los campos antes de continuar.',
          confirmButtonText: 'Aceptar'
        });
      } else {

        var emailBox = document.getElementById('email');
        var emailB = emailBox.value.trim();
        var regex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-z]+$/;

        if (!regex.test(emailB)) {
          emailBox.style.borderColor = 'red';
          Swal.fire({
            icon: 'warning',
            title: '¡Advertencia!',
            text: 'Por favor, ingresa un correo electrónico válido.',
            confirmButtonText: 'Aceptar'
          });
          return; // Detiene la ejecución si el correo es inválido
        } else {

          var idBox = document.getElementById('id');
          var idB= idBox.value.trim();
          var idRegex = /^\d{9}$/;

          if (!idRegex.test(idB)) {
            idBox.style.borderColor = 'red';
            Swal.fire({
              icon: 'warning',
              title: '¡Advertencia!',
              text: 'Por favor, ingresa una cédula válida.',
              confirmButtonText: 'Aceptar'
            });
            return; // Detiene la ejecución si el correo es inválido
          }

          var phoneBox = document.getElementById('phone');
          var phoneB = phoneBox.value.trim();
          var phoneRegex = /^\d{11}$/;

          if (!phoneRegex.test(phoneB)) {
            phoneBox.style.borderColor = 'red';
            Swal.fire({
              icon: 'warning',
              title: '¡Advertencia!',
              text: 'Por favor, ingresa un número de teléfono válido (10 dígitos).',
              confirmButtonText: 'Aceptar'
            });
            return; // Detiene la ejecución si el teléfono es inválido
          }

          var passwordBox = document.getElementById('password');
          var passwordB = passwordBox.value.trim();
          var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

          if (!passwordRegex.test(passwordB)) {
            passwordBox.style.borderColor = 'red';
            Swal.fire({
              icon: 'warning',
              title: '¡Advertencia!',
              text: 'Por favor, ingresa una contraseña válida. Debe tener al menos 8 caracteres, incluyendo al menos una letra minúscula, una letra mayúscula y un dígito.',
              confirmButtonText: 'Aceptar'
            });
            return; // Detiene la ejecución si la contraseña es inválida
          }

          var passwordCheckBox = document.getElementById('password-check');
          var passwordCheck = passwordCheckBox.value.trim();

          if (passwordB !== passwordCheck) {
            passwordCheckBox.style.borderColor = 'red';
            Swal.fire({
              icon: 'warning',
              title: '¡Advertencia!',
              text: 'Las contraseñas no coinciden. Por favor, verifica la contraseña de confirmación.',
              confirmButtonText: 'Aceptar'
            });
            return; // Detiene la ejecución si las contraseñas no coinciden
          }

          const formData = new FormData(document.querySelector('.finaluserform__personalinfo__form'));
  
          const name = formData.get('name');
          const last = formData.get('lastname');
          const id = formData.get('id');
          const phone = formData.get('phone');
          const email = formData.get('email');
          const password = formData.get('password');
          const province = formData.get('provincia');
          const canton = formData.get('canton');
          const district = formData.get('distrito');
          const country = formData.get('country');
          const gender = formData.get('gender');
          const personalDetails = formData.get('personalDetails');
          try {
            const response = await axios.post('http://localhost:3000/api/users.routes', {
              name,
              last,
              id,
              phone,
              email,
              password,
              province,
              canton,
              district,
              country,
              gender,
              personalDetails
          });

          if (response.data.result) {
            Swal.fire({
              title: 'Persona registrada exitosamente',
              icon: 'success'
            });
          } else {
            // Manejar error en el registro
            switch (response.data.error.code) {
              case 11000:
                Swal.fire({
                  title: 'No se completó el registro',
                  text: 'La persona ya está registrada',
                  icon: 'warning'
                });
                break;
                // Manejar otros posibles errores
              }
            }
          } catch (error) {
            console.log(error);
            // Mostrar mensaje de error genérico en caso de falla en la solicitud
            Swal.fire({
              title: 'Error',
              text: 'Ocurrió un error al registrar la persona',
              icon: 'error'
            });
          }
          // Si no hay campos faltantes y todos los datos son válidos, oculta el formulario actual y muestra el siguiente
          var nextForm = document.getElementById('form2');
          fields.forEach(function(field) {
            field.style.borderColor = '';
          });
          nextForm.style.display = 'block'; 
        }
      }
    });

  });
