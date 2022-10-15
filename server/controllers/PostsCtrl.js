import Post from "../models/Post.js";
import user from "../models/UserModel.js"
import multer from "multer";

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.json(posts);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const getPostById = async (req, res) => {
    try {
        const Post = await Post.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(Post[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({storage}).single('file');

export const createPost = async (req, res) => {
    
    upload(req, res, async (err) => {       
        if(err) {
            console.log('error', err);
        }
        const  path = res.req.file.path
        console.log(res.req.file)
        console.log(res.req.body.title);
        const {title, description, createdBy}= res.req.body;
        
        const username = await user.findOne({
            where: {
                id: createdBy
            }
        });
        console.log(username.name)
        try {
            await Post.create({
                title: title,
                description: description,
                createdBy: username.name,
                imageurl: path
            });
            res.json({
                "message": "Post Created",
                errors:false
            });
        } catch (error) {
            res.json({ 
                message: error.message, 
                errors:true 
            });
        }  
    })
    
    
}

export const updatePost = async (req, res) => {
    try {
        await Post.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Post Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const deletePost = async (req, res) => {
    try {
        await Post.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Post Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}