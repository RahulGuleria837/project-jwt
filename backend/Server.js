require('dotenv').config();
const { application } = require("express");
const { default: mongoose, PromiseProvider } = require("mongoose");
const mongoose=require("mongoose");
const express=require
const cors=require("cors");
const app=express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DB_URL,(err)=>{
    if(err){console.log("Database Connected");}
    
    app.listen(process.env.PORT,()=>{
        console.log("Server is running at Port:"+process.env.PORT)
    })
})
