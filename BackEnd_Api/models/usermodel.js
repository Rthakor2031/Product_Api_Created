const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{type:String , required:true},
    email:{type:String , required:true , unique:true},
    password:{type:String , required:true},
    role:{type:Boolean , default:true}
},{
    timestamps:true
})

const usermodel = mongoose.model("user" , userSchema)

Module.exports = usermodel