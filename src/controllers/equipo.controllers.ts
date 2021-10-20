import { Request, Response } from "express";
import { Equipo, EquipoI } from "../models/equipos";


export class EquipoController{

    public async getEquipos(req: Request, res:Response){
        try {
            const equipos = await Equipo.findAll();

            if(!equipos) return res.status(400).json({msg:"No hay equipos"});

            return res.status(200).json({equipos})
        } catch (error) {
            return res.status(200).json({msg:"Error de conexion"});
        }
    }

    public async createEquipo(req: Request, res:Response){
        const body: EquipoI = req.body;

        try {
            if(!body.marca && !body.modelo){
                return res.status(400).json({msg:"Faltan datos"}); 
            }

            // const equipoexiste: Equipo | null = await Equipo.findOne(
            //     {
            //         where: {}
            //     }
           // )

           const equipo = await Equipo.create(body)
           res.status(200).json({equipo})
        } catch (error) {
            return res.status(200).json({msg:"Error de conexion"});
        }

    }

    public async deleteEquipo(req: Request, res:Response){
        try {
            const{id} = req.body
             const equipoexiste: Equipo | null = await Equipo.findOne(
                {
                    where: {id:id}
                }
           )

           if(!equipoexiste) return res.status(400).json({msg:"El ID no existe en el sistema."}); 

           const response = await Equipo.destroy({
               where:{id:id}
           })
           res.status(200).json({msg:"Borrado."}); 
           res.json(response)
            
        } catch (error) {
            return res.status(200).json({msg:"Error de conexion"});
        }
    }















}