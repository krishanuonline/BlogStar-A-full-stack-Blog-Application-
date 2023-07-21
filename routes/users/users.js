const express = require("express");
const userRoutes = express.Router();
const {registerCtrl,loginCtrl,userDetailsCtrl,profileCtrl,uploadProfilePhotoCtrl,uploadCoverPhotoCtrl,updatePasswordCtrl,updateUserCtrl,logoutCtrl} = require("../../controllers/users/users");

//register
userRoutes.post("/register",registerCtrl);
//login
userRoutes.post("/login",loginCtrl);

//get user details
userRoutes.get("/:id",userDetailsCtrl);
//Get user profile details
userRoutes.get("/profile/:id",profileCtrl);
//user profile-photo-upload
userRoutes.put("/profile-photo-upload/:id",uploadProfilePhotoCtrl);
//user cover-photo-upload
userRoutes.put("/cover-photo-upload/:id",uploadCoverPhotoCtrl);
//user password update/modified
userRoutes.put("/update-password/:id",updatePasswordCtrl);
//user update/modified
userRoutes.put("/update/:id",updateUserCtrl); 
//logout user
userRoutes.get("/logout",logoutCtrl);

module.exports = userRoutes;
