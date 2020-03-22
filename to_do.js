// Este archivo es un lista de tareas

const fs = require("fs");
const chalk = require("chalk");
// prueba chalk     console.log(chalk.bold("tincho"));
//const tareas = require("./tareas.json")  ESTA ES OTRA FORMA DE IMPORTAR MI FILE
const accion = process.argv[2];
const tareas = require("./fTareas.js");

switch (accion) {
    case "listar":
        const tareasArray = tareas.leer();
        /*  

        for (let i = 0; i < tareasArray.length; i++){
             console.log(chalk.bold.red(i+1) + " - " + tareasArray[i].descripcion + " - Estado: " + chalk.bold(tareasArray[i].estado));
             
         }
         Podemos cambiar este for por un forEach
         */

        tareasArray.forEach((tarea, indice) => {
            console.log((indice + 1) + " - " + tarea.descripcion + " - Estado: " + tarea.estado);

        });
        break;

    case "agregar":
        const resultadoGuardar = fTareas.guardar(process.argv[3]);
        console.log(resultadoGuardar);
        break;



    case undefined:
        console.log("Accion desconocida");
        break;

    default:
        console.log("No es una accion valida");
        break;
}