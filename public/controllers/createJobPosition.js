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
        $('#PopUp').load('PopUpJobCreated.html', function() {
        $('#PopUp').show();
        });
        clearData();
    }
}



buttonCreate.addEventListener("click",sendData);