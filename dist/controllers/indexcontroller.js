"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ message: 'Welcome to my API of DB_GAMES route: api/games' });
    }
}
exports.indexController = new IndexController();
