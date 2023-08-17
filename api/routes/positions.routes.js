const express = require('express')
const Positions = require('../models/Position');
const router = express.Router();

router.post('/positions',function(req,res){
    let body = req.body;
    
    let position = new Positions({
     id:body.id,
     name:body.name,
     province:body.province,
     canton:body.canton,
     district:body.district,
     salary:body.salary,
     workday:body.workday,
     studies:body.studies,
     area:body.area,
     offerFrom:body.offerFrom,
     offerUntil:body.offerUntil,
     years:body.years,
     requirements:body.requirements,
     companyName:body.companyName,
     companyPhoto:body.companyPhoto
    })
 
    position.save()
    .then(()=>{
     res.status(201).json({
         msg:"Puesto registrado",
         result:true,
         position
     })
 
    })
    .catch((error)=>{
     res.status(501).json({
         result:false,
         msg:"Ocurrió el siguiente error: ",
         error
         
     })
    })
 });

 router.get('/positions',function(req,res){
    Positions.find()
    .then((results)=>{
        res.status(200).json({
            msg:"Lista de puestos",
            result:true,
            results
        })
    })
    .catch((error)=>{
        res.status(400).json({
            result:false,
            msg:"Ocurrió el siguiente error: ",
            error
        })
    })
}
)

router.put('/positions',function(req,res){

    let body = req.body;

    const {_id,name,province,canton,district,salary,workday,studies,area,offerFrom,offerUntil,years,requirements,status} = body

    Positions.updateOne({_id},{$set:{name,province,canton,district,salary,workday,studies,area,offerFrom,offerUntil,years,requirements,status}})
    .then((updatedPosition)=>{
        res.status(200).json({
            result:true,
            msg:"Información actualizada",
            updatedPosition
        })
    })
    .catch((error)=>{
        res.status(501).json({
            result:false,
            msg:"Ocurrió el siguiente error: ",
            error
        })
    })

})

module.exports = router