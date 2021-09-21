const express = require('express');
const userModel = require('./model/userModel');
const app = express();

app.listen('2000',function(){
    console.log('App is listening to the port 2000')
})

app.use(express.json());
app.use(express.static('public'));

const userRouter = require('./model/routers/userRouter')
const authRouter = require('../model/routers/authRouter')

app.use('/auth',authRouter);

