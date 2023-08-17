const createPosition= async(p_id,p_position, p_province, p_canton, p_district, p_salary,p_studies,p_area,p_workday,p_from,p_until,p_year,p_requirement,p_name,p_photo)=>{
    await axios({
        method:"post",
        url:"http://localhost:3000/api/positions",
        responseType:"json",
        data:{
            id:p_id,
            name:p_position,
            province:p_province,
            canton:p_canton,
            district:p_district,
            salary:p_salary,
            workday:p_workday,
            studies:p_studies,
            area:p_area,
            offerFrom:p_from,
            offerUntil:p_until,
            years:p_year,
            requirements:p_requirement,
            companyName:p_name,
            companyPhoto:p_photo
        }
    })
    .catch((error)=>{
        console.log(error);
    })
}

const getPositions = async()=> {
    let positionList = [];
    await axios({
        method: "get",
        url: "http://localhost:3000/api/positions",
        responseType: "json",
    })
    .then ((res) =>{
        positionList = res.data.results;
    })
    .catch ((error) =>{
        console.log(error);
    })
    return positionList;
}

const modifyStatus = async(p_id, p_status)=> {
    await axios({
        method: "put",
        url: "http://localhost:3000/api/positions",
        responseType: "json",
        data:{
            _id:p_id,
            status:p_status
        }
    })
    .then (() =>{
        window.location.href = 'jobPositionsAdmin.html'
    })
    .catch ((error) =>{
        console.log(error);
    })
}