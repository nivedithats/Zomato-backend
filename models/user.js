const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true,
    },
 
})

const UserDatabase = mongoose.model('userDatabase', UserSchema);

module.exports = UserDatabase;