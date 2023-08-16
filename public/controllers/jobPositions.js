const tbody = document.querySelector(".jobInfo__tbody")
let positionList = [];

function jobPositionTable(i) {
    let tableRow = tbody.insertRow();
    let idCell = tableRow.insertCell();
    idCell.classList.add("jobId__container");
    let nameCell = tableRow.insertCell();
    nameCell.classList.add("jobName__container");
    let statusCell = tableRow.insertCell();
    statusCell.classList.add("jobStatus__container");
    let inviteCell = tableRow.insertCell();
    inviteCell.classList.add("jobInvite__container");

    let id = document.createElement("div");
    id.innerHTML = positionList[i]["_id"];
    let name = document.createElement("div");
    name.innerHTML = positionList[i]["name"];
    let editButton = document.createElement("button");
    let editImage = document.createElement("img");
    editImage.src = "./images/iconoEditar.png";
    let selectStatus = document.createElement("select");
    let optionActive = document.createElement("option");
    optionActive.value="ACTIVO";
    optionActive.innerHTML = "Activa";
    let optionInactive = document.createElement("option");
    optionInactive.value = "INACTIVO"
    optionInactive.innerHTML = "Inactiva"
    let optionClosed = document.createElement("option");
    optionClosed.value = "CERRADO";
    optionClosed.innerHTML = "Cerrada"
    let inviteButton = document.createElement("button");
    let inviteImage = document.createElement("img");
    inviteImage.src = "./images/iconoInvitar.png";
    if (positionList[i]["status"]=="ACTIVO") {
        selectStatus.appendChild(optionActive)
        selectStatus.appendChild(optionInactive)
        selectStatus.appendChild(optionClosed)
        inviteButton.classList.add("invite--green")
    }else if (positionList[i]["status"]=="INACTIVO") {
        selectStatus.appendChild(optionInactive)
        selectStatus.appendChild(optionActive)
        selectStatus.appendChild(optionClosed)
        inviteButton.classList.add("invite--inactive")
    }else {
        selectStatus.appendChild(optionClosed)
        selectStatus.appendChild(optionInactive)
        selectStatus.appendChild(optionActive)
        inviteButton.classList.add("invite--red")
    }

    idCell.appendChild(id);
    editButton.appendChild(editImage)
    name.appendChild(editButton)
    nameCell.appendChild(name)
    statusCell.appendChild(selectStatus)
    inviteButton.appendChild(inviteImage)
    inviteCell.appendChild(inviteButton)

    selectStatus.onchange = () => {
        modifyStatus(positionList[i]["_id"],selectStatus.value)
    }
}

const loadPositions = async()=> {
    tbody.innerHTML="";
    positionList = await getPositions();
    for (let i=0;i<positionList.length;i++) {
        if (positionList[i]["companyName"]=="Intel"){
            jobPositionTable(i)
        }
    }
}

loadPositions();