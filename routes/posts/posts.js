const express = require("express");
const postRoutes = express.Router();
const {createPostCtrl,fetchPostCtrls,fetchSinglePostCtrl,deletePostCtrl,updatePostCtrl} = require("../../controllers/posts/posts");
// Create post
postRoutes.post("/",createPostCtrl);
// GET all posts
postRoutes.get("/",fetchPostCtrls);
// get specific post 
postRoutes.get("/:id",fetchSinglePostCtrl);
// DELETE post
postRoutes.delete("/:id",deletePostCtrl);
// edit/modify post
postRoutes.put("/:id",updatePostCtrl);

module.exports = postRoutes;