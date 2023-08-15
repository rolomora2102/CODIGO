let jobSec = document.querySelector(".positions__section")

function createPositionContainers(img,companyname,positionname,companyubication,salaryamount,workdays,offer,studiesrequired,arearequired,yearsrequired,generalrequirements) {
    let sec = document.createElement("section")
    sec.classList.add("consultedposition__section")
    let container = document.createElement("div")
    container.classList.add("consultedposition__container")
    let imageContainer = document.createElement("div")
    imageContainer.classList.add("consultedposition__image")
    let image = document.createElement("img")
    image.classList.add("consultedposition__companyimage")
    image.src = img
    let infoContainer = document.createElement("div")
    infoContainer.classList.add("consultedposition__info")
    let positionInfo = document.createElement("div")
    positionInfo.classList.add("position__info")
    let company = document.createElement("h2")
    company.innerHTML = companyname
    let positionName = document.createElement("h1")
    positionName.innerHTML = positionname
    let ubication = document.createElement("h3")
    ubication.innerHTML = companyubication
    let salary = document.createElement("h3")
    salary.innerHTML="Rango Salarial"
    let setSalary = document.createElement("p")
    setSalary.innerHTML = salaryamount
    let workday = document.createElement("h3")
    workday.innerHTML="Jornada Laboral"
    let setworkday = document.createElement("p")
    setworkday.innerHTML = workdays
    let offerTime = document.createElement("h3")
    offerTime.innerHTML="Vigencia de la Oferta"
    let setOfferTime = document.createElement("p")
    setOfferTime.innerHTML = offer
    let requirementsInfo = document.createElement("div")
    requirementsInfo.classList.add("requirements__info")
    let requirements = document.createElement("h1")
    requirements.innerHTML="Requisitos Académicos"
    let studies = document.createElement("h3")
    studies.innerHTML="Nivel de Estudios"
    let setstudies = document.createElement("p")
    setstudies.innerHTML = studiesrequired
    let area = document.createElement("h3")
    area.innerHTML="Área profesional"
    let setarea = document.createElement("p")
    setarea.innerHTML = arearequired
    let years = document.createElement("h3")
    years.innerHTML="Años de experiencia laboral"
    let setyears = document.createElement("p")
    setyears.innerHTML = yearsrequired
    let statusContainer = document.createElement("div")
    statusContainer.classList.add("consultedposition__status")
    let statusButton = document.createElement("button")
    statusButton.classList.add("consultedposition__button")
    let statusText = document.createElement("h1")
    statusText.innerHTML="APLICAR"
    let requirementsTextContainer = document.createElement("div")
    requirementsTextContainer.classList.add("consultedposition__requirements")
    let requirementsText = document.createElement("textarea")
    requirementsText.classList.add("requirements__text")
    requirementsText.innerHTML = generalrequirements
    requirementsText.disabled = true;


    imageContainer.appendChild(image)
    positionInfo.appendChild(company)
    positionInfo.appendChild(positionName)
    positionInfo.appendChild(ubication)
    positionInfo.appendChild(salary)
    positionInfo.appendChild(setSalary)
    positionInfo.appendChild(workday)
    positionInfo.appendChild(setworkday)
    positionInfo.appendChild(offerTime)
    positionInfo.appendChild(setOfferTime)
    requirementsInfo.appendChild(requirements)
    requirementsInfo.appendChild(studies)
    requirementsInfo.appendChild(setstudies)
    requirementsInfo.appendChild(area)
    requirementsInfo.appendChild(setarea)
    requirementsInfo.appendChild(years)
    requirementsInfo.appendChild(setyears)
    infoContainer.appendChild(positionInfo)
    infoContainer.appendChild(requirementsInfo)
    statusButton.appendChild(statusText)
    statusContainer.appendChild(statusButton)
    requirementsTextContainer.appendChild(requirementsText)
    container.appendChild(imageContainer)
    container.appendChild(infoContainer)
    container.appendChild(statusContainer)
    container.appendChild(requirementsTextContainer)
    sec.appendChild(container)
    jobSec.appendChild(sec)
}

function loadPositions() {
    for (let i=0;i<5;i++) {
        createPositionContainers("./images/LogoDosPinos.png","Intel","Desarrollador de Software","San José, Montes de Oca, San Pedro","1,000.000 - 1,500.000","Tiempo Completo","10/07/2023 - 10/08/2023", "Bachillerato","Informática","2","Se busca mae que sepa algo")
    }
}

loadPositions()