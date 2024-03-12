const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        require:[true, "Title must be provided"]
    },
    post:{
        type:String,
        require:[true, "Description must be provided"]
    },
    date:{
        type:Date,
        default: Date.now
    }
})
module.exports = mongoose.model("blog", blogSchema)