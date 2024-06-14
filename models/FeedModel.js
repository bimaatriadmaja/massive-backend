// //IMG
import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Feed = db.define('feed',{
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    caption: DataTypes.STRING
},{
    freezeTableName: true
});

export default Feed;

(async()=>{
    await db.sync();
})();
// //IMG