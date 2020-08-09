"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const pool = promise_mysql_1.default.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_games"
});
pool.then((conn) => { console.log('Conection Successfull to DB_GAMES'); });
exports.default = pool;
/*
Sin promesas
import mysql from "mysql";
const pool  = mysql.createPool(keys.database);
pool.getConnection((err,connection)=>{
    if(err)throw err;
    pool.releaseConnection(connection);
    console.log('Conection Successfull to DB_GAMES');
    
});
En controller:
 
 pool.query('SELECT * from games;',(err,result)=>{
            if (err) throw err;
            res.json(result);
          });


*/ 
