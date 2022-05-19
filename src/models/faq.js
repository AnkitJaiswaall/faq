const mongoose=require("mongoose")

const faqSchema=mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  faqCat:{
    type:String,
    required:true
  },
  catid:{
    type:String,
    required:true
  },
  catName:{
    type:String,
    required:true
  },
  faqid:{
    type:String,
    required:true
  },
  question:{
    type:String,
    required:true
  },
  answer:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,

  },
  phone:{
    type:String,
    required:true,

  }
})


const Faq=new mongoose.model("faq",faqSchema);
module.exports=Faq;
