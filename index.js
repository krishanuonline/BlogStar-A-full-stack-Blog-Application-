const express = require("express");
const app = express();
//secure db
require("dotenv").config();
//db
require("./config/dbConnect");

//Middlewares
//Routes
//Error Handler Middleware
//Listen Server
const PORT = process.env.PORT || 9000;
app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
});