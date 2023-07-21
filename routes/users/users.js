const express = require("express");
const userRoutes = express.Router();

//register
userRoutes.post("/register",async (req,res)=>{
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

//login
userRoutes.post("/login",async (req,res)=>{
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

//get user details
userRoutes.get("/:id",async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"User Details!!",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }

});
//Get user profile details
userRoutes.get("/profile/:id",async (req,res)=>{
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
//user profile-photo-upload
userRoutes.put("/profile-photo-upload/:id",async (req,res)=>{
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
//user cover-photo-upload
userRoutes.put("/cover-photo-upload/:id",async (req,res)=>{
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
//user password update/modified
userRoutes.put("/update-password/:id",async (req,res)=>{
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
//logout user
userRoutes.get("/logout",async (req,res)=>{
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

module.exports = userRoutes;
