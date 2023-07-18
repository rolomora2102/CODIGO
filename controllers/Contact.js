// Vincular datos al DOM
 
const btnEnviar = document.getElementById('enviar');
const txtNombre = document.getElementById('name');
const txtCorreo = document.getElementById('email');
const txtAsunto = document.getElementById('asunto');
const txtMensaje = document.getElementById('mensaje');

// Crear función para validar campos vacíos
function validar_campos_vacios(){
    let error = false;
    let campos_requeridos = document.querySelectorAll("#formContactenos1 [required]");
    for (let i = 0; i < campos_requeridos.length; i++){
        if (campos_requeridos[i].value === "") {
            campos_requeridos[i].classList.add("error");
            error = true;
        } else {
            campos_requeridos[i].classList.remove("error");
        }
    }
    return error;
}

// alert("hi")

//Funcion para validar el nombre
function validar_nombre(){
let error = false;
let texto = txtNombre.value; 
let regex = /^[a-zA-Z\s]+$/ ; 

//evaluar el texto dentro del patrón
if(regex.test(texto)===false){
    txtNombre.classList.add("error");
    error = true;
}else{
    txtNombre.classList.remove("error");
}

return error;

}

//validar correo

function validar_correo(){
    let error = false;
    let texto = txtCorreo.value;
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(regex.test(texto)===false){
        txtCorreo.classList.add("error");
        error = true;
    }else{
        txtCorreo.classList.remove("error");
    }

    return error; 
}

// Validar Asunto
function validar_asunto(){
    let error = false
    let texto = txtAsunto.value;
    let regex = /^[\w\s!@#$%^&*(),.?":{}|<>[\]\\]*$/;
    
    if(regex.test(texto) === false || texto.length <= 10){
        txtAsunto.classList.add("error");
        error = true;
    }

    else {txtAsunto.classList.remove("error");

    }
    return error;
}

// Validar Mensaje
function validar_mensaje(){
    let error = false
    let texto = txtMensaje.value;
    let regex = /^[\w\s!@#$%^&*(),.?":{}|<>[\]\\]*$/;
    
    if(regex.test(texto) === false || texto.length <= 30){
        txtMensaje.classList.add("error");
        error = true;
    }
    else {txtAsunto.classList.remove("error");

    }
    return error;
}

//esta funcion es para validar las demas funciones? 
function enviar_datos(){
    let error_campos_vacios = validar_campos_vacios();
    let error_nombre = validar_nombre();
    let error_correo = validar_correo();
    let error_asunto = validar_asunto();
    let error_mensaje = validar_mensaje();

    if (error_campos_vacios){
        Swal.fire({
            icon: "warning",
            title: "Se encontraron campos vacíos",
            text: "Por favor complete los campos vacíos"
        })
    }else if(error_nombre){
        Swal.fire({
            icon:"warning",
            title:"Nombre inválido",
            text:"El campo de nombre solo puede contener letras"
        })
    }
    else if(error_correo){
        Swal.fire({
            icon:"warning",
            title:"Correo inválido",
            text:"El correo ingresa es invalido"
        })
    }
    else if(error_asunto){
        Swal.fire({
            icon:"warning",
            title:"Asunto inválido",
            text:"El asunto invalido, ingresa un mínimo de 10 caracteres"
        }) 
    }
    else if(error_mensaje){
        Swal.fire({
            icon:"warning",
            title:"Mensaje inválido",
            text:"El mensaje es invalido, ingresa un mínimo de 30 caracteres"
        });
    }

    else{
        $('#PopUp').load('PopUpMessageSended.html', function() {
            $('#PopUp').show();
            });
    }
    
}

// Asociar un evento al botón
btnEnviar.addEventListener('click', enviar_datos);
