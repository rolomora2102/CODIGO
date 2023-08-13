let buttonSend = document.getElementById('enviar')
let email = document.getElementById('email')
let nombre = document.getElementById('name')
let textarea = document.getElementById('mensaje')

function nameValidation(){
    let error = false;
    let text = nombre.value;
    let regex = /^[a-zA-Z]+$/;
    if (regex.test(text)==false){
        nombre.classList.add("error");
        error=true;
    }else{
        nombre.classList.remove("error");
    }
    return error;
}


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

function clearData() {
    let text = document.querySelectorAll(".formContactenos input")
    for (let i=0;i<text.length;i++){
        text[i].value=""
    }
    textarea.value=""
}

function sendData() {
    errorName = nameValidation();
    errorEmail = emailValidationFunction();
    if (errorName){
        Swal.fire({
            icon:"warning",
            title:"Nombre Inválido",
            text:"El campo de nombre solo puede contener letras"
    })
    }else if (errorEmail){
        Swal.fire({
            icon:"warning",
            title:"Correo Inválido",
            text:"El campo de correo debe estar en formato correo@correo.com"
        })
    }else{ 
        $('#PopUp').load('PopUpMessageSended.html', function() {
        $('#PopUp').show();
        });
        clearData()
    }
}



buttonSend.addEventListener("click",sendData);