import {sequelize} from "../config/dbConnection";
import {DataTypes} from "sequelize";

export const carDTO = sequelize.define("cars", {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    model:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    year:{
        type:DataTypes.STRING(4),
        allowNull:false
    },
    number:{
        type:DataTypes.STRING(10),
        allowNull:false
    },
    color:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model: "colors",
            key:"id"
        }
    },
    type:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references: {
            model:"types",
            key:"id"
        }
    },
    isnew:{
        type:DataTypes.BOOLEAN,
        defaultValue:true,
        allowNull:false
    },
    vengine:{
        type:DataTypes.DOUBLE,
        defaultValue:1.6,
        allowNull:false
    },
    // createdAt:{
    //     type:DataTypes.STRING
    // },
    // updatedAt:{
    //     type:DataTypes.STRING
    // }
})