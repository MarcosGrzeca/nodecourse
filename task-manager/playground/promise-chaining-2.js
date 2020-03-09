require("../src/db/mongoose")

const Task = require("../src/models/task")

Task.findByIdAndDelete("5e65869a51d22c595cf8bcb5").then((task) => {
    console.log(task);
    return Task.countDocuments({"completed" : false});
}).then((result) => {
    console.log("SEcond");
    console.log(result)
}).catch((error) => {
    console.error(error);
});

// User.countDocuments({"ag"}, {"age": 2}).then((user) => {
//     console.log(user);
// }).catch((error) => {
//     console.error(error);
// });