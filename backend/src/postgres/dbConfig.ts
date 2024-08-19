import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const dbConfig = new pg.Client({
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});
export { dbConfig };