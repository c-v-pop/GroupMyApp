import express from "express";
 
import { 
    getAllPosts,
    createPost,
    getPostById,
    updatePost,
    deletePost,
} from "../controllers/PostsCtrl.js";
 
const router = express.Router();
 
router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
 
export default router;