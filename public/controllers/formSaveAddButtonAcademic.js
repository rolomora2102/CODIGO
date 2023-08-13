document.addEventListener('DOMContentLoaded', function() {
    var saveAddBtn = document.getElementById('saveBtn-Academic--add');
  
    saveAddBtn.addEventListener('click', function(event) {
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
          }); // Agrega el formulario clonado al contenedor
      } else {
        let school = document.getElementById('input-academicForm').value;
        let area = document.getElementById('areas-dropdown').value;
        let level = document.getElementById('academic-level').value;
        let academicStatus = document.getElementById('academic-status').value;
        let monthFrom = document.getElementById('monthFrom__select').value;
        let yearFrom = document.getElementById('yearFrom__select').value;
        let monthTo = document.getElementById('monthTo__select').value;
        let yearTo = document.getElementById('yearTo__select').value;


        if (school && area && level && academicStatus && monthFrom && yearFrom && monthTo && yearTo) {
            const table = document.getElementById('table-academic');
            // Declaracion de todos los nuevos elementos
            const tableRow = document.createElement('tr');
            const tbodyElement = document.createElement('tbody');
            const newElementSchool = document.createElement('td')
            const newElementArea = document.createElement('td');
            const newElementLevel = document.createElement('td');
            const newElementAcademicStatus = document.createElement('td')
            const newElementMonthFrom = document.createElement('td');
            const newElementYearFrom = document.createElement('td');
            const newElementMonthTo = document.createElement('td');
            const newElementYearTo = document.createElement('td'); 
            const deleteBtn = document.createElement('button');

            newElementSchool.innerHTML = school;
            newElementArea.innerHTML = area;
            newElementLevel.innerHTML = level;
            newElementAcademicStatus.innerHTML = academicStatus;
            newElementMonthFrom.innerHTML = monthFrom;
            newElementYearFrom.innerHTML = yearFrom;
            newElementMonthTo.innerHTML = monthTo;
            newElementYearTo.innerHTML = yearTo;
            deleteBtn.innerHTML = 'BORRAR';

            // Agrega los nuevos valores a la tabla
            tableRow.appendChild(newElementSchool);
            tableRow.appendChild(newElementArea);
            tableRow.appendChild(newElementLevel);
            tableRow.appendChild(newElementAcademicStatus);
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