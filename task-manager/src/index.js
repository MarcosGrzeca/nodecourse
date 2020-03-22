const express = require("express")
require("./db/mongoose.js")

const userRouter = require("./routers/user")
const taskRouter = require("./routers/task")
const authMiddleware = require("./middleware/auth")

const app = express()
const port = process.env.PORT || 3000

const multer = require("multer")
const upload = multer({
    dest: "images",
    limits : {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match("/\.(doc|docx)$")) {
        // if (!file.originalname.endsWith(".pdf")) {
            cb(new Error("File must be a doc|docx"));
        } else {
            cb(undefined, true);
        }
    }
})

app.post("/upload", upload.single("upload"), (req, res) => {
    res.send(200)
}, (error, req, res, next) => {
    res.status(400).send({error: error.message})
});

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log("server is running")
})

const errorMiddleware = (req, res, next) => {
    throw new Error("From my middleware")
}