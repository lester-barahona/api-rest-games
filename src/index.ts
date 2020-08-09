import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import multer, { MulterError } from 'multer';

import indexRoutes from './routes/index.routes';
import gamesRoutes from './routes/games.routes';

class Server {

    public app:Application;
    private upload:any;

    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }

    config():void {
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));

        //Multer configuration to save images
        const storage = multer.diskStorage({
            destination: (req, file, callBack) => {
                callBack(null, 'src/uploads')
            },
            filename: (req, file, callBack) => {
                callBack(null, `game_${file.originalname}`)
            }
          });
          
      this.upload = multer({ storage: storage });

      //let upload = multer({ dest: 'uploads/' }) //most simple
    }

    routes():void{
       this.app.use('/',indexRoutes);
       this.app.use('/api/games',gamesRoutes);

       //Route to Get Images
       this.app.get('/image/:name',(req,res)=>{
        res.sendFile(__dirname +`/uploads/${req.params.name}`);
        });

        //Route to save images
        this.app.post('/file', this.upload.single('file'), (req, res, next) => {
                const file = req.file;
                console.log(file.filename);
                if (!file) {
                const error = new Error('No File');
                return next(error)
                }
                res.send(__dirname +file);
            });
    }

    init():void{
        this.app.listen(this.app.get('port'),
        ()=>{console.log('Server on PORT ',this.app.get('port'))
        });
    }

}

const server = new Server();
server.init();