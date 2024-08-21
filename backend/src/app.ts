import express from "express";
import {carsRoutes} from "./routes/routes";
import {dbConfig} from "./postgres/dbConfig";
import cors from "cors";
import dotenv from "dotenv";
import {colorRoutes} from "./routes/colorRoutes";
dotenv.config();



const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/cars",carsRoutes);
app.use("/colors",colorRoutes);

app.listen(PORT,() => {
    console.log(`server is running on http://localhost:${PORT}`);
});


