// Vincular datos al DOM

const btnBuscarCandidatos = document.getElementById("BuscarCandidatosbtn");
const selectProvinvia = document.getElementById("Provincia");
const selectCanton = document.getElementById("Cantón");
const selectDistrito = document.getElementById("Distrito");
const selectAreaProfecional = document.getElementById("ÁreaProfecional");
const selectNiveldeEstudios = document.getElementById("NiveldeEstudiosid");
const selectEstado = document.getElementById("Estadoid");
const textareabox = document.getElementById("textarea");
const btnVerdeBuscar = document.getElementById("Buscar");

// alert('Hi')

// Crear función para validar campos vacíos NUEVO
function validarCamposVacios(){
    let error = false;
    let camposRequeridos = document.querySelectorAll(".SecondDivWithouThetButton [required]")

    console.log('camposRequeridos ', camposRequeridos);

    for (let i=0; i < camposRequeridos.length; i++ ){
      console.log('-------> ',  camposRequeridos[i],camposRequeridos[i].value, )
      if (camposRequeridos[i].value==""){
        camposRequeridos[i].classList.add("error");
        error=true;
      }else{
        camposRequeridos[i].classList.remove("error");
      }
  }
  return error;
}

// function LimpiarData(){
//   let camposRequeridos = document.querySelectorAll(".SecondDivWithouThetButton [required]")
//     for (let i=0;i<requirements.length;i++){
//         requirements[i].value=""
//     }

//     selectProvinvia.disabled = true
//     selectCanton.disabled = true
//     selectDistrito.disabled = true
//     selectAreaProfecional.disabled = true
//     selectEstado.disabled = true
//     selectNiveldeEstudios.disabled = true
// }



function enviarDatos(){
  errors = validarCamposVacios();
  if (errors){
      Swal.fire({
          icon:"warning",
          title:"Se encontraron campos vacíos",
          text:"Favor completar campos señalados"
      })
    }else{
      Swal.fire({
        icon:"success",
        title:"Información validada",
        text:"Registro existoso"
    })
  }
}

  
// Asociar un evento al botón
btnBuscarCandidatos.addEventListener('click', enviarDatos);
btnVerdeBuscar.addEventListener('click', enviarDatos);


