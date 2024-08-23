import {Sequelize, DataTypes} from "sequelize";

export const sequelize = new Sequelize('library','postgres','07092006',{
    dialect: 'postgres',
    host:'localhost',
    port: 5433
});