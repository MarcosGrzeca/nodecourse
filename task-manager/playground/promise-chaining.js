require("../src/db/mongoose")

const User = require("../src/models/user")

// User.findByIdAndUpdate("5e65846bca92145010d7186b", {"age": 28}).then((user) => {
//     console.log(user);
//     return User.countDocuments({"age" : 28});
// }).then((result) => {
//     console.log("SEcond");
//     console.log(result)
// }).catch((error) => {
//     console.error(error);
// });

const updateAgeCount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id, {"age": age});
    const count = await User.countDocuments({age});
    return count;
}

updateAgeCount("5e65846bca92145010d7186b", 30).then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
})

// User.countDocuments({"ag"}, {"age": 2}).then((user) => {
//     console.log(user);
// }).catch((error) => {
//     console.error(error);
// });