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
    academicTable: [
        {
        academicSchool: {type: String, required: false},
        academicArea: {type: String, required: false},
        academicLevel: {type: String, required: false},
        academicStatus: {type: String, required: false},
        academicMonthFrom: {type: String, required: false},
        academicYearFrom: {type: String, required: false},
        academicMonthTo: {type: String, required: false},
        academicYearTo: {type: String, required: false}
        }
    ],
    jobTable: [
        {
        jobEnterpriseName: {type: String, required: false},
        jobType: {type: String, required: false},
        jobDescription: {type: String, required: false},
        jobMonthFrom: {type: String, required: false},
        jobYearFrom: {type: String, required: false},
        jobMonthTo: {type: String, required: false},
        jobYearTo: {type: String, required: false}
        }
    ],
    type: {type: String, default: 'User'},
    status: {type: Boolean, default: false}
})


module.exports = mongoose.model('Users', schema_users, 'users');