import { Router } from "express";

export const router = Router();

router.get("/",(req,res) =>{
    console.log(req.session);
    res.render("home")
})