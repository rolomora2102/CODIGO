const cors = require("cors")  // importanto la dependencia de cors
const mongoose = require("mongoose")  // importando la dependencia de mongoose
const express = require('express')
// Importar dotenv
require("dotenv").config()

const app = express()

// Habilitar CORS
app.use(cors())

// Establecer la conexión con Mongo
mongoose.connect(process.env.MONGO_URI)

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)