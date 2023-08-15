//requiere mongoose

const mongoose = require('mongoose');


//crear esquema

const schema_users = new mongoose.Schema({
    name: {type: String, required: true, unique: false},
    last: {type: String, required: true, unique: false},
    id: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: false},
    province: {type: String, required: true, unique: false},
    canton: {type: String, required: true, unique: false},
    district: {type: String, required: true, unique: false},
    country: {type: String, required: true, unique: false},
    gender: {type: String, required: true, unique: false},
    personalDetails: {type: String, required: true, unique: false},
    status: {type: String, default: 0}
})


module.exports = mongoose.model('Users', schema_users, 'users');