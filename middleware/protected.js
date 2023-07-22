const appErr = require("../utils/appErr");
const protected = (req,res,next)=>{
    //check if user is loggedin
    if(req.session.userAuth){
        next();
    }else{
        next(appErr("Not Authorize login again",401));
    }
};

module.exports = protected;
