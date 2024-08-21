import {sequelize} from "../config/dbConnection";
import {DataTypes} from "sequelize";

export const colorDTO = sequelize.define("colors",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING(25),
        allowNull:false
    }
});