// model import
const Post = require("../../models/post/Post");
const User = require("../../models/user/User");
const appErr = require("../../utils/appErr");

//create post
const createPostCtrl = async (req, res, next) => {
    const { title, description, catagory, image, user } = req.body;
    try {
        if (!title || !description || !catagory || req.file) {
            return next(appErr("All fields are required", 400));
        }
        //find the user
        const userId = req.session.userAuth;
        const userFound = await User.findById(userId);
        //create the post
        const postCreated = await Post.create({
            title,
            description,
            catagory,
            user: userFound._id,
            image: req.file.path,
        });
        //push the post created into the array of users post
        userFound.posts.push(postCreated._id);
        //resave the user
        await userFound.save()
        res.json({
            status: "Success",
            data: "post Created",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error,
        })
    }
};
//get all post
const fetchPostCtrls = async (req, res) => {
    try {
        res.json({
            status: "Success",
            user: "posts displayed",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error,
        })
    }

};
//get single post
const fetchSinglePostCtrl = async (req, res) => {
    try {
        res.json({
            status: "Success",
            user: "post details",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error,
        })
    }

};
//delete post
const deletePostCtrl = async (req, res) => {
    try {
        res.json({
            status: "Success",
            user: "post deleted",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error,
        })
    }

};
//edit post
const updatePostCtrl = async (req, res) => {
    try {
        res.json({
            status: "Success",
            user: "post updated",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error,
        })
    }

};


module.exports = {
    createPostCtrl,
    fetchPostCtrls,
    fetchSinglePostCtrl,
    deletePostCtrl,
    updatePostCtrl
};