const key = "pk.eyJ1IjoibWFyY29zZ3J6ZWNhIiwiYSI6ImNrNnZnY3lzMjAwNHMzbHNjcmVteWgyYjMifQ.UssOIEx9C9GvPWk_t23qXQ";
const request = require("request");

const convertLocationToCoord = (address, callback) => {
    request({url: "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=" + key + "&limit=1", json: true}, (error, response) => {
        if (error) {
            callback("Unable to connect to location service");
        } else if (response.body.features[0].length === 0) {
            callback("Unable to find");
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            });
        }
    });
}

module.exports = {
    convertLocationToCoord: convertLocationToCoord
}