const express = require('express');
//const router = express.Router();
const app = express();
const connectDB = require('./configdb');
const cq  = require('./modeldb');
const dotenv = require('dotenv');
const path=require('path');
dotenv.config({path:'.env'});

connectDB();

app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/api/v1/contactquery',(req,res)=>{
    const cqs= cq.find()
    .then(data =>{
        res.status(200).send({
            "message": data 
        });    
    })
    .catch(err =>{
        res.status(400).send(err.message);
        console.log(err)
    })
    
})

app.post('/api/v1/contactquery', (req,res)=>{
    
    const cqObj = new cq(
        req.body
    );
    cqObj.save()
    .then(data=>{
        res.status(201).send({
            "message": data
        })    
    })
    .catch(err =>{
        res.status(400).send(err)
    })
})

module.exports = app;