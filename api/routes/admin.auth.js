const express = require("express");
const Admin = require ("../models/Admin");
const router = express.Router();

router.post("/admin.auth",(req,res)=>{
    Admin.findOne({companyEmail:req.body.companyEmail})
    .then(function(admin){
        if (admin) {
            if (admin.password == req.body.password) {
                res.json({
                    result:true,
                    admin
                });
            } else {
                res.json({
                    result:false,
                    msg: "Contraseña incorrecta"
                })
            }
        } else {
            res.json({
                result: false,
                msg: "El usuario no está registrado"
            })
        }
    })
})

module.exports = router;