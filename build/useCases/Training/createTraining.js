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
exports.createTraining = void 0;
const Training_1 = require("../../models/Training");
function createTraining(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, exercises } = req.body;
            if (!name) {
                return res.status(400).json({
                    error: "O campo 'nome' é obrigatório"
                });
            }
            if (!exercises) {
                return res.status(400).json({
                    error: "O treino precisa possuir pelo menos um exercício"
                });
            }
            const training = yield Training_1.Training.create({
                name,
                exercises
            });
            return res.status(201).json(training);
        }
        catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    });
}
exports.createTraining = createTraining;
