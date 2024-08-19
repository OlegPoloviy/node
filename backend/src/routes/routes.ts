import {Router} from "express";
import carsModel from "../postgres/models/CarsModel";

export const carsRoutes = Router();

carsRoutes.get("/cars",async (req,res) => {
    try{
        const cars  = await carsModel.getAllCars();
        res.json(cars);
    }catch(err){
        res.status(404).redirect("/");
    }
});

carsRoutes.get("/cars/:id",async (req,res) => {
    try{
        const id = req.params.id;
        const car = await carsModel.getSelected(id);

        res.json(car);
    }catch(err){
        console.log(err);
    }

});