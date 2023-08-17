const express = require("express");
const Users = require ("../models/Users");
const router = express.Router();

router.post("/users.auth",(req,res)=>{
    Users.findOne({email:req.body.email})
    .then(function(user){
        if (user) {
            if (user.password == req.body.password) {
                res.json({
                    result:true,
                    user
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