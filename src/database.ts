import mysql from "promise-mysql";

const pool  = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"db_games"
});
pool.then((conn)=>{console.log('Conection Successfull to DB_GAMES')});
export default pool;


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