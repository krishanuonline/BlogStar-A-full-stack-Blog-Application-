require("dotenv").config(); //environment var[db]
const express = require("express");
const app = express();
const session = require("express-session");
const mongoStore = require("connect-mongo");
const userRoutes = require("./routes/users/users");
const postRoutes = require("./routes/posts/posts");
const commentRoutes = require("./routes/comments/comment");
require("./config/dbConnect"); //db
const globalErrorHandler = require("./middleware/globalErrorHandler");
// ---------------- Middlewares -----------------------
app.use(express.json()); //pass incomming data
//session configration
app.use(session({
    secret:process.env.SESSION_KEY,
    resave:false,
    saveUninitialized:true,
    store: new mongoStore({
        mongoUrl:process.env.MONGO_URL, //store sessin in db
        ttl:24*60*60 // expire 1day
    }),
}));
app.use("/api/v1/users",userRoutes); // 1.userRoutes
app.use("/api/v1/posts",postRoutes); // 2.postRoutes
app.use("/api/v1/comments",commentRoutes); // 3.commentRoutes

//Error Handler Middleware
app.use(globalErrorHandler);
//Listen Server
const PORT = process.env.PORT || 9000;
app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
});