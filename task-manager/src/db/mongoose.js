const mongosse = require("mongoose")
const configDB = require("./config.js")

const uri = configDB.getUrlBase() + "task-manager-api";

mongosse.connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }
)