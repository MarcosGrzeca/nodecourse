const jwt = require("jsonwebtoken")
const User = require("../models/user")

const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "")
        const decoded = jwt.verify(token, "thisismynewcourse")
        const user = await User.findOne({_id: decoded._id, "tokens.token" : token})
        if (!user) {
            throw new Error("Invalid credentials")
        }
        req.user = user;
        next();
    } catch (error) {
        // res.status(401).send({error: "Please authenticate."})
        res.status(401).send({error: error})
    }
}

module.exports = auth