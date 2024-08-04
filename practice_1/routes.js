import { Router } from "express";

export const routes = Router();

routes.get("/",(req,res) => {
    res.render("home", {title: "Home page"})
});

routes.get("/about", (req,res) => {
    res.render("about_city", {title : "Places of interest"});
});