const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  phone:{
    type:String,
    required:true,
    unique:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  confirmpassword:{
    type:String,
    required:true
  }
})

const Register=new mongoose.model("Register",userSchema);
module.exports=Register;
