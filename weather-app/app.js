const geocoding = require("./geocoding.js");
const darksky = require("./darksky.js");
const yargs = require('yargs')

//Geocoding
// Address => Lat/Long =: Param

yargs.version('1.1.0')

yargs.command({
    command: 'get',
    describe: 'Get Weather from city',
    builder: {
        city: {
            describe: 'City',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        geocoding.convertLocationToCoord(argv.city, (error, response) => {
            if (error) {
                return console.error(error);
            }
            darksky.getWeather(response.latitude, response.longitude, (error, responseWeather) => {
                if (error) {
                    return console.error(error);
                }
                console.log(responseWeather.body.daily.data[0].summary + ' It is currently ' + responseWeather.body.currently.temperature + ' degress out. There is a ' + responseWeather.body.currently.precipProbability + '% chance of rain.')
            });
        });
    }
})

yargs.parse();