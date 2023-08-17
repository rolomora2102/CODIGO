const validate_admin = async (p_companyEmail,p_password) => {
    await axios ({
        method: "post",
        url: "http://localhost:3000/api/admin.auth",
        responseType: "json",
        data:{
            companyEmail:p_companyEmail,
            password:p_password
        }
    }).then((res)=>{
        if (res.data.result==false) {
            Swal.fire({
                title:"Datos Incorrectos",
                text:res.data.msg,
                icon:"warning"
            })
        }else {
            sessionStorage.setItem("conectado",res.data.result);
            sessionStorage.setItem("mongo_id",res.data.admin._id);
            sessionStorage.setItem("code",res.data.admin.code);
            sessionStorage.setItem("companyName",res.data.admin.companyName);
            sessionStorage.setItem("companyPhoto",res.data.admin.photo);
            window.location.href="./adminProfile.html";
        }
    })
}

const validate_user = async (p_email,p_password, p_role) => {
    await axios ({
        method: "post",
        url: "http://localhost:3000/api/users.auth",
        responseType: "json",
        data:{
            email:p_email,
            password:p_password
        }
    }).then((res)=>{
        if (res.data.result==false) {
            validate_admin(p_email,p_password)
        } else if (res.data.user.role == 'User') {
            sessionStorage.setItem("conectado",res.data.result);
            sessionStorage.setItem("mongo_id",res.data.user._id);
            sessionStorage.setItem("role",res.data.user.role);
            window.location.href="./finalUserProfile.html";
            return true;
        } else if (res.data.user.role == 'Recruiter') {
            sessionStorage.setItem("conectado",res.data.result);
            sessionStorage.setItem("mongo_id",res.data.user._id);
            sessionStorage.setItem("role",res.data.user.role);
            window.location.href="./recruiterProfile.html";
            return true;
        } else {
            sessionStorage.setItem("conectado",res.data.result);
            sessionStorage.setItem("mongo_id",res.data.user._id);
            sessionStorage.setItem("role",res.data.user.role);
            window.location.href="./ManagerProfile.html";
            return true;
        } 
    })
}