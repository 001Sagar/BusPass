const express = require('express');
const app = express();
const port =8000;

// Require MongoDB
const mongoose = require('mongoose');
const db = require('./config/databse')

//Body Parser
app.use(express.urlencoded({extended:true})),
app.use(express.json());

// Require Jsonwebtoken
const jwt = require('jsonwebtoken');
const passport = require('passport-jwt');
const passportjwt = require('./config/jsonwebtoken');

// reuire API Path
const auth = require('./routes/auth')

// Authentication API Path
app.use('/api',auth);

app.get('/', function(req,res){
    res.send('Yeah server is run')
})

app.listen(port,function(err){
    if(err){
        console.log(err);
    }
    console.log('Server is run on port::',port);
})