import { Application } from "express";
import { MantenimientoController } from "../controllers/mantenimiento.controllers";

export class MantenimientoRoutes{

    public mantenimientocontroller: MantenimientoController = new MantenimientoController ();

    public routes(app: Application): void{
        app.route('/mantenimientos').get(this.mantenimientocontroller.getMantenimientos);
        app.route('/crearmantenimiento').post(this.mantenimientocontroller.createMantenimiento);
        app.route('/eliminarmantenimiento').delete(this.mantenimientocontroller.deleteMantenimiento);
    }
}