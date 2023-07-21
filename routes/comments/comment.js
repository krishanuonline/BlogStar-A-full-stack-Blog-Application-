const express = require("express");
const commentRoutes = express.Router();
const {createCommentCtrl,commentDetailsCtrl,deleteCommentCtrl,updateCommentCtrl} = require("../../controllers/comments/comments");

// crete
commentRoutes.post("/",createCommentCtrl);

// GET/api/v1/comments/:id
commentRoutes.get("/:id",commentDetailsCtrl);

// DELETE/api/v1/comments/:id
commentRoutes.delete("/:id",deleteCommentCtrl);

// PUT/api/v1/posts/:id
commentRoutes.put("/:id",updateCommentCtrl);
module.exports = commentRoutes;