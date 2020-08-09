import {Router} from 'express';
import gamesController from '../controllers/gamescontroller';
class GamesRoutes {
    
    public router:Router;

    constructor(){
        this.router=Router();
        this.config();
    }

    config():void{
        this.router.get('/',gamesController.getAll);
        this.router.get('/:id',gamesController.getOne);
        this.router.post('/',gamesController.insert);
        this.router.put('/:id',gamesController.update);
        this.router.delete('/:id',gamesController.delete);
      
    }

}

const gamesRoutes= new GamesRoutes();
export default gamesRoutes.router;