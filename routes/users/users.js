const express = require("express");
const userRoutes = express.Router();
const {registerCtrl,loginCtrl,userDetailsCtrl,profileCtrl,uploadProfilePhotoCtrl,uploadCoverPhotoCtrl,updatePasswordCtrl,updateUserCtrl,logoutCtrl} = require("../../controllers/users/users");
const protected = require("../../middleware/protected");//middleware
const multer = require("multer");
const storage = require("../../config/cloudinary"); 

//instance of multer / middleware
const upload = multer({storage});
//--- Rendering Forms ---
//login
userRoutes.get("/login",(req,res)=>{
    res.render("./../views/users/login.ejs",{
        error:""
    });
});
//register
userRoutes.get("/register",(req,res)=>{
    res.render("./../views/users/register.ejs",{
        error:""
    });
});
//profile
userRoutes.get("/profile",(req,res)=>{
    res.render("./../views/users/profile.ejs");
});
//upload profile photo
userRoutes.get("/upload-profile-photo-form",(req,res)=>{
    res.render("./../views/users/uploadProfilePhoto.ejs");
});
//upload cover photo
userRoutes.get("/upload-cover-photo-form",(req,res)=>{
    res.render("./../views/users/uploadCoverPhoto.ejs");
});
//Update user
userRoutes.get("/update-user-form",(req,res)=>{
    res.render("./../views/users/updateUser.ejs");
});


//register
userRoutes.post("/register",registerCtrl);
//login
userRoutes.post("/login",loginCtrl);
//Get user profile details
userRoutes.get("/profile",protected,profileCtrl);
//user profile-photo-upload
userRoutes.put("/profile-photo-upload/",protected,upload.single("profile"),uploadProfilePhotoCtrl);
//user cover-photo-upload
userRoutes.put("/cover-photo-upload/",protected,upload.single("cover"),uploadCoverPhotoCtrl);
//user password update/modified
userRoutes.put("/update-password/:id",updatePasswordCtrl);
//user update/modified
userRoutes.put("/update/:id",updateUserCtrl); 
//get user details
userRoutes.get("/:id",userDetailsCtrl);
//logout user
userRoutes.get("/logout",logoutCtrl);

module.exports = userRoutes;
