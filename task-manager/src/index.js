const express = require("express")
require("./db/mongoose.js")
const User = require("./models/user")

const userRouter = require("./routers/user")
const taskRouter = require("./routers/task")
const authMiddleware = require("./middleware/auth")

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log("server is running")
})


const main = async () => {
    console.log("INFOO");

    const user = await User.findById("5e6e7d966278cd2ff070f0e2")
    await user.populate("tasks").execPopulate()
    console.log(user.tasks)
}

// main();