const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        default:null
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String
    },
    token:{
        type:String
    }
});

module.exports=mongoose.model('user',userSchema);
