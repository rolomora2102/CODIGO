// Vincular datos al DOM

const btnEnviarVerde = document.getElementById('buttonVerdeManager');
const btnEnviarRoja = document.getElementById('buttonRojoReclutador');
const txtEmailVerde = document.getElementById('CorreoInvitacionManager');
const txtEmailRojo = document.getElementById('CorreoInvitacionReclutador');

// alert("hi")

// Asociar un evento al botón
btnEnviarVerde.addEventListener('click', enviarDatosManager);
btnEnviarRoja.addEventListener('click', enviarDatosReclutador);

// Crear función para validar campos vacíos

function validarCampoVacioManager(){
    let error = false;
    let email_manager = document.querySelector("#CorreoInvitacionManager");
        if(email_manager.value === ""){
            email_manager.classList.add("error");
            error = true;
        }else{
            email_manager.classList.remove("error");
        }
    return error;
}

function validarCampoVacioReclutador(){
    let error = false;
    let email_reclutador = document.querySelector("#CorreoInvitacionReclutador");
        if(email_reclutador.value === ""){
            email_reclutador.classList.add("error");
            error = true;
        }else{
            email_reclutador.classList.remove("error");
        }
    return error;
}

// Esta funcion valida el correo del Manager y Reclutador
function validarEmailManager(){
    let error = false;
    let texto = txtEmailVerde.value;
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(texto)){
        txtEmailVerde.classList.add("error");
        error = true;
    }else{
        txtEmailVerde.classList.remove("error");
    }
    return error;
}

function validarEmailReclutador(){
    let error = false;
    let texto = txtEmailRojo.value;
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(texto)){
        txtEmailRojo.classList.add("error");
        error = true;
    }else{
        txtEmailRojo.classList.remove("error");
    }
    return error;
}

// Esta funcion valida el resultado y manda el warning Icon de Manager
function enviarDatosManager(){
    let errorCampoVaciosManager = validarCampoVacioManager();
    let errorEmailManager = validarEmailManager();

    if(errorCampoVaciosManager){
        Swal.fire({
            icon: "warning",
            title: "Se encontraron campos vacíos",
            text: "Por favor complete los campos vacíos"
        })
    }else if(errorEmailManager){
        Swal.fire({
            icon: "warning",
            title: "Correo invalido",
            text: "Por favor utilice un email valido"
        })
    }else{
        Swal.fire({
            icon:"success",
            title: "Invitacion Enviada"
        });
    }

}

// Esta funcion valida el resultado y manda el warning Icon de Reclutador
    function enviarDatosReclutador(){
    let errorCampoVacioReclutador = validarCampoVacioReclutador();
    let errorEmailReclutador = validarEmailReclutador(); 

    if(errorCampoVacioReclutador){
    Swal.fire({
        icon: "warning",
        title: "Se encontraron campos vacíos",
        text: "Por favor complete los campos vacíos"
    })
}else if(errorEmailReclutador){
    Swal.fire({
        icon: "warning",
        title: "Correo invalido",
        text: "Por favor utilice un email valido"
    })
}
else{
    Swal.fire({
        icon:"success",
        title: "Invitacion Enviada"
    });
}

}
