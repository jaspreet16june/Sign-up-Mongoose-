const express = require('express');

const userRouter =express.Router();
const userModel=require('../userModel');
app.use('/user',userRouter);

userRouter
        .route('/')
        .get(protectRoute,getUser)
        .post(createUser)
        .update(updateUser)
        .delete(deleteUser)

userRouter
        .route('/:id')
        .get(getUserById);
                   
async function getUser(req,res){

        try{
            console.log("getUser called");

            let user = await userModel.find();

            if(user){
                return res.json(user);
            }else{
                return res.json({
                    message:"user not found"
                })
            }
        }
        catch(err){
            return res.json({
                message: err.message,
            })
        } 
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
        
        //middelware function
        // function protectRoute(req,res,next){
        //     try{

                

        //    }
        //    catch{

        //    }
        // }
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