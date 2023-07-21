//register
const registerCtrl = async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"User registerd",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }
};
//login
const loginCtrl = async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"User login",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }
};
//Details
const userDetailsCtrl = async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"User Details!!",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }

};
//profile
const profileCtrl = async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"User Profile Details",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }

};
//upload profile photo
const uploadProfilePhotoCtrl = async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"User profile photo upload",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }

};
//upload cover photo
const uploadCoverPhotoCtrl = async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"User cover photo upload",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }

};
//update password
const updatePasswordCtrl = async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"User password update",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }

};
//update user
const updateUserCtrl = async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"User update",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }

};
//logout
const logoutCtrl = async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"User loggedout",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
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