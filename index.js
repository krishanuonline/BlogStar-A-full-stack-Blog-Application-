require("dotenv").config(); //environment var[db]
const express = require("express");
const app = express();
const userRoutes = require("./routes/users/users");
const postRoutes = require("./routes/posts/posts");
const commentRoutes = require("./routes/comments/comment");
require("./config/dbConnect"); //db
// ---------------- Middlewares -----------------------
app.use("/api/v1/users",userRoutes); // 1.userRoutes
app.use("/api/v1/posts",postRoutes); // 2.postRoutes
app.use("/api/v1/comments",commentRoutes); // 3.commentRoutes


//Error Handler Middleware
//Listen Server
const PORT = process.env.PORT || 9000;
app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
});