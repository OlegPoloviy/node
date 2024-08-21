"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carDTO = void 0;
const dbConnection_1 = require("../config/dbConnection");
const sequelize_1 = require("sequelize");
exports.carDTO = dbConnection_1.sequelize.define("cars", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    model: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false
    },
    year: {
        type: sequelize_1.DataTypes.STRING(4),
        allowNull: false
    },
    number: {
        type: sequelize_1.DataTypes.STRING(10),
        allowNull: false
    },
    color: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "colors",
            key: "id"
        }
    },
    type: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "types",
            key: "id"
        }
    },
    isnew: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    },
    vengine: {
        type: sequelize_1.DataTypes.DOUBLE,
        defaultValue: 1.6,
        allowNull: false
    },
    // createdAt:{
    //     type:DataTypes.STRING
    // },
    // updatedAt:{
    //     type:DataTypes.STRING
    // }
});
