const express = require('express');

const userRouter =express.Router();
const userModel=require('../userModel');
app.use('/user',userRouter);

userRouter
        .route('/')
        .get(getUser)
        .post(createUser)
        .update(updateUser)
        .delete(deleteUser)

userRouter
        .route('/:id')
        .get(getUserById);
                   
async function getUser(req,res){
            console.log('getUser called');
            res.json(user);  
        }
        
        //post request
        // client-> server 
        //create
        // app.post('/user',createUser);
    function createUser(req,res){
            user=req.body;
            // console.log(req.body);
            res.send('data has been added succesfully');
        }
        //update
        // app.patch('/user',updateUser);
        function updateUser (req,res){
            let obj=req.body;
            for(let key in obj){
                user[key]=obj[key];
            }
            res.json(user);
        };
        //delete 
        // app.delete('/user',deleteUser);
        function deleteUser(req,res){
            user={};
            res.json(user);
            // res.send('ussr has been deleted');
        }
        //param route
        // app.get('/user/:id',getUserById);
        
        function getUserById(req,res){
            console.log(req.params);
            res.json(req.params.id);
        }
        // app.use((req,res,next)=>{
        //     //do some work
        //     console.log('i am a middleware 2nd time');
        //     next();
        // });
        
        module.exports=userRouter;