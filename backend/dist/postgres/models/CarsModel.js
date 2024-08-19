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
const dbConfig_1 = require("../dbConfig");
class CarsModel {
    getAllCars() {
        return __awaiter(this, void 0, void 0, function* () {
            const cars = yield dbConfig_1.dbConfig.query("SELECT * FROM cars;");
            return cars.rows;
        });
    }
    getSelected(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = data;
            const car = yield dbConfig_1.dbConfig.query("SELECT * FROM cars WHERE id=$1", [id]);
            return car.rows;
        });
    }
}
exports.default = new CarsModel();
