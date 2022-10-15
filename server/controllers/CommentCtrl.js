import Comment from "../models/Comment.js";
import user from "../models/UserModel.js"

export const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.findAll();
        res.json(comments);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getCommentById = async (req, res) => {
    try {
        const Comment = await Comment.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(Comment[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createComment = async (req, res) => {
    console.log(req.body)
    const {comments, createdBy}= req.body.comment;

    const username = await user.findOne({
        where: {
            id: createdBy
        }
    });
    console.log(username.name)
    try {
        await Comment.create({
            comments: comments,
            createdBy: username.name
        });
        res.json({
            "message": "Comment added",
             errors:false
        });
    } catch (error) {
        res.json({ 
            message: error.message, 
            errors:true 
        });
    }  
}
 
export const updateComment = async (req, res) => {
    try {
        await Comment.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Comment Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteComment = async (req, res) => {
    try {
        await Comment.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Comment Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}



