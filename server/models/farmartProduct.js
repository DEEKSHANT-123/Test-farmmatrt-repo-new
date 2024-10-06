const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    waranty:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:false,
    },
    created:{
        type:Date,
        required:true,
        default:Date.now,
    },

});

module.exports=mongoose.model('farmartProduct',productSchema);