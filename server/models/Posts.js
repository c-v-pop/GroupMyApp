import { Sequelize } from "sequelize";
import db from "../config/database";

const { DataTypes } = Sequelize;

const Posts = db.define('posts', {
    title:{
        type: DataTypes.STRING
    },
    text:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});

export default Posts;