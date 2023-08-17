const mongoose = require('mongoose');

const schema_admin = new mongoose.Schema({
    code: {type:String, required:true,unique:true},
    companyName: {type: String, required: true, unique: true},
    province: {type: String, required: true, unique: false},
    canton: {type: String, required: true, unique: false},
    district: {type: String, required: true, unique: false},
    companyNumber: {type: String, required: true, unique: true},
    companyEmail: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: false},
    description: {type: String, required: false, unique: false},
    photo: {type: String, required: false, unique: false},
    status: {type: Boolean, default: false},
    name: {type: String, required: true, unique: false},
    lastName: {type: String, required: true, unique: false},
    id: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    collaborators: [{
        collabID: {type:String, required:false,unique:false}
    }]
})


module.exports = mongoose.model('Admins', schema_admin, 'admin');