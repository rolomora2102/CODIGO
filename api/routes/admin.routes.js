const express = require('express')
const Admins = require('../models/Admin');
const router = express.Router();

router.post('/admin.routes', async (req, res) => {
    try {
      const newAdmin = new Admins(req.body);
  
      const savedAdmin = await newAdmin.save();
  
      res.status(201).json({
        response: 'Compañia registrada',
        result: true,
        savedAdmin
      });
    } catch (error) {
      res.status(500).json({
        result: false,
        response: 'Error al registrar la compañia. Detalles: ',
        error: error.message
      });
    }
  });

router.get('/admin.routes', (req, res) => {
    Admins.find()
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

router.put('/admin.routes', (req,res) => {
  let body = req.body;
  const {_id, companyName, province, canton, district, companyNumber, description, photo, status} = body;
  Admins.updateOne({_id}, {$set: {companyName, province, canton, district, companyNumber, description, photo, status}})
  .then((updatedAdmin) => {
      res.status(200).json({
          result: true,
          updatedAdmin,
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

module.exports = router