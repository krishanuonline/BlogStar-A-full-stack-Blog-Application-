// model import
const Post = require("../../models/post/Post");
const User = require("../../models/user/User");
const appErr = require("../../utils/appErr");

//create post
const createPostCtrl = async (req, res, next) => {
    const { title, description, catagory, user } = req.body;
    try {
        if (!title || !description || !catagory || !req.file) {
            return res.render("posts/addPost",{error:"All fields are required"});
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

        res.redirect("/");
    } catch (error) {
        return res.render("posts/addPost",{error:error.message});
    }
};

//get all post
const fetchPostCtrls = async (req, res, next) => {
    try {
        //fetch all
        const posts = await Post.find().populate("comments").populate("user"); 
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
        const post = await Post.findById(id).populate("comments");
        res.json({
            status: "Success",
            data: post,
        });
    } catch (error) {
        next(appErr(error.message));
    }

};
//delete post
const deletePostCtrl = async (req, res, next) => {
    try {
        //find the post
        const post = await Post.findById(req.params.id);
        //check if the post belongs to the login user
        if (post.user.toString() !== req.session.userAuth.toString()) {
            next(appErr("You are not allowed to delete this post", 403));
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
const updatePostCtrl = async (req, res, next) => {
    const { title, description, catagory } = req.body;
    try {
        // find the post
        const post = await Post.findById(req.params.id);

        // check if the post belongs to the login user
        if (post.user.toString() !== req.session.userAuth.toString()) {
            next(appErr("You are not allowed to edit this post", 403));
        }

        // edit/update post
        let updateData = {
            title,
            description,
            catagory,
        };

        // Check if the image file is provided in the request
        if (req.file) {
            updateData.image = req.file.path;
        }

        const postUpdated = await Post.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true }
        );

        res.json({
            status: "Success",
            data: postUpdated,
        });
    } catch (error) {
        next(appErr(error.message));
    }
};


module.exports = {
    createPostCtrl,
    fetchPostCtrls,
    fetchSinglePostCtrl,
    deletePostCtrl,
    updatePostCtrl
};