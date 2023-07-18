var password_current = document.getElementById('password_current')
var password_new = document.getElementById('password_new')
var password_check = document.getElementById('password_check')
var button = document.querySelector('.button')

function passwordValidationFunction() {
    let error = false;
    let text = password_new.value;
    let text2 = password_check.value;
    if (text != text2){
        password_new.classList.add('error');
        password_check.classList.add('error');
        error=true;
        password_new.value = "";
        password_check.value = "";
    }else{
        password_new.classList.remove('error');
        password_check.classList.remove('error');
    }
    return error;
}

function sendData() {
    errorPassword = passwordValidationFunction();
    if(password_current.value == "" || password_new.value == "" || password_check.value == ""){
        Swal.fire({
            icon:"warning",
            title:"Campos vacíos",
            text:"Alguno de los campos esta vació"
        })
    }
    else if (errorPassword){
        Swal.fire({
            icon:"warning",
            title:"Contraseña invalida",
            text:"Las contraseñas no coinciden"
        })
    }else{ 
        $('#PopUp').load('PopUpPasswordChangedSuccessfully.html', function() {
        $('#PopUp').show();
        });
    }
}

button.addEventListener('click',sendData)