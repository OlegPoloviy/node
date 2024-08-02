import express from "express";

export const routers = express.Router();

routers.get("/", (req, res) => {
    res.render("home", { title: "Home" });
});

routers.get("/home", (req, res) => {
    res.render("home", { title: "Home" });
});

routers.get("*",(req,res) => {
    res.render("error")
})