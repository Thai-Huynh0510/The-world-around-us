const mongoose = require('mongoose')

const connectDB = (url) =>{
    return mongoose.connect(url).then(() => console.log("connect to DB"))
}

module.exports = connectDB