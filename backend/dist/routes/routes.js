"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carsRoutes = void 0;
const express_1 = require("express");
const Car_1 = require("../db/models/Car");
exports.carsRoutes = (0, express_1.Router)();
exports.carsRoutes.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    Car_1.Car.getAllCars()
        .then(data => {
        res.send(data);
    })
        .catch((err) => {
        console.error(err);
        res.sendStatus(500);
    });
}));
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
exports.carsRoutes.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    Car_1.Car.deleteCar(id)
        .then(data => {
        res.redirect("/");
    })
        .catch(err => {
        console.error(err);
    });
}));
