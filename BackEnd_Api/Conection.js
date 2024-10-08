const mongoose = require('mongoose')

const ConnectWithDB = mongoose.connect('mongodb://127.0.0.1:27017/EcommerceDB').then((res)=>console.log("Connected with db" , res))
.catch((err)=>console.log(err))

module.exports = ConnectWithDB