import { Application } from "express";
import { EquipoController } from "../controllers/equipo.controllers";

export class EquipoRoutes{

    public equipocontroller: EquipoController = new EquipoController();

    public routes(app: Application): void{
        app.route('/equipos').get(this.equipocontroller.getEquipos);
        app.route('/crearequipo').post(this.equipocontroller.createEquipo);
        app.route('/eliminarequipo').delete(this.equipocontroller.deleteEquipo);
    }
}