"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorDTO = void 0;
const dbConnection_1 = require("../config/dbConnection");
const sequelize_1 = require("sequelize");
exports.colorDTO = dbConnection_1.sequelize.define("colors", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: sequelize_1.DataTypes.STRING(25),
        allowNull: false
    }
});
