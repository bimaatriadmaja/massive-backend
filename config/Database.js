import { Sequelize } from "sequelize";

const db = new Sequelize('grup_tiga','root','',{
    host: 'localhost',
    dialect: 'mysql',
});

export default db;