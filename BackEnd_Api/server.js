const express = require('express')
const ConnectWithDB = require('./Conection')
const server = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
server.use(cors())
server.use(express.json())











server.listen(process.env.PORT || 2005 , async()=>{
    try {
        await ConnectWithDB
        console.log("Conection Okay...")
        console.log(`Port Run with${process.env.PORT || 2005}`)
    } catch (error) {
        console.log(error)
    }
})