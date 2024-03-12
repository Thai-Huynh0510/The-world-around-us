require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()
const connectDB = require('./db/index')
app.use(express.json())
app.use(cors())
app.use("/api", (req,res) => {
    res.status(200).json({msg: "hello world"})
})
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(5000, () => console.log('server listen to port 5000'))
    } catch (error) {
        console.log(error)
    }
}
start()