const mongosse = require("mongoose")
const configDB = require("./config.js")

const uri = configDB.getUrlBase();

mongosse.connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }
)