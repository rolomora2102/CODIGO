document.addEventListener('DOMContentLoaded', function() {
    var saveAddBtn = document.getElementById('saveBtn-Exp--add');
  
    saveAddBtn.addEventListener('click', function(event) {
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
          }); // Agrega el formulario clonado al contenedor
      } else {
        let businessName = document.getElementById('businessName').value;
        let jobPosition = document.getElementById('jobPosition').value;
        let jobDetails = document.getElementById('jobDetails').value;
        let monthFrom = document.getElementById('job-monthFrom__select').value;
        let yearFrom = document.getElementById('job-yearFrom__select').value;
        let monthTo = document.getElementById('job-monthTo__select').value;
        let yearTo = document.getElementById('job-yearTo__select').value;


        if (businessName && jobPosition && jobDetails && monthFrom && yearFrom && monthTo && yearTo) {
            const table = document.getElementById('table-experience');
            // Declaracion de todos los nuevos elementos
            const tableRow = document.createElement('tr');
            const tbodyElement = document.createElement('tbody');
            const newElementBussinessName = document.createElement('td')
            const newElementJobPosition = document.createElement('td');
            const newElementJobDetails = document.createElement('td');
            const newElementMonthFrom = document.createElement('td');
            const newElementYearFrom = document.createElement('td');
            const newElementMonthTo = document.createElement('td');
            const newElementYearTo = document.createElement('td'); 
            const deleteBtn = document.createElement('button');

            newElementBussinessName.innerHTML = businessName;
            newElementJobPosition.innerHTML = jobPosition;
            newElementJobDetails.innerHTML = jobDetails;
            newElementMonthFrom.innerHTML = monthFrom;
            newElementYearFrom.innerHTML = yearFrom;
            newElementMonthTo.innerHTML = monthTo;
            newElementYearTo.innerHTML = yearTo;
            deleteBtn.innerHTML = 'BORRAR';

            // Agrega los nuevos valores a la tabla
            tableRow.appendChild(newElementBussinessName);
            tableRow.appendChild(newElementJobPosition);
            tableRow.appendChild(newElementJobDetails);
            tableRow.appendChild(newElementMonthFrom);
            tableRow.appendChild(newElementYearFrom);
            tableRow.appendChild(newElementMonthTo);
            tableRow.appendChild(newElementYearTo);
            tableRow.appendChild(deleteBtn);
            deleteBtn.classList.add('delete-table-btn');
            deleteBtn.addEventListener('click', function () {
              tableRow.remove();
            });
            tableRow.classList.add('table__content');
            

            tbodyElement.appendChild(tableRow);
            table.appendChild(tbodyElement);
        }
      }
    });
  });