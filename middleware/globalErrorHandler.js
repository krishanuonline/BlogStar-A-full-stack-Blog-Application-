const globalErrorHandler = (err, req, res, next) => {
    //status: ''''
    //message : ''''
    //stack --- 
    const stack = err.stack;
    const message = err.message;
    const status = err.status ? err.status : "failed";
    const statusCode = err.statusCode ? err.statusCode : 500; //500 -> server error
    //send response
    res.status(statusCode).json({
        status,
        message,
        stack,
    });
};
module.exports = globalErrorHandler;