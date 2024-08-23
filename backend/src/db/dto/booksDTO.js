import {DataTypes} from "sequelize";
import {sequelize} from "../config/dbConnection.js";

export const booksDTO = sequelize.define("books", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    author: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
},{timestamps:false})