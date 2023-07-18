let emailRecruiter = document.getElementById('emailRecruiter')
let recruiterButton = document.querySelector('.button--red')

function emailValidationFunction() {
    let error = false;
    let text = emailRecruiter.value;
    let regex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-z]/ 
    if (regex.test(text)==false){
        emailRecruiter.classList.add('error');
        error=true;
    }else{
        emailRecruiter.classList.remove('error');
    }
    return error;
}

function sendData() {
    errorEmail = emailValidationFunction();
    if (errorEmail){
        Swal.fire({
            icon:"warning",
            title:"Correo Inválido",
            text:"El campo de correo debe estar en formato correo@correo.com"
        })
    }else{ 
        $('#PopUp').load('PopUpInvitationSended.html', function() {
        $('#PopUp').show();
        });
    }
    emailRecruiter.value=""
}

recruiterButton.addEventListener('click',sendData)