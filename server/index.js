import express from "express";
import db from "./config/database.js";
import UserRoutes from "./routes/UserRoutes.js";
import PostsRoutes from "./routes/PostsRoutes.js";
import cors from "cors";

// Test multer

import multer from "multer";

const upload = multer({dest: "uploads/"});


// End multer test

const app = express();
 
try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
 
app.use(cors());
app.use(express.json());
app.use('/users', UserRoutes);
app.use('/posts', PostsRoutes);

// My test 

app.post("/upload_files", upload.array("files"), uploadFiles);

function uploadFiles(req, res) {
    console.log(req.body);
    console.log(req.files);
    res.json({ message: "Successfully uploaded files" });
}

// TEST ENDS


app.listen(5000, () => console.log('Server running on port 5000'));
