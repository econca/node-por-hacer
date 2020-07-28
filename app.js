const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');

//console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        // console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado(argv.completado);
        for (let tarea of listado) {
            console.log('°°°°°°°°°°°°°°°°°°°°°°°°');
            console.log(tarea.descripcion.green);
            console.log(`Estado: ${tarea.completado}`.bgWhite.black);

        }
        break;

    case 'actualizar':
        actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(`Actualizado: ${actualizado}`);
        break;

    case 'borrar':
        borrado = porHacer.borrar(argv.descripcion);
        console.log(`Borrado: ${borrado}`);
        break;

    default:
        console.log('No existe ese comando');
}