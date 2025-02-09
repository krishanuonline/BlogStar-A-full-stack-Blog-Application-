const express = require("express");
const postRoutes = express.Router();
const multer = require("multer");
const { createPostCtrl, fetchPostCtrls, fetchSinglePostCtrl, deletePostCtrl, updatePostCtrl } = require("../../controllers/posts/posts");
const protected = require("../../middleware/protected");
const storage = require("../../config/cloudinary");
//instance of multer
const upload = multer({
    storage,
});

//forms
postRoutes.get("/get-post-form",(req,res)=>{
    res.render("posts/addPost.ejs",{error:""});
})



// Create post
postRoutes.post("/", protected, upload.single("file"), createPostCtrl);
// GET all posts
postRoutes.get("/", fetchPostCtrls);
// get specific post 
postRoutes.get("/:id", fetchSinglePostCtrl);
// DELETE post
postRoutes.delete("/:id",protected, deletePostCtrl);
// edit/modify post
postRoutes.put("/:id",protected,upload.single("file"), updatePostCtrl);

module.exports = postRoutes;