const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs_cfg');

for (let i = 0; i < argv._.length; i++) {
    switch (argv._[i]) {
        case 'listar':
            listarTabla(argv.base, argv.limite).then(resp => console.log(resp)).catch(err => console.log(err));
            break;
        case 'crear':
            crearArchivo(argv.base, argv.limite).then(resp => console.log(`${resp} has been saved.`)).catch(err => console.log(err));
            break;
        default:
            console.log('No reconoce este comando.');
            break;
    }
}