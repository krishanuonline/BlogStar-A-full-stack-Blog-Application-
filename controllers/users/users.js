const bcrypt = require("bcryptjs"); //for password hashing
const User = require("../../models/user/User");
const appErr = require("../../utils/appErr");
//register
const registerCtrl = async (req, res, next) => {
    const { fullName, email, password } = req.body;
    //if empty submition
    if (!fullName || !email || !password) {
        // return next(appErr("All filds are required", 400));
        return res.render("users/register", {
            error: "All field are required",
        });
    }
    try {
        //Check if user exist by email id
        const userFound = await User.findOne({ email });
        //if taken then throw error
        if (userFound) {
            return res.render("users/register", {
                error: "User already exists",
            });
        }
        //if not
        //hash user password
        const salt = await bcrypt.genSalt(10); //10 is ideal encryption
        const passwordHashed = await bcrypt.hash(password, salt);

        //register user
        const user = await User.create({
            email,
            fullName,
            password: passwordHashed,
        });
        // console.log(user);
        req.session.userAuth = user._id;
        //redirect
        res.redirect("/api/v1/users/profile");
    } catch (error) {
        res.json({
            status: "Failed",
            error: error,
        })
    }
};
//login
const loginCtrl = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.render("users/login", {
            error: "All field are required",
        });
    }
    try {
        //check email exist or not
        const userFound = await User.findOne({ email }); //fetch from db
        if (!userFound) {
            return res.render("users/login", {
                error: "Invalid Credentials",
            });
        }
        //verify password
        const isPasswordValid = await bcrypt.compare(password, userFound.password);
        if (!isPasswordValid) {
            return res.render("users/login", {
                error: "Invalid Credentials",
            });
        }
        //save the user into session
        req.session.userAuth = userFound._id;
        res.redirect("/api/v1/users/profile");
    } catch (error) {
        res.json({
            status: "Failed",
            error: error,
        })
    }
};
//Details
const userDetailsCtrl = async (req, res) => {
    try {
        //get userId from params
        const userId = req.params.id;
        //find the user
        const user = await User.findById(userId);
        res.render("users/updateUser", {
            user,
            error:"",
        });
    } catch (error) {
        res.render("users/updateUser", {
           error: error.message,
        });
    }

};
//profile
const profileCtrl = async (req, res) => {
    try {
        //get the login user
        const userId = req.session.userAuth; //id
        //find the user
        const user = await User.findById(userId).populate("posts").populate("comments");

        res.render("users/profile", { user })

    } catch (error) {
        res.json({
            status: "Failed",
            error: error,
        })
    }

};
//upload profile photo
const uploadProfilePhotoCtrl = async (req, res, next) => {
    try {
        //check if file exist
        if (!req.file) {
            return res.render("users/uploadProfilePhoto", {
                error: "Please upload image!"
            });
        }

        //find the user to be updated
        const userId = req.session.userAuth;
        const userFound = await User.findById(userId);
        //check user found
        if (!userFound) {
            return res.render("users/uploadProfilePhoto", {
                error: "User not found!"
            });
        }
        //update profile photo
        await User.findByIdAndUpdate(userId, {
            profileImage: req.file.path,
        }, { new: true, })
        //redirect
        res.redirect("/api/v1/users/profile");
    } catch (error) {
        return res.render("users/profile", {
            error: error.message,
        });

    }

};
//upload cover photo
const uploadCoverPhotoCtrl = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.render("users/uploadProfilePhoto", {
                error: "Please upload image!"
            });
        }
        //find the user to be updated
        const userId = req.session.userAuth;
        const userFound = await User.findById(userId);
        //check user found
        if (!userFound) {
            return res.render("users/uploadProfilePhoto", {
                error: "User not found!"
            });
        }
        //update cover photo
        await User.findByIdAndUpdate(userId, {
            coverImage: req.file.path,
        }, { new: true, })
        //redirect
        res.redirect("/api/v1/users/profile");
    } catch (error) {
        return res.render("users/profile", {
            error: error.message,
        });
    }

};
//update password
const updatePasswordCtrl = async (req, res, next) => {
    const { password } = req.body;
    //users/update-password
    if (!password) {
        return res.render("users/updatePassword", {
            error: "Please enter your new password",
        });
    }
    try {
        //check if the user updating passwrd
        if (password) {
            const salt = await bcrypt.genSalt(10);
            const passwordHashed = await bcrypt.hash(password, salt);
            //update user
            await User.findByIdAndUpdate(req.session.userAuth, {
                password: passwordHashed,
            }, { new: true });
            //redirect
        res.redirect("/api/v1/users/profile");
        }
    } catch (error) {
        return res.render("users/update-password", {
            error: error.message,
        });
    }

};
//update user
const updateUserCtrl = async (req, res, next) => {
    const { email, fullName } = req.body;
    try {
        if (!fullName || !email) {
            return res.render("users/updateUser", {
                error: "Please provide credentials",
                user: "",
            });
        }

        //check email is taken or not
        // if (email) {
        //     const emailTaken = await User.findOne({ email });
        //     console.log(emailTaken);
        //     if (emailTaken) {
        //         return res.render("users/updateUser", {
        //             error: "Email already taken!",
        //             user: "",
        //         });
        //     }
        // }
        //update the user (if email not taken)
        const response = await User.findByIdAndUpdate(req.session.userAuth, {
            fullName, email
        }, { new: true, });
        res.redirect("/api/v1/users/profile");


    } catch (error) {
        return res.render("users/updateUser", {
            error: error.message,
            user: "",

        });
    }
};
//logout
const logoutCtrl = async (req, res) => {
    //destroy session
    req.session.destroy(() => {
        res.redirect("/api/v1/users/login");
    });

};
module.exports = {
    registerCtrl,
    loginCtrl,
    userDetailsCtrl,
    profileCtrl,
    uploadProfilePhotoCtrl,
    uploadCoverPhotoCtrl,
    updatePasswordCtrl,
    updateUserCtrl,
    logoutCtrl

}; 