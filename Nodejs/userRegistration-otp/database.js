const mongoose = require('mongoose');
const {MONGODB_ATLAS_URL} = process.env

const connectDB = () => {
    mongoose.connect(MONGODB_ATLAS_URL)
    .then(()=>{
        console.log('Database connection established...')
    })
    .catch(()=>{
        console.log('Database connection failed...')
    })
}

module.exports = connectDB

