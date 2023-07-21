//create post
const createPostCtrl = async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"post Created",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }
};
//get all post
const fetchPostCtrls = async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"posts displayed",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }

};
//get single post
const fetchSinglePostCtrl = async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"post details",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }

};
//delete post
const deletePostCtrl = async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"post deleted",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }

};
//edit post
const updatePostCtrl = async (req,res)=>{
    try {
        res.json({
            status:"Success",
            user:"post updated",
        });
    } catch (error) {
        res.json({
            status:"Failed",
            error:error,
        })
    }

};


module.exports = {
    createPostCtrl,
    fetchPostCtrls,
    fetchSinglePostCtrl,
    deletePostCtrl,
    updatePostCtrl
};