// require('dotenv').config({path:'./env'})       //but it ruin the consistency of our code


import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path:'./.env'
})


connectDB()
.then 
(
()=>{
   app.on((error)=>{
    console.log("Error:",error)
    throw error
   })

  app.listen(process.env.PORT || 8000,()=>{
    //CALLBACK  
    console.log(`Server listening at port: ${process.env.PORT}`)
  })
}
)
.catch(
  (err)=>{
      console.log("DATABASE CONNNECTION FAILED!",err);
  }
)










































/*
import mongoose  from "mongoose";
import { DB_NAME } from "./constants";
import express from "express"

const app=express();

;(async()=>{
    try{
      await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
      app.on("error",(error)=>{
        console.log("ERROR:",error);
        throw error
      })

    app.listen(process.env.PORT,()=>{
      console.log(`App is listening on Port: ${process.env.PORT}`)
    })

    }  
    catch(error)
    { 
       console.error("ERROR:",error)
       throw error
    }
})()
    */