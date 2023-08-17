var button = document.getElementById('btn__entrar')
let anchor = document.getElementById('entrar__anchor')
let user = document.getElementById('input__usuario')
let password = document.getElementById('input__password');


function emptySpaces(){
    var error = false;
    var requirements = document.querySelectorAll("#login [required]")
    for (let i=0;i<requirements.length;i++){
        if (requirements[i].value==""){
            requirements[i].classList.add("error");
            error=true;
        }else{
            requirements[i].classList.remove("error");
        }
    }
    return error;
}

function clearData() {
    let requirements = document.querySelectorAll("#login [required]")
    for (let i=0;i<requirements.length;i++){
        requirements[i].value=""
    }
}

function login() {
    const validUser = validate_user(user.value, password.value);
    if (validUser === true) {
        validate_user(user.value, password.value);
    } else {
        validate_admin(user.value, password.value)
    }
}


function sendData() {
    errors = emptySpaces();
    if (errors){
        Swal.fire({
            icon:"warning",
            title:"Se encontraron campos vacíos",
            text:"Favor completar campos señalados"
        })
    }else{ 
        login()
        clearData();
    }
}



button.addEventListener("click",sendData);