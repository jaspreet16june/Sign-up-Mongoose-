const express = require('express');
const app = express();

app.listen('2000',function(){
    console.log('App is listening to the port 2000')
})

app.use(express.json());
app.use(express.static('public'));

const userRouter = express.Router();
const authRouter = express.Router();

app.use('/auth',authRouter);

authRouter
        .route('/signup')
        .post(createUserAt,signUpUser)

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


