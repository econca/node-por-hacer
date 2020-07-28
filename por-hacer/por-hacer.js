const fs = require('fs');

const colors = require('colors');

let listadoPorHacer = [];

const guardarDB = () => {

    return new Promise((resolve, reject) => {

        let data = JSON.stringify(listadoPorHacer);

        fs.writeFile(`db/data.json`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`Registro OK`);
        });
    });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }


    //console.log(listadoPorHacer);
}

const getListado = (completado) => {

    cargarDB();

    if (completado !== undefined) {
        listadoFiltrado = listadoPorHacer.filter(tarea => String(tarea.completado) === (completado));

        return listadoFiltrado;

    } else {

        return listadoPorHacer;
    }



}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {

        return tarea.descripcion === descripcion;

    });

    if (index >= 0) {

        listadoPorHacer[index].completado = completado;

        guardarDB()
            .then(mensaje => console.log(mensaje.green))
            .catch(err => console.log(err.red));

        return true;

    } else {
        return false;
    }


}

const borrar = (descripcion) => {

    cargarDB();

    nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (listadoPorHacer.length !== nuevoListado.length) {

        listadoPorHacer = nuevoListado;

        guardarDB()
            .then(mensaje => console.log(mensaje.green))
            .catch(err => console.log(err.red));

        return true;


    } else {
        return false;
    }


}


const crear = (descripcion) => {

    let porHacer = {
        descripcion,
        completado: false,
    };

    cargarDB();


    listadoPorHacer.push(porHacer);

    guardarDB()
        .then(mensaje => console.log(mensaje.green))
        .catch(err => console.log(err.red));

    return porHacer;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}