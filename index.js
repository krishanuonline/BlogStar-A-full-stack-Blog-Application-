const express = require("express");
const app = express();
//secure db
require("dotenv").config();
//db
require("./config/dbConnect");

//Middlewares
//------------------- Routes --------------
    //users route---------------
//POST/api/v1/users/register
app.post("/api/v1/users/register",async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"User registerd",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }

});

//POST/api/v1/users/login
app.post("/api/v1/users/login",async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"User login",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }

});

//GET/api/v1/users/:id
app.get("/api/v1/users/:id",async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"User Details",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }

});

//GET/api/v1/users/profile/:id
app.get("/api/v1/users/profile/:id",async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"User Profile Details",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }

});

//put/api/v1/users/profile-photo-upload/:id
app.put("/api/v1/users/profile-photo-upload/:id",async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"User profile photo upload",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }

});

//put/api/v1/users/cover-photo-upload/:id
app.put("/api/v1/users/cover-photo-upload/:id",async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"User cover photo upload",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }

});

//put/api/v1/users/update-password/:id"
app.put("/api/v1/users/update-password/:id",async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"User password update",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }

});

//get/api/v1/users/logout
app.get("/api/v1/users/logout",async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"User loggedout",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }

});

//posts route-----------------------------------
// POST/api/v1/posts
app.post("/api/v1/posts",async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"post Created",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }

});

// GET/api/v1/posts
app.get("/api/v1/posts",async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"posts displayed",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }

});

// GET/api/v1/posts/:id
app.get("/api/v1/posts/:id",async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"post details",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }

});

// DELETE/api/v1/posts/:id
app.delete("/api/v1/posts/:id",async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"post deleted",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }

});

// PUT/api/v1/posts/:id
app.put("/api/v1/posts/:id",async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"post updated",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }

});



//comments route ==================================
// POST/api/v1/comments
app.post("/api/v1/comments",async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"Comment Created",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }

});

// GET/api/v1/comments/:id
app.get("/api/v1/comments/:id",async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"Comment details",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }

});

// DELETE/api/v1/comments/:id
app.delete("/api/v1/comments/:id",async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"Comment deleted",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }

});

// PUT/api/v1/posts/:id
app.put("/api/v1/comments/:id",async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"Comment updated",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }

});



//Error Handler Middleware
//Listen Server
const PORT = process.env.PORT || 9000;
app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
});