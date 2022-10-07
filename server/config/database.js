import { Sequelize } from "sequelize";
const db = new Sequelize('groupomaniaDB', 'root', 'd3tiaieERP', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;