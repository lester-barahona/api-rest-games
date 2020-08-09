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
const database_1 = __importDefault(require("../database"));
class GamesController {
    //GET ALL GAMES
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.then((con) => con.query('SELECT * from games;'));
            res.json(result);
        });
    }
    //GET ONE GAME BY ID
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const {id}=req.params; //can use this 
            const result = yield database_1.default.then((con) => con.query('SELECT * FROM games WHERE id=?', [req.params.id]));
            res.json(result);
        });
    }
    //INSERT NEW GAME
    insert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((con) => con.query('INSERT INTO games SET ?', [req.body]));
            res.json({ message: "Game Inserted" });
        });
    }
    //UODATE GAME BY ID
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((con) => con.query('UPDATE games SET ? WHERE id=?', [req.body, req.params.id]));
            res.json({ message: "Game Updated" });
        });
    }
    //DELETE GAME BY ID
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.then((con) => { con.query('DELETE FROM games WHERE id=?', [req.params.id]); });
            res.json({ message: "Game Deleted" });
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
