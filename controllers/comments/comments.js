const Post = require("../../models/post/Post"); // Post model
const User = require("../../models/user/User"); //User model
const Comment = require("../../models/comment/Comment"); //Comment model
const appErr = require("../../utils/appErr");

//create comment
const createCommentCtrl = async (req, res, next) => {
    const { message } = req.body;
    try {
        //find the post
        const post = await Post.findById(req.params.id);
        //create the comment
        const comment = await Comment.create({
            user: req.session.userAuth,
            message,
        });
        //push the comment to the post
        post.comments.push(comment._id);
        //find the user
        const user = await User.findById(req.session.userAuth);
        //push the comment into user
        user.comments.push(comment._id);
        //disable validation
        //save
        await post.save({
            validateBeforeSave: false
        });
        await user.save({
            validateBeforeSave: false
        });
        res.json({
            status: "Success",
            data: comment,
        });
    } catch (error) {
        next(appErr(error.message));
    }

};
//single comment
const commentDetailsCtrl = async (req, res) => {
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

};
//delete comment
const deleteCommentCtrl = async (req, res, next) => {
    try {
        //find the comment
        const comment = await Comment.findById(req.params.id);
        //check if the comment belongs to the login user
        if (comment.user.toString() !== req.session.userAuth.toString()) {
            return next(appErr("You are not allowed to delete this comment", 403));
        }

        //delete comment
        await Comment.findByIdAndDelete(req.params.id);
        res.json({
            status: "Success",
            data: "comment has been deleted successfully",
        });
    } catch (error) {
        next(appErr(error.message));
    }

};
//update
const updateCommentCtrl = async (req, res, next) => {
    try {
        // find the comment
        const comment = await Comment.findById(req.params.id);
        if(!comment){
            return next(appErr("Comment not found",404));
        }
        // check if the post belongs to the login user
        if (comment.user.toString() !== req.session.userAuth.toString()) {
            next(appErr("You are not allowed to edit this comment", 403));
        }

        const commentUpdated = await Comment.findByIdAndUpdate(
            req.params.id,
            {
                message: req.body.message,
            },
            {
                new: true,
            }
        );

        res.json({
            status: "Success",
            data: commentUpdated,
        });
    } catch (error) {
        next(appErr(error.message));
       
    }
};


module.exports = {
    createCommentCtrl,
    commentDetailsCtrl,
    deleteCommentCtrl,
    updateCommentCtrl
};