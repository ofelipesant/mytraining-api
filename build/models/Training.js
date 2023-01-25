"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Training = void 0;
const mongoose_1 = require("mongoose");
exports.Training = (0, mongoose_1.model)('Training', new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    exercises: [
        {
            name: {
                type: String,
            },
            weight: {
                type: String
            },
            repetitions: {
                type: String
            },
            series: {
                type: String,
            }
        }
    ]
}));
