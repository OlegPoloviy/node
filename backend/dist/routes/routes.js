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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carsRoutes = void 0;
const express_1 = require("express");
const CarsModel_1 = __importDefault(require("../postgres/models/CarsModel"));
exports.carsRoutes = (0, express_1.Router)();
exports.carsRoutes.get("/cars", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cars = yield CarsModel_1.default.getAllCars();
        res.json(cars);
    }
    catch (err) {
        res.status(404).redirect("/");
    }
}));
exports.carsRoutes.get("/cars/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const car = yield CarsModel_1.default.getSelected(id);
        res.json(car);
    }
    catch (err) {
        console.log(err);
    }
}));
