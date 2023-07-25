const express = require("express");
const commentRoutes = express.Router();
const {createCommentCtrl,commentDetailsCtrl,deleteCommentCtrl,updateCommentCtrl} = require("../../controllers/comments/comments");
const protected = require("../../middleware/protected");

// crete
commentRoutes.post("/:id",protected,createCommentCtrl);

// GET/api/v1/comments/:id
commentRoutes.get("/:id",commentDetailsCtrl);

// DELETE/api/v1/comments/:id
commentRoutes.delete("/:id",protected,deleteCommentCtrl);

// PUT/api/v1/posts/:id
commentRoutes.put("/:id",protected,updateCommentCtrl);
module.exports = commentRoutes;