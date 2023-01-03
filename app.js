const express=require("express");
require("dotenv").config();
const app=express();
//middleware for handling json file in express 
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("<h1>Hello From Auth system</h1>");
})

app.post("/register",(req,res)=>
{
   const {firstName,email,password}= req.body
   if(!(email && password && firstName))
   {
        res.status(400).send('All fields are required');
   }
});
module.exports=app;
