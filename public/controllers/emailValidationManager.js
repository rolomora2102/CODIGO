let emailManager = document.getElementById('emailManager')
let managerButton = document.querySelector('.button--green')

function emailValidationManager() {
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
    errorEmail = emailValidationManager();
    if (errorEmail){
        Swal.fire({
            icon:"warning",
            title:"Correo Inválido",
            text:"El campo de correo debe estar en formato correo@correo.com"
        })
    }else{ 
        fetch('popUpInvitationSended.html').then((response) => {
            return response.text();
        }).then((text) => {
          let sec = document.querySelector("#PopUp")
          sec.innerHTML = text;
          document.querySelector('.button').addEventListener('click', ()=> {
          sec.innerHTML=""
        });
          document.querySelector('.popupbackground').addEventListener('click', ()=> {
          sec.innerHTML=""
        });
        document.querySelector('.close-btn').addEventListener('click', ()=> {
          sec.innerHTML=""
        });
        });
    }
    emailManager.value=""
}

managerButton.addEventListener('click',sendData)