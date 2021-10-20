import { Request, Response } from "express";
import { Mantenimiento, MantenimientoI } from "../models/mantenimiento";


export class MantenimientoController{

    public async getMantenimientos(req: Request, res:Response){
        try {
            const mantenimientos = await Mantenimiento.findAll();

            if(!mantenimientos) return res.status(400).json({msg:"No hay Mantenimientos"});

            return res.status(200).json({mantenimientos})
        } catch (error) {
            return res.status(200).json({msg:"Error de conexion"});
        }
    }

    public async createMantenimiento(req: Request, res:Response){
        const body: MantenimientoI = req.body;

        try {
            if(!body.descripcion && !body.fecha && !body.resultado){
                return res.status(400).json({msg:"Faltan datos"}); 
            }

            // const equipoexiste: Equipo | null = await Equipo.findOne(
            //     {
            //         where: {}
            //     }
           // )

           const mantenimiento = await Mantenimiento.create(body)
           res.status(200).json({mantenimiento})
        } catch (error) {
            return res.status(200).json({msg:"Error de conexion"});
        }

    }

    public async deleteMantenimiento(req: Request, res:Response){
        try {
            const{id} = req.body
             const mantenimientoexiste: Mantenimiento | null = await Mantenimiento.findOne(
                {
                    where: {id:id}
                }
           )

           if(!mantenimientoexiste) return res.status(400).json({msg:"El ID no existe en el sistema."}); 

           const response = await Mantenimiento.destroy({
               where:{id:id}
           })
           res.status(200).json({msg:"Borrado."}); 
           res.json(response)
            
        } catch (error) {
            return res.status(200).json({msg:"Error de conexion"});
        }
    }

}