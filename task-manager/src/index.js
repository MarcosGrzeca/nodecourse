const express = require("express")
require("./db/mongoose.js")

const Task = require("./models/task")

const userRouter = require("./routers/user")

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(userRouter)

app.post('/tasks', async (req, res) => {
    const task = new Task(req.body)
    try {
        await task.save()
        res.status(201).send(task);
    } catch (e) {
        res.status(400).send(e)
    }
})

app.get('/tasks', async (req, res) => {
    try {
        let tasks = await Task.find({})
        res.send(tasks)
    } catch (error) {
        res.status(500).send()
    }
})

app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id
    try {
        let task = await Task.findById(_id)
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)    
    } catch (error) {
        res.status(500).send()
    }
})

app.listen(port, () => {
    console.log("server is running")
})