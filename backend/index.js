const express = require("express");
const app = express();
app.use(express.json())
const {User} = require("./db")

app.post("/signup", async(req,res)=>{
    const {username, password} = req.body;
    console.log(username);
    await User.create({
      username,
      password  
    })
    res.json({msg:"your account created"})

})

app.get("/signin", (req,res)=>{
    res.send({name:"bharat"})
})

app.put("/update", (req,res)=>{
    res.send({name:"bharat"})
})

app.listen(3000);