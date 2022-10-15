import express from "express";
import db from "./config/database.js";
import UserRoutes from "./routes/UserRoutes.js";
import PostsRoutes from "./routes/PostsRoutes.js";
import CommentsRoute from "./routes/CommentsRoute.js"
import cors from "cors";

// Test multer

import multer from "multer";

// const upload = multer({dest: "uploads/"});


// End multer test

const app = express();
 
try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}

app.use(express.json());
app.use(cors());
app.use('/users', UserRoutes);
app.use('/posts', PostsRoutes);
app.use('/Comments', CommentsRoute);

app.listen(5000, () => console.log('Server running on port 5000'));
