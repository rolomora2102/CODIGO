const saveProfileBtn = document.getElementById('saveProfileBtn');

saveProfileBtn.addEventListener('click', async (event) => {
    event.preventDefault();
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
    const gender = formData.get('gender')
    const personalDetails = formData.get('personalDetails');
    const role = 'User';
    const status = true;

    // Capturar datos de la tabla
    const academicTableRows = document.querySelectorAll('#table-academic tbody tr');
    const jobTableRows = document.querySelectorAll('#table-jobExperience tbody tr');
    const academicData = [];
    const jobData = [];
    

    academicTableRows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const rowData = Array.from(cells).map(cell => cell.textContent);
        academicData.push({
        academicSchool: rowData[0],
        academicArea: rowData[1],
        academicLevel: rowData[2],
        academicStatus: rowData[3],
        academicMonthFrom: rowData[4],
        academicYearFrom: rowData[5],
        academicMonthTo: rowData[6],
        academicYearTo: rowData[7]
        });
    });

    jobTableRows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const jobRowData = Array.from(cells).map(cell => cell.textContent);
        jobData.push({
            jobEnterpriseName: jobRowData[0],
            jobType: jobRowData[1],
            jobDescription: jobRowData[2],
            jobMonthFrom: jobRowData[3],
            jobYearFrom: jobRowData[4],
            jobMonthTo: jobRowData[5],
            jobYearTo: jobRowData[6]
        });
    });

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
        personalDetails,
        academicTable: academicData,
        jobTable: jobData,
        role: role,
        status: status
        });

        if (response.data.result) {
            Swal.fire({
                title: 'Se ha registrado exitosamente',
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
});
