const weatherForecast = require('./src/weatherForecast')

const address = process.argv[2];

if (!address) {
    console.log ('Please provide an address');
} else {
    weatherForecast(address);
}




