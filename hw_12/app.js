import express from "express";
import "dotenv/config";
import exhbs from "express-handlebars";
import { routers } from "./routes.js";

const PORT = process.env.PORT || 3000;

const hbs = exhbs.create({
    defaultLayout: "main",
    extname: "hbs"
});

const app = express();

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routers);
app.all("*", (req,res) => {
    res.status(404).render("error",{title: "Error"})
})

app.listen(PORT, () => {
    console.log(`Server is started on http://localhost:${PORT}`);
});
