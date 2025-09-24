const {ConnectDB }=require("./config/database");//import mongoose from "./config/database.js"
const express =require("express");//import express from "express";
const app=express();//create an express application
const UserModel =require("./models/user")

app.use(express.json())
//use()-->Handles the all routes-->so we put the express.json() inside it
//express.json is the middleware function-->Hanles the incomming request with JSON payloads from the postman/react frontend
app.post("/signup",async (req,res)=>{
// console.log(req.body)//it from the postman api-->request to the body then the body data are JSON will send by api
//Create a new instance of the user model
const user =new UserModel(req.body);
await user.save();
res.send("User data added successfully")
})


ConnectDB().then(()=>{
    console.log("Database connected successfully");
    const server =app.listen(1000,()=>{//start the server on port 1000-->Listen the request
    console.log("Server is running on port 1000.....");
})
}).catch((err)=>{
    console.log("Database connection failed",err);
})

