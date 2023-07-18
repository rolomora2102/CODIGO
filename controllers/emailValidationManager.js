let emailManager = document.getElementById('emailManager')
let managerButton = document.querySelector('.button--green')

function emailValidationFunction() {
    let error = false;
    let text = emailManager.value;
    let regex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-z]/ 
    if (regex.test(text)==false){
        emailManager.classList.add('error');
        error=true;
    }else{
        emailManager.classList.remove('error');
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
    emailManager.value=""
}

managerButton.addEventListener('click',sendData)