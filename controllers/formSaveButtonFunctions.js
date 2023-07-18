document.addEventListener('DOMContentLoaded', function() {


var saveBtn = document.getElementById('saveBtn-Academic');

saveBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Evita la acción por defecto del botón

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
      });
    } else {
      // Si no hay campos faltantes, oculta el formulario actual y muestra el siguiente
      var nextForm = document.getElementById('form3');
      fields.forEach(function(field) {
        field.style.borderColor = '';
      });
      nextForm.style.display = 'block';
    }
}); 
});


  
// Experiencia Laboral


document.addEventListener('DOMContentLoaded', function() {


    var saveBtn = document.getElementById('saveBtn-Exp');
    
    saveBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Evita la acción por defecto del botón
    
        var fields = document.querySelectorAll('#form3 [required]');
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
          // Si no hay campos faltantes, oculta el formulario actual y muestra el siguiente
          var nextForm = document.getElementById('save-profile');
          fields.forEach(function(field) {
            field.style.borderColor = '';
          });
          nextForm.style.display = 'block';
        }
    }); 
    
});