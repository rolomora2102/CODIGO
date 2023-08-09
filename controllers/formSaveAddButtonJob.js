document.addEventListener('DOMContentLoaded', function() {
    var saveAddBtn = document.getElementById('saveBtn-Job--add');
  
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
        let enterprise = document.getElementById('input-enterpriseName').value;
        let job = document.getElementById('input-jobType').value;
        let jobDescription = document.getElementById('input-jobDescription').value;
        let monthFrom = document.getElementById('monthFrom__select-job').value;
        let yearFrom = document.getElementById('yearFrom__select-job').value;
        let monthTo = document.getElementById('monthTo__select-job').value;
        let yearTo = document.getElementById('yearTo__select-job').value;


        if (enterprise && job && jobDescription && monthFrom && yearFrom && monthTo && yearTo) {
            const table = document.getElementById('table-jobExperience');
            // Declaracion de todos los nuevos elementos
            const tableRow = document.createElement('tr');
            const tbodyElement = document.createElement('tbody');
            const newElementEnterprise = document.createElement('td')
            const newElementJob = document.createElement('td');
            const newElementJobDescription = document.createElement('td');
            const newElementMonthFrom = document.createElement('td');
            const newElementYearFrom = document.createElement('td');
            const newElementMonthTo = document.createElement('td');
            const newElementYearTo = document.createElement('td');  
            const deleteBtn = document.createElement('button');

            newElementEnterprise.innerHTML = enterprise;
            newElementJob.innerHTML = job;
            newElementJobDescription.innerHTML = jobDescription;
            newElementMonthFrom.innerHTML = monthFrom;
            newElementYearFrom.innerHTML = yearFrom;
            newElementMonthTo.innerHTML = monthTo;
            newElementYearTo.innerHTML = yearTo;
            deleteBtn.innerHTML = 'BORRAR';

            // Agrega los nuevos valores a la tabla
            tableRow.appendChild(newElementEnterprise);
            tableRow.appendChild(newElementJob);
            tableRow.appendChild(newElementJobDescription);
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