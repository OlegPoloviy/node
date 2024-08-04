import express from "express";
import { form_validation } from "./middlewares/form_validation_middleware.js";

export const routers = express.Router();

routers.get("/", (req, res) => {
    res.render("home", { title: "Home" });
});

routers.get("/home", (req, res) => {
    res.render("home", { title: "Home" });
});

routers.get("/form",(req,res) => {
    res.render("form",{title: "Register"});
});

routers.post("/register",form_validation,(req,res) => {
    console.log(req.body);
    res.render("home");
});