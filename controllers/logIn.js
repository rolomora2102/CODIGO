var button = document.getElementById('btn__entrar')
let anchor = document.getElementById('entrar__anchor')
let user = document.getElementById('input__usuario')
let password = document.getElementById('input__password')


function emptySpaces(){
    var error = false;
    var requirements = document.querySelectorAll("#login [required]")
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
    let requirements = document.querySelectorAll("#login [required]")
    for (let i=0;i<requirements.length;i++){
        requirements[i].value=""
    }
}

function login() {
    if (user.value=='admin' && password.value=='admin') {
        anchor.getAttribute("href")
        anchor.setAttribute("href",'./adminProfile.html') 
    }else if (user.value=='manager' && password.value=='manager') {
        anchor.getAttribute("href")
        anchor.setAttribute("href",'./managerProfile.html') 
    }else if (user.value=='recruiter' && password.value=='recruiter') {
        anchor.getAttribute("href")
        anchor.setAttribute("href",'./recruiterProfile.html') 
    }else if (user.value=='user' && password.value=='user') {
        anchor.getAttribute("href")
        anchor.setAttribute("href",'./FinalUserProfile.html') 
    }
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
        login()
        clearData();
    }
}



button.addEventListener("click",sendData);