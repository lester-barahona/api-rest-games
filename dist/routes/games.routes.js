"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamescontroller_1 = __importDefault(require("../controllers/gamescontroller"));
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', gamescontroller_1.default.getAll);
        this.router.get('/:id', gamescontroller_1.default.getOne);
        this.router.post('/', gamescontroller_1.default.insert);
        this.router.put('/:id', gamescontroller_1.default.update);
        this.router.delete('/:id', gamescontroller_1.default.delete);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
