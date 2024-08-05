import express from "express";
import "dotenv/config";
import exhbs from "express-handlebars";
import { routers } from "./routes.js";
import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3000;

const hbs = exhbs.create({
    defaultLayout: "main",
    extname: "hbs"
});

const serverKey = fs.readFileSync(
    path.join(__dirname,"cert","server.key")
);

const certificate = fs.readFileSync(
    path.join(__dirname,"cert","server.crt")
);

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

const httpsServer = https.createServer({
    key: serverKey,
    cert : certificate
},app);

httpsServer.listen(PORT,() => {
    console.log(`Server is started on https://localhost:${PORT}`)
})

// app.listen(PORT, () => {
//     console.log(`Server is started on http://localhost:${PORT}`);
// });
