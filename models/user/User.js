const mongoose = require("mongoose");

//Schema
const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
        },
        profileImage: {
            type: String,
        },
        coverImage: {
            type: String,
        },
        posts: [{ type: mongoose.Schema.Types.ObjectId, red: "Post" }],
        comments: [{ type: mongoose.Schema.Types.ObjectId, red: "Comment" }],

    },
    {
        timestamps: true,
    }
);

//Compile the schema to form a model
const User = mongoose.model("User", userSchema);

module.exports = User;