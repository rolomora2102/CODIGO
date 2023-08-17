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
            window.location.href="./adminProfile.html";
        }
    })
}