import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Comments = db.define('comments', {
    comments:{
        type: DataTypes.STRING
    },
    createdBy:{
        type: DataTypes.STRING
    }
},
{
    freezeTableName: true
});


export default Comments;