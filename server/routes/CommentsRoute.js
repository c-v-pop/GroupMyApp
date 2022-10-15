import express from "express";
 
import { 
    getAllComments,
    createComment,
    getCommentById,
    updateComment,
    deleteComment,
} from "../controllers/CommentCtrl.js";
 
const router = express.Router();
 
router.get('/', getAllComments);
router.get('/:id', getCommentById);
router.post('/', createComment);
router.patch('/:id', updateComment);
router.delete('/:id', deleteComment);
 
export default router;