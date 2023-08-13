var email = document.getElementById('email')
var Button = document.querySelector('.button')

function emailValidationFunction() {
    let error = false;
    let text = email.value;
    let regex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-z]/ 
    if (regex.test(text)==false){
        email.classList.add('error');
        error=true;
    }else{
        email.classList.remove('error');
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
        document.getElementById('PopUp').style.display = 'none';
        $('#PopUp').load('PopUpTemporaryPasswordSended.html', function() {
        $('#PopUp').show();
        });
    }
    email.value=""
}

Button.addEventListener('click',sendData)