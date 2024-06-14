// import {Sequelize} from "sequelize";
// import db from "../config/Database.js";

// const {DataTypes} = Sequelize;

// const User = db.define('users',{
//     email: DataTypes.STRING,
//     first_name: DataTypes.STRING,
//     last_name: DataTypes.STRING,
//     password: DataTypes.STRING,
// },{
//     freezeTableName:true
// });

// export default User;

// (async()=>{
//     await db.sync();
// })();

import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import bcrypt from "bcrypt";

const { DataTypes } = Sequelize;

const User = db.define('users', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    freezeTableName: true,
    hooks: {
        beforeCreate: async (user) => {
            if (user.password) {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);
            }
        }
    }
});

export default User;

(async () => {
    await db.sync();
})();
