// model import
const Post = require("../../models/post/Post");
const User = require("../../models/user/User");
const appErr = require("../../utils/appErr");

//create post
const createPostCtrl = async (req, res, next) => {
    const { title, description, catagory, user } = req.body;
    try {
        if (!title || !description || !catagory || !req.file) {
            return next(appErr("All fields are required", 400));
        }

        // find the user
        const userId = req.session.userAuth;
        const userFound = await User.findById(userId);

        // create the post
        const postCreated = await Post.create({
            title,
            description,
            catagory,
            user: userFound._id,
            image: req.file.path,
        });

        // push the post created into the array of users post
        userFound.posts.push(postCreated._id);

        // resave the user
        await userFound.save();

        res.json({
            status: "Success",
            data: "Post Created",
        });
    } catch (error) {
        next(appErr(error.message));
    }
};

//get all post
const fetchPostCtrls = async (req, res, next) => {
    try {
        const posts = await Post.find(); //fetch all
        res.json({
            status: "Success",
            data: posts,
        });
    } catch (error) {
        next(appErr(error.message));
    }

};
//get single post
const fetchSinglePostCtrl = async (req, res, next) => {
    try {
        //get the is from params
        const id = req.params.id;
        //find the post
        const post = await Post.findById(id);
        res.json({
            status: "Success",
            data: post,
        });
    } catch (error) {
        next(appErr(error.message));
    }

};
//delete post
const deletePostCtrl = async (req, res,next) => {
    try {
        //find the post
        const post = await Post.findById(req.params.id);
        //check if the post belongs to the login user
        if(post.user.toString() !== req.session.userAuth.toString()){
            next(appErr("You are not allowed to delete this post",403));
        }

        //delete post
        await Post.findByIdAndDelete(req.params.id);
        res.json({
            status: "Success",
            data: "post has been deleted successfully",
        });
    } catch (error) {
        next(appErr(error.message));
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