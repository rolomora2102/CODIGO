let nameCompany = document.getElementById("input_name_company")
let locateProvince = document.getElementById("province-dropdown")
let locateCanton = document.getElementById("canton-dropdown")
let locateDistrict = document.getElementById("district-dropdown")
let phone = document.getElementById("input_phone_company")
let password = document.getElementById("input_password_company")
let pass_check = document.getElementById("input_password_check_company")
let nameadmin = document.getElementById("input_name_admin")
let lastnameadmin = document.getElementById("input_lastname_admin")
let id = document.getElementById("input_id_admin")
let phoneadmin = document.getElementById("input_phone_admin")
let mailadmin = document.getElementById("input_email_admin")
var button = document.querySelector('.btn_forms_admin_company')

function validationNameCompany(){
    let errorName = false;
    if(nameCompany.value == ""){
        nameCompany.classList.add("error");
        errorName = true;
    }else{
        nameCompany.classList.remove("error");
    }
    return errorName;
}

function validationProvince(){
    let errorProvince = false;
    if(locateProvince.value == ""){
        locateProvince.classList.add("error");
        errorProvince = true;
    }else{
        locateProvince.classList.remove("error");
    }
    return errorProvince;
}

function validationCanton(){
    let errorCanton = false;
    if(locateCanton.value == ""){
        locateCanton.classList.add("error");
        errorCanton = true;
    }else{
        locateCanton.classList.remove("error");
    }
    return errorCanton;
}

function validationDistrict(){
    let errorDistrict = false;
    if(locateDistrict.value == ""){
        locateDistrict.classList.add("error");
        errorDistrict = true;
    }else{
        locateDistrict.classList.remove("error");
    }
    return errorDistrict;
}

function validationPhone(){
    let errorPhone = false;
    let phoneValue = phone.value.trim()
    const phoneRegex = /^\d{8}$/;
    if(phone.value == "" || !phoneRegex.test(phoneValue)){
        phone.classList.add("error");
        errorPhone = true;
    }else{
        phone.classList.remove("error");
    }
    return errorPhone;
}

function validationPass(){
    let errorPass = false;
    if(password.value == ""){
        password.classList.add("error");
        errorPass = true;
    }else{
        password.classList.remove("error");
    }
    return errorPass;
}

function validationPassCheck(){
    let errorPassCheck = false;
    if(pass_check.value == ""){
        pass_check.classList.add("error");
        errorPassCheck = true;
    }else{
        pass_check.classList.remove("error");
    }
    return errorPassCheck;
}

function validationNameAdmin(){
    let errorNameAdmin = false;
    if(nameadmin.value == ""){
        nameadmin.classList.add("error");
        errorNameAdmin = true;
    }else{
        nameadmin.classList.remove("error");
    }
    return errorNameAdmin;
}

function validationLastNameAdmin(){
    let errorLastNameAdmin = false;
    if(lastnameadmin.value == ""){
        lastnameadmin.classList.add("error");
        errorLastNameAdmin = true;
    }else{
        lastnameadmin.classList.remove("error");
    }
    return errorLastNameAdmin;
}

function validationId(){
    let errorId = false;
    if(id.value == ""){
        id.classList.add("error");
        errorId = true;
    }else{
        id.classList.remove("error");
    }
    return errorId;
}

function validationPhoneAdmin(){
    let errorPhone = false;
    if(phoneadmin.value == ""){
        phoneadmin.classList.add("error");
        errorPhone = true;
    }else{
        phoneadmin.classList.remove("error");
    }
    return errorPhone;
}

function validationMailAdmin(){
    let errorMailAdmin = false;
    if(mailadmin.value == ""){
        mailadmin.classList.add("error");
        errorMailAdmin = true;
    }else{
        mailadmin.classList.remove("error");
    }
    return errorMailAdmin;
}

function sendData(){
    if (validationNameCompany()){
        Swal.fire({
            icon:"warning",
            title:"Información omitida",
            text:"Alguno de los campos esta vació"
        })
    }else if(validationProvince()){
        Swal.fire({
            icon:"warning",
            title:"Información omitida",
            text:"Alguno de los campos esta vació"
        })
    }else if(validationCanton()){
        Swal.fire({
            icon:"warning",
            title:"Información omitida",
            text:"Alguno de los campos esta vació"
        })
    }else if(validationDistrict()){
        Swal.fire({
            icon:"warning",
            title:"Información omitida",
            text:"Alguno de los campos esta vació"
        })
    }
    else if(validationPhone()){
        Swal.fire({
            icon:"warning",
            title:"Información omitida",
            text:"Alguno de los campos esta vació"
        })
    }else if(validationPass()){
        Swal.fire({
            icon:"warning",
            title:"Información omitida",
            text:"Alguno de los campos esta vació"
        })
    }else if(validationPassCheck()){
        Swal.fire({
            icon:"warning",
            title:"Información omitida",
            text:"Alguno de los campos esta vació"
        })
    }else if(validationNameAdmin()){
        Swal.fire({
            icon:"warning",
            title:"Información omitida",
            text:"Alguno de los campos esta vació"
        })
    }else if(validationLastNameAdmin()){
        Swal.fire({
            icon:"warning",
            title:"Información omitida",
            text:"Alguno de los campos esta vació"
        })
    }else if(validationId()){
        Swal.fire({
            icon:"warning",
            title:"Información omitida",
            text:"Alguno de los campos esta vació"
        })
    }else if(validationPhoneAdmin()){
        Swal.fire({
            icon:"warning",
            title:"Información omitida",
            text:"Alguno de los campos esta vació"
        })
    }else if(validationMailAdmin()){
        Swal.fire({
            icon:"warning",
            title:"Información omitida",
            text:"Alguno de los campos esta vació"
        })
    }
}

button.addEventListener('click',sendData);