const express = require('express') //importando la dependencia de express
const cors = require('cors')//importando la dependencia de cors
const mongoose = require('mongoose')//importando la dependencia de mongoose
const bodyParser = require('body-parser');

//vincular la carpeta de routes
const users = require('./routes/users.routes');
const positions = require('./routes/positions.routes');
const admins = require('./routes/admin.routes');
const adminAuth = require('./routes/admin.auth');
const userAuth = require('./routes/users.auth');

//importar dotenv
require('dotenv').config()

const app = express()

//habilitar cors
app.use(cors())


// Maneja los datos del body
app.use(bodyParser.json());

// Maneja los datos de una libreria
app.use(bodyParser.urlencoded({extended:true}))


//establecer la conexion con mongo
mongoose.connect(process.env.MONGO_URI).
    catch(error => handleError(error));


//localhost:3000/api
app.use('/api', users);
app.use('/api', positions);
app.use('/api', admins);
app.use('/api', adminAuth);
app.use('/api', userAuth);


PORT = 3000// variable para el puerto
app.listen(PORT, ()=>{
    console.log(`Servidor levantado en el puerto:${PORT}, conectado a Mongo`)
})