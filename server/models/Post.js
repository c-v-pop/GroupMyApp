import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Posts = db.define('posts', {
    title:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    createdBy:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});

export default Posts;