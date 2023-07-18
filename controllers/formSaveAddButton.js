document.addEventListener('DOMContentLoaded', function() {
    var saveAddBtn = document.getElementById('saveBtn-Academic--add');
    var formContainerAcademic = document.getElementById('formContainer-Academic');
  
    saveAddBtn.addEventListener('click', function(event) {
      event.preventDefault(); // Evita la acción por defecto del botón
  
      var existingForm = document.querySelector('#formContainer-Academic');
      var clonedForm = existingForm.cloneNode(true); // Clona el formulario existente
  
      // Realiza la validación de campos antes de agregar el formulario clonado
      var fields = document.querySelectorAll('#form2 [required]');
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
          }); // Agrega el formulario clonado al contenedor
      } else {
        formContainerAcademic.appendChild(clonedForm);
        
      }
    });
  });