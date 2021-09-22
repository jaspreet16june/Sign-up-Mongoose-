const express = require('express');
const userModel = require('../userModel');
const { validate } = require('../userModel');

const authRouter = express.Router();

authRouter
        .route('/signup')
        .post(createUserAt,signUpUser)


authRouter
        .route('/forgetPassword')
        .get(getForgetPassword)
        .post(postForgetPassword,validateEmail)

authRouter
        .route('/login')
        .post(loginUser)

//  ---------------------------------------------
                // Functions
// ------------------------------------------------
        function createUserAt(req,res,next){
            let obj = req.body;
            let length = Object.keys[obj].length;
        
            if(length == 0){
                res.status(400).json({
                    message:"Cannot create user if req.body is empty"
                })
            }
            req.body.createUserAt = new Date().toISOString();
            next();
        }  
        
        function signUpUser(req,res){
        
            try{
                let userObj = req.body; 
                
                let user = await userModel.create(userObj);
                console.log(user);
                res.json({
                    message:"user signed up",
                    user:userObj,
                })
            }
            catch (err){
                    console.log(err);
                    res.json({
                        message:err.message,
                    })
            }
        }

        function getForgetPassword(req,res){
            res.sendFile('./public/forgetPassword.html',{root:__dirname});
        }
        
        function postForgetPassword(req,res,next){
            let data=req.body;
            console.log('data',data);
            //check if email id is correct- validate
            next();
            //check if user exists in db
            // res.json({
            //     message:"data received",
            //     data:data.email
            // })
        };
        
        function validateEmail(req,res){
            console.log('in validateEmail function');
            console.log(req.body);
            //hw to check if email is correct or not -> @ , .
            //indexOf
             res.json({
                    message:"data received",
                    data:req.body
                });
        }


        function loginUser(req,req){
            try{
                if(req.body.email){
                    let user = await userModel.findOne({email:req.body.email});
                    if(user){
                        if(req.body.password == user.password){
                           //1234 -> uid
                            res.cookie('login','1234',{httpOnly:true})

                            return res.json({
                                message:"user is logged-in"
                            })
                        }else{
                            return res.json({
                                message:"email or password is wrong"
                            })
                        }
                    }
                    else{
                        return res.json({
                            message:"email or password is wrong"
                        })
                    }

                }
                else{
                    return res.json({
                        message:"user is not present"
                    })
                }
            }
            catch(err){
                return res.json({
                    message:err.message
                })

            }
        }

module.exports = authRouter;