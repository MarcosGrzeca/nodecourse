const express = require("express");
const Task = require("../models/task")
const auth = require("../middleware/auth")

const router = new express.Router()

router.post('/tasks', auth, async (req, res) => {
    req.body.owner = req.user._id
    const task = new Task(req.body)
    try {
        await task.save()
        res.status(201).send(task);
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/tasks', async (req, res) => {
    try {
        let tasks = await Task.find({})
        res.send(tasks)
    } catch (error) {
        res.status(500).send()
    }
})

router.get('/tasks/:id', async (req, res) => {
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

module.exports = router