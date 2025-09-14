const mongoose = require('mongoose')
const userSchema  = new mongoose.Schema({
       uname:{type:String,required:true,unique:true},
       fname:{type:String,required:true },
       lname:{type:String,required:true },
       no:{type:Number,required:true }
})

module.exports=mongoose.model('User',userSchema);