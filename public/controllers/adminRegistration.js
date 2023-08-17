const registerCompany= async(p_code,p_name, p_province, p_canton, p_district, p_number,p_email,p_password,p_description,p_photo,p_status,p_adminInfo)=>{
    await axios({
        method:"post",
        url:"http://localhost:3000/api/admin.routes",
        responseType:"json",
        data:{
            code:p_code,
            companyName:p_name,
            province:p_province,
            canton:p_canton,
            district:p_district,
            companyNumber:p_number,
            companyEmail:p_email,
            password:p_password,
            description:p_description,
            photo:p_photo,
            status:p_status,
            name:p_adminInfo[0],
            lastName:p_adminInfo[1],
            id:p_adminInfo[2],
            phone:p_adminInfo[3],
            email:p_adminInfo[4],
        }
    })
    .catch((error)=>{
        console.log(error.response.data);
    })
}

const getAdmin = async()=> {
    let adminList = [];
    await axios({
        method: "get",
        url: "http://localhost:3000/api/admin.routes",
        responseType: "json",
    })
    .then ((res) =>{
        adminList = res.data.results;
    })
    .catch ((error) =>{
        console.log(error);
    })
    return adminList;
}