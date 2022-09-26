import express from "express";
 
import { 
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    Login
} from "../controllers/UserCtrl.js";
 
const router = express.Router();
 
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/login', Login);
 
export default router;