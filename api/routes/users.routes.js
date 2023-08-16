//necesitamos importar express
const express = require('express')
const Users = require('../models/Users'); //molde para los usuarios
const router = express.Router();

//http://localhost:3000/api/users.routes


//POST

//Registrar usuarion en la DB

router.post('/users.routes', async (req, res) => {
    try {
      const newUser = new Users(req.body);
  
      const savedUser = await newUser.save();
  
      res.status(201).json({
        response: 'Usuario registrado',
        result: true,
        savedUser
      });
    } catch (error) {
      res.status(500).json({
        result: false,
        response: 'Error al registrar usuario. Detalles: ',
        error: error.message // Usar 'error.message' para obtener el mensaje de error específico
      });
    }
  });
  


//GET


//Listar Usuarios

router.get('/users.routes', (req, res) => {
    Users.find()
    .then((results) => {
        res.status(200).json({
            result: true,
            response: "Se han encontrado los siguientes usuarios: ",
            results
        })
    })
    .catch((error) => {
        res.status(400).json({
            result: false,
            response: "No se encontraron usuarios. Detalles del error: ",
            error
        })
    })  
})


//PUT-->actualizar

router.put('/users.routes', (req,res) => {
    let body = req.body;
    const {_id, name, last, team, email, role, phone, status} = body;
    Users.updateOne({_id}, {$set: {name, last, team, email, role, phone, status}})
    .then((updatedUser) => {
        res.status(200).json({
            result: true,
            updatedUser,
            response: "Se a cambiado los datos correctamente."
        })
    })
    .catch((error) => {
        res.status(501).json({
            result: false,
            response: "Ha ocurrido un error. Detalles del Error: ",
            error
        })
    })
})

//DELETE

router.delete('/users.routes', (req, res) => {
    let body = req.body;
    Users.deleteOne({_id: body._id})
    .then((deletedUser) => {
        res.status(200).json({
            result: true,
            response: 'Usuario eliminado',
            deletedUser
        })
    }).catch((error) => {
        res.status(501).json({
            result: false,
            response: 'Ha ocurrido un error. Detalles: ',
            error
        })
    })
})

module.exports = router
