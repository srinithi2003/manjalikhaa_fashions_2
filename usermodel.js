const mongoose=require('mongoose')


const usermodel=new mongoose.Schema({
    id:String,
    name:String,
    quantity:Number,
    price:Number,
    category:String,
    s_name:String,
    s_place:String,
    s_tel:String


})

exports.users=mongoose.model("products",usermodel,"products")