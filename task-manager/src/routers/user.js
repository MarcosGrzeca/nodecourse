const express = require("express");
const User = require("../models/user")
const auth = require("../middleware/auth")

const router = new express.Router()
router.get("/test", (req, res) => {
    res.send({"teste" :10})
});

router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save();
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)    
    }
})

router.get('/users', auth, async (req, res) => {
    try {
        const users = await User.find({});  
        res.send(users)
    } catch (error) {
        res.status(500).send()   
    }
})

router.get('/users/me', auth, async (req, res) => {
    try {
        res.send(req.user)
    } catch (error) {
        res.status(500).send()   
    }
})

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (error) {
        res.status(500).send()   
    }
})

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ["name", "email", "password", "age"]
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({error: "invalid fields"});
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators:true})
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (error) {
        res.status(400).send(error) 
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user: user, token })
    } catch (e) {
        res.status(400).send()
    }
})

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.token = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save();
        res.send()
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router