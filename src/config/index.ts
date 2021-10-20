import express, {Application} from "express";
import morgan from "morgan";
import { Routes } from "../routes/index";
export class App{
    app:Application;
    public routePriv: Routes = new Routes();
    constructor(
        private port ?: number | string
    ){
        this.app = express()
        this.settings();
        this.middelwares();
        this.routes()
    }

    private settings(){
        this.app.set('port', this.port || 3000)
    }

    private middelwares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}))
    }
    
    private routes(){
        this.routePriv.equiposRoutes.routes(this.app)
        this.routePriv.mantenimientoRoutes.routes(this.app)
    }

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('Servidor activo en el puerto: ', this.app.get('port'))
    }
}


