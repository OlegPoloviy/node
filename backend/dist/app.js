"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes/routes");
const dbConfig_1 = require("./postgres/dbConfig");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
dbConfig_1.dbConfig
    .connect()
    .then(() => {
    console.log("Connected");
    const PORT = process.env.PORT;
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(routes_1.carsRoutes);
    app.listen(PORT, () => {
        console.log(`server is running on http://localhost:${PORT}`);
    });
})
    .catch(err => {
    console.log(err);
});
