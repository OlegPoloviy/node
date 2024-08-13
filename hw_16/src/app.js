import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import exphbs from "express-handlebars";
import session from "express-session";
import cookieParser from "cookie-parser";
import user_router from "./routes/user-routes.js";
import site_router from "./routes/site-routes.js";
import path from "path";
import auth from "./middlewars/user-middleware.js";
import { dbconfig } from "./postgres/dbconfig.js";

const PORT = process.env.PORT || 8000;
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs",
});

dbconfig
  .connect()
  .then(() => {
    console.log("Connected to DB...");
    const app = express();
    app.use(cookieParser());
    app.use(
      session({
        secret: process.env.SECRET_KEY,
        saveUninitialized: true,
        resave: true,
      })
    );
    app.use(auth);
    app.use(express.static("public"));
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.engine("hbs", hbs.engine);
    app.set("view engine", "hbs");
    app.set("views", path.join("src", "views"));

    app.use("/user", user_router);
    app.use(site_router);

    app.listen(PORT, () => {
      console.log(`Server is running ... http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
