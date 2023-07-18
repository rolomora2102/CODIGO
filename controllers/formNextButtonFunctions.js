document.addEventListener('DOMContentLoaded', function() {
    var nextBtn = document.getElementById('nextBtn');
  
    nextBtn.addEventListener('click', function(event) {
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
        var email = emailBox.value.trim();
        var regex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-z]+$/;

        if (!regex.test(email)) {
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
          var id= idBox.value.trim();
          var idRegex = /^\d{9}$/;

          if (!idRegex.test(id)) {
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
          var phone = phoneBox.value.trim();
          var phoneRegex = /^\d{11}$/;

          if (!phoneRegex.test(phone)) {
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
          var password = passwordBox.value.trim();
          var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

          if (!passwordRegex.test(password)) {
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

          if (password !== passwordCheck) {
            passwordCheckBox.style.borderColor = 'red';
            Swal.fire({
              icon: 'warning',
              title: '¡Advertencia!',
              text: 'Las contraseñas no coinciden. Por favor, verifica la contraseña de confirmación.',
              confirmButtonText: 'Aceptar'
            });
            return; // Detiene la ejecución si las contraseñas no coinciden
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
