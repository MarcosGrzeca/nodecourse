const geocoding = require("../weather-app/geocoding.js")

// setTimeout(() => {
//     console.log("Two seconds are up");
// }, 2000);

const names = ["Andrew", "Jen", "Jess"];
const shortNames = names.filter((name) => {
    return name.length <= 4;
});

geocoding.convertLocationToCoord("Philadelphia", (data) => {
    console.log("OLA");
    console.log(data);
})

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
}

add(10,20, (response) => {
    console.log(response);
})