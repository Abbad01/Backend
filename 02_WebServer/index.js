import express from 'express';
const server=express();

server.get('/',(req,res)=>{
    //res.send("hello");
    //res.sendFile()
    res.json()
    
})

server.listen(8080,()=>{
    console.log("server has started");
})