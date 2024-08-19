import express from "express";
import {carsRoutes} from "./routes/routes";
import {dbConfig} from "./postgres/dbConfig";
import dotenv from "dotenv";
dotenv.config();

dbConfig
    .connect()
    .then(() => {
        console.log("Connected")

        const PORT = process.env.PORT;
        const app = express();

        app.use(express.json())
        app.use(carsRoutes);

        app.listen(PORT,() => {
            console.log(`server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.log(err)
    })


