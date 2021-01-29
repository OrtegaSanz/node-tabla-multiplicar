const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', { base: { demand: true, alias: 'b' }, limite: { default: 10, alias: 'l' } })
    .command('crear', 'Crea un archivo de la tabla de multiplicar', { base: { demand: true, alias: 'b' }, limite: { default: 10, alias: 'l' } })
    .help().argv;

module.exports = argv;