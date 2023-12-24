const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    }, 
    age: {
        type : Number
    }, 
    email: String,
    password: String,
    OTP: {
        type: Number,
    },
    OTPExpiers: {
        type: Number
    },
    isVerified: {
        type: Boolean,
        defaule: false
    },

})

module.exports = mongoose.model('users', UserSchema)