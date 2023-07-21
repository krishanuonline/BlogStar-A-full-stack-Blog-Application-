const express = require("express");
const postRoutes = express.Router();

// Create post
postRoutes.post("/",async (req,res)=>{
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

// GET all posts
postRoutes.get("/",async (req,res)=>{
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

// get specific post 
postRoutes.get("/:id",async (req,res)=>{
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

// DELETE post
postRoutes.delete("/:id",async (req,res)=>{
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

// edit/modify post
postRoutes.put("/:id",async (req,res)=>{
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

module.exports = postRoutes;