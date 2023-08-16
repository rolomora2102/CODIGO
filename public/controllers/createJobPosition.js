let buttonCreate = document.querySelector('.create__button');
const position = document.getElementById('position__input');
const provinceDropdown = document.getElementById('province-dropdown');
const cantonDropdown = document.getElementById('canton-dropdown');
const districtDropdown = document.getElementById('district-dropdown');
const salaryDropdown = document.getElementById('salary-dropdown');
const studiesDropdown = document.getElementById('studies-dropdown');
const areaDropdown = document.getElementById('area-dropdown');
const workdayDropdown = document.getElementById('workday-dropdown');
const dayDropdownFrom = document.getElementById('dayFrom__select');
const monthDropdownFrom = document.getElementById('monthFrom__select');
const yearDropdownFrom = document.getElementById('yearFrom__select');
const dayDropdownUntil = document.getElementById('dayUntil__select');
const monthDropdownUntil = document.getElementById('monthUntil__select');
const yearDropdownUntil = document.getElementById('yearUntil__select');
const yearDropdown = document.getElementById('year-dropdown');
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
        const from = dayDropdownFrom.value+"/"+monthDropdownFrom.value+"/"+yearDropdownFrom.value;
        const until = dayDropdownUntil.value+"/"+monthDropdownUntil.value+"/"+yearDropdownUntil.value;
        createPosition(position.value,provinceDropdown.value,cantonDropdown.value,districtDropdown.value,salaryDropdown.value,studiesDropdown.value,areaDropdown.value,workdayDropdown.value,from,until,yearDropdown.value,textArea.value,"Intel","images/LogoIntel.png")
        fetch('popUpJobCreated.html').then((response) => {
            return response.text();
        }).then((text) => {
          let sec = document.querySelector("#PopUp")
          sec.innerHTML = text;
          document.querySelector('.button').addEventListener('click', ()=> {
          window.location.href = "jobPositionsAdmin.html"
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