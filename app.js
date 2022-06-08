const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true
            })
            .check( (argv, options) => {
                if ( isNaN( argv.b ) ){
                    throw 'La base tiene que ser un numero'
                }
                return true;
            })
            .option ('l', {
                alias: 'listar',
                type: 'Boolean',
                demandOption: true,
                default: false

            })
            .check( (argv, options) => {
                if ( argv.l = true ){
                    throw ' La tabla ha sido mostrada en pantalla '
                }
                return false;
            })
            .argv;


console.clear();

console.log(argv);

console.log('base: yargs', argv.b );

