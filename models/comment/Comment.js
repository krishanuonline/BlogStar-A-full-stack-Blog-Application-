const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
{
    user:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"User",
    },
    message:{
        type:String,
        required:true,
    },
},
{
    timestamps:true,
}
);