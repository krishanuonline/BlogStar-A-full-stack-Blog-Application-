const bcrypt = require("bcryptjs"); //for password hashing
const User = require("../../models/user/User");
const appErr = require("../../utils/appErr");
//register
const registerCtrl = async (req, res, next) => {
    const { fullName, email, password } = req.body;
    //if empty submition
    if (!fullName || !email || !password) {
        return next(appErr("All filds are required", 400));
    }
    try {
        //Check if user exist by email id
        const userFound = await User.findOne({ email });
        //if taken then throw error
        if (userFound) {
            return next(appErr("User already exists", 403));
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
        res.json({
            status: "Success",
            data: user,
        });
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
        return next(appErr("All filds are required", 400));
    }
    try {
        //check email exist or not
        const userFound = await User.findOne({ email }); //fetch from db
        if (!userFound) {
            return next(appErr("User Not found", 404));
        }
        //verify password
        const isPasswordValid = await bcrypt.compare(password, userFound.password);
        if (!isPasswordValid) {
            return next(appErr("Wrong credential", 401));
        }
        res.json({
            status: "Success",
            user: userFound,
        });
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
        res.json({
            status: "Success",
            user: "User Details!!",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error,
        })
    }

};
//profile
const profileCtrl = async (req, res) => {
    try {
        res.json({
            status: "Success",
            user: "User Profile Details",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error,
        })
    }

};
//upload profile photo
const uploadProfilePhotoCtrl = async (req, res) => {
    try {
        res.json({
            status: "Success",
            user: "User profile photo upload",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error,
        })
    }

};
//upload cover photo
const uploadCoverPhotoCtrl = async (req, res) => {
    try {
        res.json({
            status: "Success",
            user: "User cover photo upload",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error,
        })
    }

};
//update password
const updatePasswordCtrl = async (req, res) => {
    try {
        res.json({
            status: "Success",
            user: "User password update",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error,
        })
    }

};
//update user
const updateUserCtrl = async (req, res) => {
    try {
        res.json({
            status: "Success",
            user: "User update",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error,
        })
    }

};
//logout
const logoutCtrl = async (req, res) => {
    try {
        res.json({
            status: "Success",
            user: "User loggedout",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error,
        })
    }

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