import express from "express";
import "dotenv/config"
import bodyParser from "body-parser";
import {booksRouter} from "./routes/booksRouter.js";

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use(booksRouter);


app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`)
})