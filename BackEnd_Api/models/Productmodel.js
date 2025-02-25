const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title:{type:String , required:true},
    image:{type:String , required:true},
    price:{type:Number , required:true},
    description:{type:String , required:true},
    catagory:{type:String , default:true}
},{
    timestamps:true
})

const Productmodel = mongoose.model("Product" , ProductSchema)

Module.exports = Productmodel