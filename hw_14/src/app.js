import express from "express";
import "dotenv/config";
import exphbs from "express-handlebars";
import session from "express-session";
import path from "path";
import bodyParser from "body-parser";
import { userRouter } from "./routes/user-routes.js";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import { forbidRoutes } from "./middlewares/user-middleware.js";
import { router } from "./routes/router.js";
import { auth } from "./middlewares/user-middleware.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({
    defaultLayout:"main",
    extname:"hbs"
});

const app = express();

app.use(cookieParser());
app.use(session({
    secret: process.env.SECRET_KEY
}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(auth);
app.use(router);
app.use("/user",forbidRoutes,userRouter);
app.engine("hbs",hbs.engine);
app.set("view engine","hbs");
app.set("views",path.join(__dirname,"..","views"));
app.use(express.static(path.join(__dirname,"..","public")));



app.listen(PORT,() => {
    console.log(`server is started on http://localhost:${PORT}`);
});