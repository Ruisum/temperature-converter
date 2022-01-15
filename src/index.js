const { celsiusToFahrenheit, fahrenheitToCelsius } = require('../src/converter');
const { program } = require('commander');
program.version('0.0.1');

program.command('fahrenheitToCelsius')
    .alias('ftoc')
    .description('Converts a fahrenheit temperature into celsius')
    .argument('[temperature]', 'Temperature in fahrenheit to be converted to celsius')
    .action(temperature => {
        console.log(temperature + ' fahrenheit is ' + fahrenheitToCelsius(temperature) + ' celsius');
    });

program.command('celsiusToFahrenheit')
    .alias('ctof')
    .description('Converts a celsius temperature into fahrenheit')
    .argument('[temperature]', 'Temperature in celsius to be converted to fahrenheit')
    .action(temperature => {
        console.log(temperature + ' celsius is ' + celsiusToFahrenheit(temperature) + ' fahrenheit');
    });

program.parse(process.argv);
