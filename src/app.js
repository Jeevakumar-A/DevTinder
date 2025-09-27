const {ConnectDB }=require("./config/database");//import mongoose from "./config/database.js"
const express =require("express");//import express from "express";
const app=express();//create an express application
const UserModel =require("./models/user");
const {ValidateData} =require("./utils/validation")
const bcrypt =require("bcrypt")

app.use(express.json())
//use()-->Handles the all routes-->so we put the express.json() inside it
//express.json is the middleware function-->Hanles the incomming request with JSON payloads from the postman/react frontend


//Get the data in particular data from the database:-
app.get("/getelement",async (req,res)=>{
    const user =req.body.Email;
    try{
        const UserEmail=await UserModel.find({Email:user})
        if(UserEmail.length===0){
            res.status(404).send("User not Found")
        }
        else{
            res.send(UserEmail)

    
        }
    }
    catch(err){
        console.err(err);
        res.status.send("Something went wrong");
    }
})

// Get all data from the database
app.get("/getelement",async (req,res)=>{
    const user =req.body.Email;
    try{
        const UserEmail=await UserModel.findOne({Email:user})
        if(UserEmail.length===0){
            res.status(404).send("User not Found")
        }
        else{
            res.send(UserEmail)
        }
    }
    catch(err){
        console.log(err);
        res.status.send("Something went wrong");
    }
})

//Delete the data on the DB help of API call
app.delete("/delete",async (req,res)=>{
    const user =req.body._id;
    try{
        const UserEmail=await UserModel.findByIdAndDelete({_id:user})
            res.send("User data deleted successfully")

    

    }
    catch(err){
        console.log(err);
        res.status(404).send("Something went wrong");
    }
})

//Update on the DB with help of API call
app.patch("/update/:_id",async (req,res)=>{
    const userID =req.params._id;
    const user =req.body;
    try{
        const allowable_updates=["Password","Gender","skills","photo","Age"]
        const isallowed =Object.keys(user).every((k)=>allowable_updates.includes(k));
        if(!isallowed){
            res.status(400).send("Update Failed");
        }
        if(user?.skills.length>10){
            res.status(400).send("10 skills only limited");
        }
        await UserModel.findByIdAndUpdate({_id:userID},user,{runValidators:true})
        res.send("User data updated successfully")
    }
    catch(err){
        console.log(err);
        res.status(404).send("Something went wrong");
    }
})
app.post("/signup",async (req,res)=>{
    try{
        const{FirstName,LastName,Email,Password}=req.body;
        //Validation the data
        ValidateData(req);

        //Encrypting the password
        const PasswordEncrypt=await bcrypt.hash(Password,10);

    // console.log(req.body)//it from the postman api-->request to the body then the body data are JSON will send by api
    //Create a new instance of the user model
    const user =new UserModel({FirstName,LastName,Email,Password:PasswordEncrypt});
    await user.save();
    res.send("User data added successfully")

    }

catch(err){
    res.status(400).send("Error:"+err.message);
    
}
})
//Login
app.post("/Login",async (req,res)=>{
    try{
        const{Email,Password}=req.body;
        const user=await UserModel.findOne({Email:Email})
        if(!user){
            throw new Error("Invalid Email Address");
        }
        const PasswordHash=await bcrypt.compare(Password,user.Password)
        if(PasswordHash){
            res.send("Login successfully..!!!")
        }
        else{
            res.send("Login Failed.....")
        }

    }
    catch(err){
    res.status(400).send("Error:"+err.message);
    
}
})


ConnectDB().then(()=>{
    console.log("Database connected successfully");
    const server =app.listen(1000,()=>{//start the server on port 1000-->Listen the request
    console.log("Server is running on port 1000.....");
})
}).catch((err)=>{
    console.log("Database connection failed",err);
})

