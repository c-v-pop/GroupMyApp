import User from "../models/userModel.js";
import bcrypt from "bcrypt";


export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getUserById = async (req, res) => {
    try {
        const User = await User.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(User[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createUser = async (req, res) => {
    const {name, password}= req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)
    try {
        await User.create({
            name: name,
            password: hashedPassword,
        });
        res.json({
            "message": "User Created",
             errors:false
        });
    } catch (error) {
        res.json({ 
            message: error.message, 
            errors:true 
        });
    }  
}
 
export const updateUser = async (req, res) => {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "User Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "User Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 