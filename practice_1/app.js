import express from "express";
import "dotenv/config";
import exphs from "express-handlebars";
import { routes } from "./routes.js";

const hbs = exphs.create({
    defaultLayout: "main",
    extname: "hbs"
})

const PORT = process.env.PORT;
const app = express();

app.engine("hbs", hbs.engine);
app.set("view engine","hbs");
app.set("views","views");
app.use(express.static("public"));
app.use(routes);

app.listen(PORT,() => {
    console.log("server started on localhost ",PORT);
});