const express =require("express");//import express from "express";
const app=express();//create an express application
const UserModel =require("./models/user")

app.post("/signup",async (req,res)=>{
//Create a new instance of the user model
const user =new UserModel({
    FirstName:"jeeva",
    LastName:"Kumar",
    Email:"Jeevajeeva40348@gmail.com",
    Password:"Jeevanaz"
}
)
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
