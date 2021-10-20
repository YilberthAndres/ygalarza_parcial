const Sequelize = require('sequelize');

const DB_NAME = 'ygalarza_parcial';
const DB_USER = 'grupo4';
const DB_PASS = 'Grupo4.123';

export const database = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,{
        host: 'localhost',
        dialect: 'mysql',
        port:3306
    }
)

database.sync({force: true})
    .then(function(){
        console.log("Base de datos creada")
    })