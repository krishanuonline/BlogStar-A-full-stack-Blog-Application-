const mongoose = require("mongoose");
// title  | description  | catagory  | image
const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        catagory: {
            type: String,
            required: true,
            enum: ["technology", "management", "finance", "medical", "others"],
        },
        image: {
            type: String,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment",
            }
        ]
    },
    {
        timestamps: true,
    }
);

//Compile schema to form model
const Post = mongoose.model("Post", postSchema);

module.exports = Post;