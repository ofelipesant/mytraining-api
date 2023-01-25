"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = require("./router");
mongoose_1.default.set('strictQuery', false);
mongoose_1.default.connect('mongodb+srv://mytraining:mytraining@mytraining.yn2m9br.mongodb.net/?retryWrites=false&w=majority')
    .then(() => {
    const app = (0, express_1.default)();
    const port = 8000;
    app.use(express_1.default.json());
    app.use(router_1.router);
    app.listen(port, () => {
        console.log(`o server está rodando na porta ${port}`);
    });
})
    .catch(() => console.log('erro ao conectar no mongodb'));
