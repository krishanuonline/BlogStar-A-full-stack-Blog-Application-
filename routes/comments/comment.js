const express = require("express");
const commentRoutes = express.Router();

// POST/api/v1/comments
commentRoutes.post("/", async (req, res) => {
    try {
        res.json({
            status: "Success",
            user: "Comment Created",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error,
        })
    }

});

// GET/api/v1/comments/:id
commentRoutes.get("/:id", async (req, res) => {
    try {
        res.json({
            status: "Success",
            user: "Comment details",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error,
        })
    }

});

// DELETE/api/v1/comments/:id
commentRoutes.delete("/:id", async (req, res) => {
    try {
        res.json({
            status: "Success",
            user: "Comment deleted",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error,
        })
    }

});

// PUT/api/v1/posts/:id
commentRoutes.put("/:id", async (req, res) => {
    try {
        res.json({
            status: "Success",
            user: "Comment updated",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error,
        })
    }

});
module.exports = commentRoutes;