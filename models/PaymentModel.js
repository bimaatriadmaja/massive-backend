import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Payment = db.define('payment', {
    name: DataTypes.STRING,
    email_or_hp: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
}, {
    freezeTableName: true
});

export default Payment;

(async () => {
    await db.sync();
})();
