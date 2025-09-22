const express =require("express");//import express from "express";
const app=express();//create an express application


app.get("/test",(req,res)=>{
    res.send("Hello form get the data")
})

// app.post("/test", (req, res) => {
//     res.send("Hello from post the data")
// });

// app.delete("/test",(req,res)=>{
//     res.send("Hello from delete the data")
// })



const server =app.listen(1000,()=>{//start the server on port 1000-->Listen the request
    console.log("Server is running on port 1000.....");
})