const express =require("express");//import express from "express";
const app=express();//create an express application

app.use("/test",(req,res)=>{
    res.send("Hello form node.js app")
})
app.use("/test2",(req,res)=>{
    res.send("Hello form node.js server test 2")
})
app.use("/test3",(req,res)=>{
    res.send("Hello form node.js server test 3")
})
app.use("/test4",(req,res)=>{
    res.send("Hello form node.js server test 4")
})
const server =app.listen(1000,()=>{//start the server on port 1000-->Listen the request
    console.log("server is running on port 1000.....");
})