import {Request, Response} from 'express';

class IndexController{

    public index(req:Request,res:Response){
        res.json({message:'Welcome to my API of DB_GAMES route: api/games'});
    }

}

export const indexController=new IndexController();