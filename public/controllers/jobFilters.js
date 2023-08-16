let clean = document.querySelector(".cleanButton");
let search = document.querySelector(".searchButton");
const code = document.getElementById('code__input');
const offerName = document.getElementById('offername__input');
const salaryDropdown = document.getElementById('salary-dropdown');
const studiesDropdown = document.getElementById('studies-dropdown');
const areaDropdown = document.getElementById('jobposition-dropdown');
const companyDropdown = document.getElementById('company-dropdown');
const yearDropdown = document.getElementById('years-dropdown');
const provinceDropdown = document.getElementById('province-dropdown');
const cantonDropdown = document.getElementById('canton-dropdown');
const districtDropdown = document.getElementById('district-dropdown');

function clearData() {
    let filters = document.querySelectorAll(".filters *")
    for (let i=0;i<filters.length;i++){
        filters[i].value=""
    }
    window.location.href = "jobs.html"
}

const filter = async()=> {
    jobSec.innerHTML = "";
    for (let i=0;i<positionList.length;i++) {
        if (code.value==positionList[i]["_id"] || offerName.value==positionList[i]["name"] || salaryDropdown.value==positionList[i]["salary"] || studiesDropdown.value==positionList[i]["studies"] || areaDropdown.value==positionList[i]["area"] || companyDropdown.value==positionList[i]["companyName"] || yearDropdown.value==positionList[i]["year"] || provinceDropdown==positionList[i]["province"] || cantonDropdown==positionList[i]["canton"] || districtDropdown==positionList[i]["district"]) {
            createPositionContainers(i)
        }
    }
}

clean.addEventListener("click",clearData)
search.addEventListener("click",filter)