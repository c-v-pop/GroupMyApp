import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

export const Login = async (req, res) => {
    console.log(req.body)
    try {
      const user =   await User.findOne({
            where: {
                name: req.body.username
                
            }
        });
        if(user){
            console.log(user)
            bcrypt.compare(req.body.password, user.password).then(valid=>{
                if(valid){
                    const token = jwt.sign(
                        {userId: user.id},
                        "ran",
                        {expiresIn: '24h'});
                        res.status(200).json({
                            userId: user.id,
                            token: token
                        });
                }else{
                    res.status(400).json({
                        message : "invalid password "
                    })
                }
            })
        }else{
            res.status(400).json({
                message : "invalid user name"
            })
        }
    } catch (error) {
        res.status(500).json({
            message : error
        })
    }
}
 


