const mongoose = require('mongoose');

const schema_positions = new mongoose.Schema({
    id: {type: String, required: true, unique: true},
    name: {type: String, required: true, unique: false},
    province: {type: String, required: true, unique: false},
    canton: {type: String, required: true, unique: false},
    district: {type: String, required: true, unique: false},
    salary: {type: String, required: true, unique: false},
    workday: {type: String, required: true, unique: false},
    studies: {type: String, required: true, unique: false},
    area: {type: String, required: true, unique: false},
    offerFrom: {type: String, required: true, unique: false},
    offerUntil: {type: String, required: true, unique: false},
    years: {type: String, required: true, unique: false},
    requirements: {type: String, required: true, unique: false},
    companyName: {type: String, required: true, unique: false},
    companyPhoto: {type: String, required: false, unique: false},
    status: {type: String, default: "ACTIVO"}
})


module.exports = mongoose.model('Positions', schema_positions, 'positions');