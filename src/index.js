const { celsiusToFahrenheit, fahrenheitToCelsius } = require('../src/converter');
const { program } = require('commander');
program.version('0.0.1');

program.command('ftoc')
    .description('Converts a fahrenheit temperature into celsius')
    .action(FTemperature => {
        console.log(typeof FTemperature);
        console.log(fahrenheitToCelsius(FTemperature))
    });

program.command('ctof')
    .description('Converts a celsius temperature into fahrenheit')
    .action(celsiusToFahrenheit);

program.parse(process.argv);
