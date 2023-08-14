let clean = document.querySelector(".cleanButton");
let search = document.querySelector(".searchButton");
const cantonDropdown = document.getElementById('canton-dropdown');
const districtDropdown = document.getElementById('district-dropdown');


function clearData() {
    let filters = document.querySelectorAll(".filters *")
    for (let i=0;i<filters.length;i++){
        filters[i].value=""
    }
    cantonDropdown.disabled = true
    districtDropdown.disabled = true
}



clean.addEventListener("click",clearData)
search.addEventListener("click",createPositionContainers)