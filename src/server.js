const express=require("express");
const app=express();

require("./db/connection");

const Register=require("./models/register");

const Faq=require("./models/faq");

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.set("view engine","ejs");

app.listen(3000,function(){
  console.log("server started at port 3000")
})


app.get("/",function(req,res){
  res.render("register.ejs")

})

app.post("/",async function(req,res){
  try{
    const password=req.body.password;
    const cpassword=req.body.confirmpassword;
    
    if(password===cpassword){
      const registerUser=new Register({
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email,
        password:req.body.password,
        confirmpassword:req.body.confirmpassword

      })
      const registered=await registerUser.save();
      res.status(201).render("faq")

    }else{
      res.send("passwords are not same");
    }
  }catch(error){
    res.status(400).send(error);
  }
})

app.post("/login",async function(req,res){
  try{
    const email=req.body.email;
    const password=req.body.password;

    const userEmail=await Register.findOne({email:email});

    if(userEmail.password===password){
      res.status(201).render("faq")
    }else{
      res.send("envalid email or password")
    }
  }catch(error){
    res.status(400).send("envalid email or password")
  }
})

app.post("/faq",async function(req,res){

  try{
    const faq=new Faq({
      name:req.body.name,
      faqCat:req.body.faqCat,
      catid:req.body.catid,
      catName:req.body.catName,
      faqid:req.body.faqid,
      question:req.body.question,
      answer:req.body.answer,
      email:req.body.email,
      phone:req.body.phone

    })
    const faqDone=await faq.save();
    res.status(201).render("thankyou")
  }catch(error){
    res.status(400).send(error);
  }

})

app.get("/login",function(req,res){
  res.render("login.ejs")

})
