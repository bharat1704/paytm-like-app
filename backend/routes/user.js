const express = require("express");
const router = express.Router()
const zod = require("zod");
const User = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");

const signupSchema = zod.object({
    username:zod.string().email,
    password:zod.string(),
    firstname:zod.string(),
    lastname:zod.string(),
})

const signinSchema = zod.object({
    username:zod.string().email,
    password:zod.string()
}



 router.post("/signup", async(req,res)=>{

    const body = req.body;
    const success = signupSchema.safeParse(req.body)
    if(!success)
        {
        return res.status(411).json({msg: "invalid type"})
        }

        const exitingUser = await User.findOne({
            username:req.body.username,
            password: req.body.password
        });
        if(user){
            res.status(411).json({msg: "user already exist"})       
            }
        const user = await User.create({
                username: req.body.username,
                password: req.body.password,
                firstname: req.body.firstname,
                lastname: req.body.lastname
            })
            const user_Id = user._id;
            const token = jwt.sign({ user_Id },JWT_SECRET)
            res.json({ 
                msg:"user created", 
                token:token }) 

        })

router.post("/signin", async(req,res)=>{
    const {username, password} = req.body;
    const success = signinSchema.safeParse(req.body);
    if(!success){
        res.status(411).json({msg:"incorrect format"})
    }
    const userCheck =  await User.findOne({
        username:req.body.username,
        password:req.body.password
    })
    if(!userCheck){
        res.json({msg:"user not found"})
    }

    const user_Id = user._id;
    const token = jwt.sign({ user_Id },JWT_SECRET)
    res.json({ 
        msg:"user authenticated", 
        token:token })

})





module.exports = router;