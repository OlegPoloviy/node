import {Router} from "express";
import {Color} from "../db/models/Color";

export const colorRoutes = Router();

colorRoutes.get("/",  async(req,res) => {
    Color.getAllColors()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.error(err);
        })
})