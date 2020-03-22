const geocode = require('../utils/geocode')
const forecast = require('../utils/forecast')

const weatherForecast = (location) => {
    geocode(location, (error, data) => {
        if (error) {
            return console.log(error);
        } 

        forecast(data.latitude, data.longitude, (error, forecast) => {
            if (error) {
                return console.log('Error', error);
            }
            
            console.log(data.location);
            console.log(forecast);
        });
        
    });
}

module.exports = weatherForecast;