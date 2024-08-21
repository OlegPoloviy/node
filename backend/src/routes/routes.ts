import {Router} from "express";
import {Car} from "../db/models/Car";

export const carsRoutes = Router();

carsRoutes.get("/",async (req,res) => {
    Car.getAllCars()
        .then(data => {
            res.send(data);
        })
        .catch((err:Error) => {
            console.error(err);
            res.sendStatus(500);
    })
});

// carsRoutes.get("/cars/:id",async (req,res) => {
//     try{
//         const id = req.params.id;
//         const car = await carsModel.getSelected(id);
//
//         res.json(car);
//     }catch(err){
//         console.log(err);
//     }
//
// });

carsRoutes.delete("/:id",async (req,res) => {
    const id = req.params.id;

    Car.deleteCar(id)
        .then(data => {
            res.redirect("/")
        })
        .catch(err => {
            console.error(err)
        })
})