const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la Tarea'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Indica que la tarea se encuentra completada o pendiente'
};

const opt_crear = {
    descripcion,
}

const opt_actualizar = {
    descripcion,
    completado
}

const opt_listar = {
    completado: {
        alias: 'c',
        desc: 'Sirve para filtrar por el estado de la tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', opt_crear)
    .command('listar', 'Entrega la lista de tareas por hacer', opt_listar)
    .command('actualizar', 'Actualiza una tarea', opt_actualizar)
    .command('borrar', 'Borra una tarea', opt_crear)
    .help()
    .argv;

module.exports = {
    argv
}