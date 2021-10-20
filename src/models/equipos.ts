import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Mantenimiento } from "./mantenimiento";

export class Equipo extends Model{
    public marca!: string;
    public modelo!: string;
}

export interface EquipoI{
    marca: string;
    modelo: string;
}

Equipo.init(
    {
        marca:{
            type:DataTypes.STRING,
            allowNull: false
        },
        modelo:{
            type:DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: "Equipos",
        sequelize: database,
        timestamps: true
    }
)









