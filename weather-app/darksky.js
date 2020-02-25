const request = require("request");

const getWeather = (latitude, longitude, callback) => {
    const url = "https://api.darksky.net/forecast/3078ca13eff44b761038ec8053847034/" + latitude + "," +  + longitude + "?units=us";
    request({url : url, json: true}, (error, response) => {
        if (error) {
            callback("Unable to connect to location service");
        } else if (response.body.error) {
            callback(response.body.error);
        } else {
            callback(undefined, response);
        }
    }) 
}

module.exports = {
    getWeather: getWeather
}