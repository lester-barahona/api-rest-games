import {Request, Response} from 'express';
import pool from '../database';

class GamesController{

    //GET ALL GAMES
    public async getAll(req:Request,res:Response){
      const result= await pool.then((con)=>con.query('SELECT * from games;'));
      res.json(result);
    }
    //GET ONE GAME BY ID
    public async getOne(req:Request,res:Response){
        //const {id}=req.params; //can use this 
        const result= await pool.then((con)=>con.query('SELECT * FROM games WHERE id=?',[req.params.id]));
        res.json(result);
    }
    //INSERT NEW GAME
    public async insert(req:Request,res:Response){
        await pool.then((con)=>con.query('INSERT INTO games SET ?',[req.body]));
        res.json({message:"Game Inserted"});
    }
    //UODATE GAME BY ID
    public async update(req:Request,res:Response){
        await pool.then((con)=>con.query('UPDATE games SET ? WHERE id=?',[req.body, req.params.id]));
        res.json({message:"Game Updated"});
    }
    //DELETE GAME BY ID
    public async delete(req:Request, res:Response){
        await pool.then((con)=>{con.query('DELETE FROM games WHERE id=?',[req.params.id])});
        res.json({message:"Game Deleted"});
    }



}
const gamesController=new GamesController();
export default gamesController;