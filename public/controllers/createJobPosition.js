let buttonCreate = document.querySelector('.create__button')
const cantonDropdown = document.getElementById('canton-dropdown');
const districtDropdown = document.getElementById('district-dropdown');
const dayDropdownFrom = document.getElementById('dayFrom__select');
const dayDropdownUntil = document.getElementById('dayUntil__select');
const textArea = document.getElementById('requirements-text');

function emptySpaces(){
    let error = false;
    let requirements = document.querySelectorAll(".jobOffer__container [required]")
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
    let requirements = document.querySelectorAll(".jobOffer__container [required]")
    for (let i=0;i<requirements.length;i++){
        requirements[i].value=""
    }
    cantonDropdown.disabled = true
    districtDropdown.disabled = true
    dayDropdownFrom.disabled = true
    dayDropdownUntil.disabled = true
    textArea.value=""
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
        fetch('popUpJobCreated.html').then((response) => {
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
        clearData();
    }
}



buttonCreate.addEventListener("click",sendData);