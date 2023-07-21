//create comment
const createCommentCtrl = async (req, res) => {
    try {
        res.json({
            status: "Success",
            user: "Comment Created",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error,
        })
    }

};
//single comment
const commentDetailsCtrl = async (req, res) => {
    try {
        res.json({
            status: "Success",
            user: "Comment details",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error,
        })
    }

};
//delete comment
const deleteCommentCtrl = async (req, res) => {
    try {
        res.json({
            status: "Success",
            user: "Comment deleted",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error,
        })
    }

};
//update
const updateCommentCtrl = async (req, res) => {
    try {
        res.json({
            status: "Success",
            user: "Comment updated",
        });
    } catch (error) {
        res.json({
            status: "Failed",
            error: error,
        })
    }

};

module.exports = {
    createCommentCtrl,
    commentDetailsCtrl,
    deleteCommentCtrl,
    updateCommentCtrl
};