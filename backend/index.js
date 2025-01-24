const express = require("express");

const cors = require("cors");
const secretKey = require("jsonwebtoken")



const app = express();
app.use(cors())
app.use(express.json())


app.use("api/v1", mainRouter);// our goat is have api/v1/user, api/v1/transaction api/v1/balance

app.listen(3000);